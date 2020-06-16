const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
if(!message.mentions.members.first()) return message.reply(`Usage: !feed <user>`);

  let {body} = await superagent
  .get(`https://nekos.life/api/v2/img/feed`);

  let feedembed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle(`${message.author.username} fed ${message.mentions.members.first().user.username}`)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setImage(body.url);

  message.channel.send(feedembed);

}

module.exports.help = {
  name: "feed"
}
