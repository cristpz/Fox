const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  if(!message.mentions.members.first()) return message.reply(`Usage: !love <user>`);
  
  let {body} = await superagent
  .get(`https://weebs.cf/random/love?json`);

  let lizardembed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle(`${message.author.username} fell in love with ${message.mentions.users.first().username}`)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setImage(body.url);

  message.channel.send(lizardembed);

}

module.exports.help = {
  name: "love"
}