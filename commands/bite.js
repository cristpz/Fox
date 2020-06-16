const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  if(!message.mentions.members.first()) return message.reply(`Usage: !bite <user>`);
  
  let {body} = await superagent
  .get(`https://weebs.cf/random/bite?json`);

  let lizardembed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle(`${message.author.username} bit ${message.mentions.users.first().username}`)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setImage(body.url);

  message.channel.send(lizardembed);

}

module.exports.help = {
  name: "bite"
}
