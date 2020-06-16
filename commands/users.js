const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setDescription(`Currently serving ${bot.users.size} users, on ${bot.guilds.size} guilds!`)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setColor("#ffa500");
  message.channel.send(embed)
    }

module.exports.help = {
  name: "usercount"
}
