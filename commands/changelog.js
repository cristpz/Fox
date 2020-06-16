const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let embed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle("Fox 2.10.4 - 8/6/2020")
  .setDescription('- Added p!leaderboard')
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  message.channel.send(embed);

}

module.exports.help = {
  name: "changelog"
}