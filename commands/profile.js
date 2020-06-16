const Discord = require("discord.js");
const db = require("quick.db");
const botconfig = require("../botconfig.json");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args, tools) => {
  const emoji = bot.emojis.find(emoji => emoji.name === `vintagecoin`);
  const emoji2 = bot.emojis.find(emoji => emoji.name === `ballbama`);
  const emojico = bot.emojis.find(emoji => emoji.name === `cok`);
  const emojitestarossa = bot.emojis.find(
    emoji => emoji.name === `testarossa2`
  );
  const emojibora = bot.emojis.find(emoji => emoji.name === `bora`);
  const emojibrz = bot.emojis.find(emoji => emoji.name === `brz`);
  const emojiclio = bot.emojis.find(emoji => emoji.name === `clio`);
  const emojicorsa = bot.emojis.find(emoji => emoji.name === `corsa`);
  const emojievo = bot.emojis.find(emoji => emoji.name === `evo`);
  const emoji380rs = bot.emojis.find(emoji => emoji.name === `380rs`);
  const emojir32gtr = bot.emojis.find(emoji => emoji.name === `r32gtr`);
  const emojigolf = bot.emojis.find(emoji => emoji.name === `golfxmas`);
  const emojiw8 = bot.emojis.find(emoji => emoji.name === `vectorw8`);
  const emojistarlet = bot.emojis.find(emoji => emoji.name === `starlet`);
  const emojifused = bot.emojis.find(emoji => emoji.name === `fused`);
  
  let user = message.mentions.users.first() || message.author;

  let marriage = db.fetch(`married_${user.id}`);

  let balance = await db.fetch(`userBalance_${user.id}`);
  let rep = await db.fetch(`userRep_${user.id}`);

  let tier = db.fetch(`userTier_${user.id}`);

  let obamos = db.fetch(`obamos_${user.id}`);

  let clio = db.fetch(`clio_${user.id}`);

  let evoix = db.fetch(`evoix_${user.id}`);

  let cocaine = db.fetch(`cocaine_${user.id}`);

  let corsa = db.fetch(`corsa_${user.id}`);

  let testarossa = db.fetch(`testarossa_${user.id}`);

  let bora = db.fetch(`bora_${user.id}`);

  let brz = db.fetch(`brz_${user.id}`);

  let rs = db.fetch(`380rs_${user.id}`);
  
  let golfxmas = db.fetch(`golfxmas_${user.id}`);
  
  let r32gtr = db.fetch(`r32gtr_${user.id}`);
  
  let w8 = db.fetch(`w8_${user.id}`);
  
  let starlet = db.fetch(`starlet_${user.id}`);
  
  let fused = db.fetch(`fusedBadge_${user.id}`);
  
  let tree = db.fetch(`teamtreesBadge_${user.id}`);
  
  let car = db.fetch(`car_${user.id}`);

  let note = db.get(`note_${user.id}`);

  if (marriage === null) marriage = "nobody";
  if (balance === null) balance = 0;
  if (rep === null) rep = 0;
  if (tier === null) tier = `0`;
  if (obamos === null) obamos = 0;
  if (clio === null) clio = 0;
  if (cocaine === null) cocaine = 0;
  if (evoix === null) evoix = 0;
  if (corsa === null) corsa = 0;
  if (testarossa === null) testarossa = 0;
  if (bora === null) bora = 0;
  if (brz === null) brz = 0;
  if (rs === null) rs = 0;
  if (golfxmas === null) golfxmas = 0;
  if (r32gtr === null) r32gtr = 0;
  if (w8 === null) w8 = 0;
  if (starlet === null) starlet = 0;
  
  if (car === null) car = '-';
  
  if (note === null) note = "-";
  
  let title = 'User';
  
  if (fused === null) fused = "⠀";
  if (fused === 1) fused = emojifused,
    title = 'Fused';
  
  if (tree === null) tree = "⠀";
  if (tree === 1) tree = "🎄";

  if (!xp[user.id]) {
    xp[user.id] = {
      xp: 0,
      level: 1
    };
  }
  let curxp = xp[user.id].xp;
  let curlvl = xp[user.id].level;
  let nxtLvlXp = curlvl * 300;
  let difference = nxtLvlXp - curxp;

  let embed = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username} | ${title} Profile`)
    .addField(`Note`, note)
    .addField(`Drives a(n)`, car)
    .addField(`Tier`, tier)
    .addField(`Balance`, balance + ` ${emoji}`)
    .addField(`Reputation`, rep)
    .addField(
      `Items`,
      `${emojico} ${cocaine}g, ${emoji2} x${obamos}, ${emojibora} x${bora}, ${emojicorsa} x${corsa}, ${emojibrz} x${brz}, ${emojiclio} x${clio}, ${emojievo} x${evoix}, ${emojir32gtr} x${r32gtr}, ${emojitestarossa} x${testarossa}, ${emojiw8} x${w8}, ${emojistarlet} x${starlet} | Special: ${emojigolf} x${golfxmas}`
    )
    .addField(`Badges`, `${fused} ${tree}`)
    .addField(`Level`, curlvl, true)
    .addField(`XP`, curxp)
    .addField(`Progress`, `${curxp}/${nxtLvlXp}`)
    .addField(`Remaining XP`, `${difference} XP`, true)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL);

  /*let ownerembed = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setTitle(`${user.username} | ${title} Profile`)
    .addField(`Married to`, marriage)
    .addField(`Note`, note)
    .addField(`Drives a(n)`, car)
    .addField(`Tier`, tier)
    .addField(`Balance`, balance + ` ${emoji}`)
    .addField(`Reputation`, rep)
    .addField(
      `Items`,
      `${emojico} ${cocaine}g, ${emoji2} x${obamos}, ${emojibora} x${bora}, ${emojicorsa} x${corsa}, ${emojibrz} x${brz}, ${emojiclio} x${clio}, ${emojievo} x${evoix}, ${emojir32gtr} x${r32gtr}, ${emojitestarossa} x${testarossa}, ${emojiw8} x${w8} | Special: ${emoji380rs} x${rs}, ${emojigolf} x${golfxmas}`
    )
    .addField(`Badges`, `${fused} ${tree}`)
    .addField(`Level`, curlvl, true)
    .addField(`XP`, curxp, true)
    .addField(`Progress`, `${curxp}/${nxtLvlXp}`, true)
    .addField(`Remaining XP`, `${difference} XP`)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL);

  if (message.isMentioned("306104099185623042"))
    return message.channel.send(ownerembed);
  
  
  if (user.id === "306104099185623042") return message.channel.send(ownerembed);*/

  message.channel.send(embed);
};

module.exports.help = {
  name: "profile"
};
