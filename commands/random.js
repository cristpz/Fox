const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`http://api.cristpz.eu/v0.1/meme`);

  let pokeembed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle('???')
  .setTimestamp()
  .setFooter("a meme fetched by api.cristpz.eu/v0.1/meme", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvaTZe4ZAJL9Z1OgGGSmh01dRLW5qAeDf06ME-rQWRhz_ZUdmh')
  .setImage(body.url);

  message.channel.send(pokeembed);

}

module.exports.help = {
  name: "random"
}