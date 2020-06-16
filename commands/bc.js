const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, you cannot use this command.");
 
  if(message.author.bot) {
    message.delete().then(message.channel.send('done.'))
  }
}

module.exports.help = {
  name: 'bc'
}