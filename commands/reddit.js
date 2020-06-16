const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  
  let random = Math.floor(Math.random() * 99)+1; 
  
  let {body} = await superagent
 .get(`https://www.reddit.com/r/${args[0]}/hot.json?limit=100`);

  let embed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle(`Automatically Generated Post from r/${args[0]}`)
 .setDescription(body.data.children[random].data.title)
 .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setImage(body.data.children[random].data.url);

  message.channel.send(embed);

}


module.exports.help = {
  name: "reddit"
};
