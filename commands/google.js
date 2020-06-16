const Discord = require("discord.js");
const superagent = require("superagent");

// https://www.googleapis.com/customsearch/v1?key=AIzaSyB_9n8rI2Rl-dfHwNu4S4fChW2yXuw5_OM&cx=003151332535642968728:ixse8mk2cqe&q='lol'

module.exports.run = async (bot, message, args) => {
  let { body } = await superagent.get(
    `https://www.googleapis.com/customsearch/v1?key=AIzaSyB_9n8rI2Rl-dfHwNu4S4fChW2yXuw5_OM&cx=003151332535642968728:ixse8mk2cqe&q='${args.join(
      " "
    )}'&safe=high&fields=items(title, link, pagemap/cse_image(src))`
  );

  const allinonembed = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setAuthor(`Results for: ${args.join(" ")}`)
    .setThumbnail("http://pluspng.com/img-png/google-logo-png-open-2000.png")
    .addField(body.items[0].title, `${body.items[0].link}`)
    .addField(body.items[1].title, `${body.items[1].link}`)
    .addField(body.items[2].title, `${body.items[2].link}`)
    .addField(body.items[3].title, `${body.items[3].link}`)
    .addField(body.items[4].title, `${body.items[4].link}`)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  message.channel.send(allinonembed);

  /* let searchembed1 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`Result for "${args.join("")}" [1]: **${body.items[1].title}**`)
    .setURL(body.items[1].link)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  // .setImage(body.items[1].pagemap.cse_image[0].src);
  let searchembed2 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`Result for "${args.join("")}" [2]: **${body.items[2].title}**`)
    .setURL(body.items[2].link)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  // .setImage(body.items[2].pagemap.cse_image[0].src);
  let searchembed3 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`Result for "${args.join("")}" [3]: **${body.items[3].title}**`)
    .setURL(body.items[3].link)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  // .setImage(body.items[3].pagemap.cse_image[0].src);
  let searchembed4 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`Result for "${args.join("")}" [4]: **${body.items[4].title}**`)
    .setURL(body.items[4].link)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  // .setImage(body.items[4].pagemap.cse_image[0].src);
  let searchembed5 = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`Result for "${args.join("")}" [5]: **${body.items[5].title}**`)
    .setURL(body.items[5].link)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  // .setImage(body.items[5].pagemap.cse_image[0].src);

  let startmsg = await message.channel.send(searchembed1);
  await startmsg.react("🇦");
  await startmsg.react("🇧");
  await startmsg.react("🇨");
  await startmsg.react("🇩");
  await startmsg.react("🇪");
  await startmsg.react("❌");

  const filter = (reaction, user) => {
    return (
      ["🇦", "🇧", "🇨", "🇩", "🇪", "❌"].includes(reaction.emoji.name) &&
      user.id === message.author.id
    );
  };

  startmsg
    .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
    .then(collected => {
      const reaction = collected.first();

      if (reaction.emoji.name === "🇦") {
        message.channel.send(searchembed1);
      }
      if (reaction.emoji.name === "🇧") {
        message.channel.send(searchembed2);
      }
      if (reaction.emoji.name === "🇨") {
        message.channel.send(searchembed3);
      }
      if (reaction.emoji.name === "🇩") {
        message.channel.send(searchembed4);
      }
      if (reaction.emoji.name === "🇪") {
        message.channel.send(searchembed5);
      }
      if (reaction.emoji.name === "❌") {
        startmsg.delete();
      }
    })
    .catch(collected => {
    }); */

  /* .catch(async err => {
    let {body} = await superagent
  .get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyB_9n8rI2Rl-dfHwNu4S4fChW2yXuw5_OM&cx=003151332535642968728:ixse8mk2cqe&q='${args.join(' ')}'&safe=high&fields=items(title, link, pagemap/cse_image(src))`);
    let searchembederr = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle(`Result for "${args.join('')}": **${body.items[0].title}**`)
  .setURL(body.items[0].link)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setImage('https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1.png');
  if (err) return message.channel.send(searchembederr);
  }); */
};

module.exports.help = {
  name: "google"
};
