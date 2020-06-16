const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
  
let ship = db.fetch(`${message.author.id}.${message.mentions.users.first().id}`);
  
 let result = Math.floor((Math.random() * 100) + 0);
  
  let embed1 = new Discord.RichEmbed()
.setColor("ffa500")
.addField(`💖 ${message.author.username} x ${message.mentions.users.first().username} 💖`, `${result}%`)
  .setTimestamp()
.setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let embed2 = new Discord.RichEmbed()
.setColor("ffa500")
.addField(`💖 ${message.author.username} x ${message.mentions.users.first().username} 💖`, `${ship}%`)
  .setTimestamp()
.setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  // if (ship === null) {
  
// db.push(`${message.author.id}.${message.mentions.users.first().id}`, result)
// db.push(`${message.mentions.users.first().id}.${message.author.id}`, result)
message.channel.send(embed1);

  // } else {
    
    // message.channel.send(embed2);
    
  // }

}

module.exports.help = {
  name: "ship"
}
