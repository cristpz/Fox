const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://weebs.cf/random/laugh?json`);

  let lizardembed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle(`${message.author.username} laughs`)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setImage(body.url);

  message.channel.send(lizardembed);

}

module.exports.help = {
  name: "laugh"
}