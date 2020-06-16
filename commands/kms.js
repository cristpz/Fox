const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== '306104099185623042') return;
     message.channel.send(`<@${message.author.id}> just fucking died :wave:`);
}
  module.exports.help = {
      name: "kms"
}