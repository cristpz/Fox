const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  const nsfw = db.fetch(`nsfw_${message.guild.id}`);

  const nsfwembedON = new Discord.RichEmbed()
    .setTitle("**" + message.guild.name + "**")
    .setColor("#ffa500")
    .setDescription(`NSFW is: ON`)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  const nsfwembedOFF = new Discord.RichEmbed()
    .setTitle("**" + message.guild.name + "**")
    .setColor("#ffa500")
    .setDescription(`NSFW is: OFF`)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  const nsfwembedDEFAULT = new Discord.RichEmbed()
    .setTitle("**" + message.guild.name + "**")
    .setColor("#ffa500")
    .setDescription(`NSFW is: ON (Default)`)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  if (!args[0] && nsfw === 1) return message.channel.send(nsfwembedON);
  if (!args[0] && nsfw === 0) return message.channel.send(nsfwembedOFF);
  if (!args[0] && nsfw === null) return message.channel.send(nsfwembedDEFAULT);

  if (args[0] === "help") {
    message.reply(
      "Usage: !nsfw (on/off) (enables/disables NSFW in this server)"
    );
    return;
  }

  if (args[0] === "on") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return errors.noPerms(message, "ADMINISTRATOR");
    await db.delete(`nsfw_${message.guild.id}`);
    await db.push(`nsfw_${message.guild.id}`, 1);
    await console.log(`NSFW ON: ${message.guild.name}`);
    await message.channel.send(`NSFW has been turned to ON for this server!`);
  }

  if (args[0] === "off") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return errors.noPerms(message, "ADMINISTRATOR");
    await db.delete(`nsfw_${message.guild.id}`);
    await db.push(`nsfw_${message.guild.id}`, 0);
    await console.log(`NSFW OFF: ${message.guild.name}`);
    await message.channel.send(`NSFW has been turned to OFF for this server!`);
  }
};

module.exports.help = {
  name: "nsfw"
};
