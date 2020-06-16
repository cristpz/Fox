const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://randomfox.ca/floof/`);

  let catembed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle("Floof oki!")
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setImage(body.image);

  message.channel.send(catembed);

}

module.exports.help = {
  name: "fox"
}
