const http = require("http");
const express = require('express'), {post, get} = require('superagent'), app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");

const fs = require("fs");

const botconfig = require("./botconfig.json");

const bot = new Discord.Client({ disableEveryone: true });

bot.commands = new Discord.Collection();

const db = require("quick.db");

var xp = require("./xp.json");

const DBL = require("dblapi.js");

app.use(express.json()); 

app.use(express.urlencoded({ extended: true }));

app.post('/dblhook', async (req, res) => {
    let auth = req.headers['authorization'];
    if(!auth) return res.json({status: "Failed", message: `You didn't provide a 'Authorization' header!`});
    if(auth !== process.env.Auth) return res.json({status: "Failed", message: `You didn't provide the correct authorization key!`});
    if(!req.body) return res.json({status: "Failed", message: `You didn't provide any data!`});
    if(!process.env.dbl) {
      console.log(`You didn't add your dbl api key in the .env file.. smh`)
      return res.status(401).json({status: false, message: `Unauthorized`})
    }
    let bot2 = req.body.bot;
  	let {body: user} = await get(`https://top.gg/api/users/${req.body.user}`).set("Authorization", process.env.dbl);
     post(process.env.Webhook)
      .send({embeds: [{
        title: `Vote Here`,
		    color: 0xffa500,
		    url: `https://top.gg/bot/${bot2}/vote`,
        timestamp: new Date(),
		    author: {
			    name: `New Vote by: ${user.username}#${user.discriminator}`,
          icon_url: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}${user.avatar.toString().startsWith("a_") ? ".gif" : ".png"}`
		    },
		    footer: {
			    text: `Fox, a bot by Akemi#2314`, 
			    icon_url: `${bot.user.avatarURL}`
		    }
      }]}).then(async() => {
       
       let vtcemoji = bot.emojis.get(emoji => emoji.name === `vintagecoin`);
       
       let user2 = await bot.fetchUser(user.id);
       
       console.log(`${user.tag} with ID ${user.id} just voted for fox on DBL!`);
       
       db.add(`userBalance_${user.id}`, 1000);
       db.add(`voteCount_${user.id}`, 1);
       
       user2.send('Thank you for your vote, you\'ve been rewarded with +1000' + vtcemoji + ' and +1 vote count (will be useful soon enough)');
       
     }).catch(console.error)
});
//app.listen(4000, () => console.log(`Website is up and running`));

const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUwODA1NDUwODc0NDYwNTcwMCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTkxNTk1MjgxfQ.kCzpb1b5Z3MizHltWjbCFl7I4JL0VJ14_xM_SX2dMRk', bot);

dbl.on('posted', () => {
  console.log('Server count posted to DBL!');
});

dbl.on('error', e => {
 console.log(`DBL Error! ${e}`);
});

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

/* bot.on("guildMemberAdd", member => {
  var role = member.guild.roles.find("id", "505140832953827338");
  var role2 = member.guild.roles.find("id", "538790551018012708");
  var role3 = member.guild.roles.find("id", "644632880907288577");

  if (!role) {
    return;
  } else {
    member.addRole(role);
  }

  if (!role2) {
    return;
  } else {
    member.addRole(role2);
  }
  
  if (!role3) {
    return;
  } else {
    member.addRole(role3);
  }
}); */

bot.on("guildCreate", guild => {
  console.log(
    `New guild added : ${guild.name}, owned by ${guild.owner.user.tag}`
  );
  
  let sicon = guild.iconURL;

  const welcomembed = new Discord.RichEmbed()
    .setTitle("Thank you a **LOT** for adding me!")
    .setDescription("Fox is a multipurpose bot for (almost) all of your needs!")
    .setThumbnail(sicon)
    .addBlankField()
    .addField(
      `Use **!help** for the list of commands`,
      `have fun searching for your favourite commands!`
    )
    .addBlankField()
    .addField(
      `Use **!suggest** if there's anything wrong with the bot`,
      `you can also give us your own suggestions/opinions there!`
    )
    .addBlankField()
    .addField(
      `For any **news** on the bot check out my twitter`,
      `[Right Here!](https://twitter.com/cristpz)`)
    .addBlankField()
    .addField(
      `**Changelog** (v2.10.4)`,
      `\`\`\`diff
++ p!leaderboard
\`\`\``)
    .setColor("#ffa500")
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let channelID;
  let channels = guild.channels;
  channelLoop: for (let c of channels) {
    let channelType = c[1].type;
    if (channelType === "text") {
      channelID = c[0];
      break channelLoop;
    }
  }

  let channel = bot.channels.get(guild.systemChannelID || channelID);
  channel.send(welcomembed);
});

/* bot.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
}); */

bot.on("message", async message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }
  let prefix = prefixes[message.guild.id].prefixes;
  if (message.isMentioned(bot.user)) {
    let serverprefx =
      "my prefix in this server is `" +
      prefix +
      "`, use `" +
      prefix +
      "help` for more commands!";
    message.reply(serverprefx);
  }

  const superagent = require("superagent");

  if (message.author.bot) return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);
  // let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if (!message.content.startsWith(prefix)) return;
  // if(commandfile) commandfile.run(bot,message,args);
  var author = message.author;

  if (message.content.startsWith(prefix)) {
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) {
      commandfile.run(bot, message, args)
      db.add("commandUsage", 1);
   }
  } /* else {
     let coinstoadd = Math.ceil(Math.random() * 50)
    console.log(coinstoadd + " coins to " + message.author.tag);
    Coins.findOne({
      userID: message.author.id,
      serverID: message.guild.id
    }, (err, kons) => {
      if(err) console.log(err)
      if (!kons) {
        const newCoins = new Coins({
          userID: message.author.id,
          serverID: message.guild.id,
          kons: coinstoadd
        });
        
        newCoins.save().catch(err => console.log(err))
      } else {
        kons.kons = kons.kons + coinstoadd;
        kons.save().catch(err => console.log(err))
      }
    });
  } */

  let xpAdd = Math.floor(Math.random() * 7) + 8;
  // console.log(`${message.author.tag}: ${args.join(" ")}`);

  if (!xp[message.author.id]) {
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp = curxp + xpAdd;
  if (nxtLvl <= xp[message.author.id].xp) {
    let lvlupmsgs = db.get(`lvlupmsgs_${message.author.id}`);
    if (lvlupmsgs === 1) {
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
      .setTitle("Level Up!")
      .setImage(message.author.displayAvatarURL)
      .setColor(botconfig.orange)
      .addField("New Level", curlvl + 1);

    message.channel.send(lvlup).then(msg => {
      msg.delete(5000);
    });
    } else if (lvlupmsgs !== 1) return xp[message.author.id].level = curlvl + 1;
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), err => {
    if (err) console.log(err);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity(`ping me to find out! | cristpz.eu`, {
    type: "STREAMING"
  });
});

bot.login(botconfig.token).catch(err => console.log(err));
