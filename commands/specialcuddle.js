const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let specialcuddleembed = new Discord.RichEmbed()
     .setTitle(`${message.author.tag}, here have a cuddle from me ^-^`)
     .setColor("#ffa500")
     .setImage("https://thumbs.gfycat.com/BiodegradableFluffyBluefish-size_restricted.gif")
.setTimestamp()
.setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  message.channel.send(specialcuddleembed);
  }
module.exports.help = {
  name: "specialcuddle"
}
