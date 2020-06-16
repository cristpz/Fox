const Discord = require("discord.js");
const db = require("quick.db");
const botconfig = require("../botconfig.json");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args, tools) => {
  const emoji = bot.emojis.find(emoji => emoji.name === `vintagecoin`);
  let user = message.mentions.users.first() || message.author;

  let balance = await db.fetch(`userBalance_${user.id}`);
  let rep = await db.fetch(`rep_${user.id}`);

  let global = await db.fetch(`globalMessages_${user.id}`);
  let guild = await db.fetch(`guildMessages_${message.guild.id}.${user.id}`);

  if (balance === null) balance = 0;
  if (rep === null) rep = 0;
  if (global === null) global = 0;
  if (guild === null) guild = 0;

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
    .setTitle(`${user.username} | Bank Account`)
    .addField(`Balance`, balance + `${emoji}`)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#4040", bot.user.displayAvatarURL)
    .setThumbnail(user.displayAvatarURL);

  message.channel.send(embed);
};

module.exports.help = {
  name: "bal"
};
