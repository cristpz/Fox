const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
     return message.channel.send("Hi!");
}
  module.exports.help = {
      name: "hello"
}