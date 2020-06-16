const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let cheers = '🍻';
 
  await message.react(cheers);
  
}

module.exports.help = {
  name: "cheers"
}
