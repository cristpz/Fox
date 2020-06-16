// https://discordapp.com/api/oauth2/authorize?client_id=311233950494359564&permissions=3524672&scope=bot

const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

 
  let lizardembed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle('Fox!music (click to invite)')
  .setURL('https://discordapp.com/api/oauth2/authorize?client_id=311233950494359564&permissions=3524672&scope=bot')
  .setDescription('A music bot for all kinds of tunes!')
  .setTimestamp()
  .setThumbnail('https://cdn.discordapp.com/avatars/311233950494359564/0d137547d44d7d10845de0f111c1fa91.png?size=2048')
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  message.channel.send(lizardembed);

}

module.exports.help = {
  name: "music"
}
