const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`http://shibe.online/api/shibes`);

  let shibeembed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle("Shib shibe inu oki!")
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setImage(body[0]);

  message.channel.send(shibeembed);

}

module.exports.help = {
  name: "shibe"
}
