const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  
  const db = require("quick.db");
  const nsfw = db.fetch(`nsfw_${message.guild.id}`);
  if (nsfw === 0)
    return message.channel.send(
      "NSFW is turned OFF for this server, use !help nsfw for more info!"
    );
  if (!message.channel.nsfw)
    return message.channel.send(
      ":warning: This channel is not marked as **NSFW**"
    );
  
  let random = Math.floor(Math.random() * 99)+1; 
  
  let {body} = await superagent
 .get(`https://www.reddit.com/r/animemidriff/hot.json?limit=100`);

  let embed = new Discord.RichEmbed()
  .setColor("#ffa500")
 .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setImage(body.data.children[random].data.url);

  message.channel.send(embed);

}


module.exports.help = {
  name: "tummy"
};