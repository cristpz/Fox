const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  if(!message.mentions.members.first()) return message.reply(`Usage: !slap <user>`);
  
    function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return bot.users.get(mention);
	}
}
    
  if (!args[1]){
 let {body} = await superagent
  .get(`https://nekos.life/api/v2/img/slap`);

  let slapembed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle(`${message.author.username} slapped ${message.mentions.members.first().user.username}`)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setImage(body.url);

  message.channel.send(slapembed);
  }
  
   if (args[1]) {
     
  const user = getUserFromMention(args[0]);
  const user1 = getUserFromMention(args[1]);
     
  let {body} = await superagent
  .get(`https://nekos.life/api/v2/img/slap`);

  let slapembed2 = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle(`${message.author.username} slapped ${user.username} and ${user1.username}`)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setImage(body.url);

  message.channel.send(slapembed2);
     
  }
  

}

module.exports.help = {
  name: "slap"
}
