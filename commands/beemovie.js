// beemovi99kbfullmovi
const Discord = require("discord.js");
const db = require("quick.db");
const botconfig = require("../botconfig.json");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args, tools) => {

  const emoji = bot.emojis.find(emoji => emoji.name === `beemovi99kbfullmovi`);
  
  await message.channel.send(`${emoji}`);
  await message.channel.send('99kb bee movie movie full 99 kb movi bee movie 99kb free download hindi movie urdu language 99kb free movie bee for free (kyrgyzstan only) (subsripe) (free) bee movie have fun')
  
};

module.exports.help = {
  name: "beemovie"
};
