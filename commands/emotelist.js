const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    // `${message.guild.emojis.map(e=>e.toString()).join(", ")}`
    // `${message.guild.channels.map(c=>c.name).join(', ')}`
    // `${message.guild.roles.map(r=>r.name).join(', ')}`
  
   message.channel.send(`**Total Emotes [${message.guild.emojis.size}]:** 

${message.guild.emojis.map(e=>e.toString()).join(' ')}`)
}

module.exports.help = {
  name: "emotelist"
}