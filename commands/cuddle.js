const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
   
  if(!message.mentions.members.first()) return message.reply(`Usage: !cuddle <user>`);

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
  .get(`https://nekos.life/api/v2/img/cuddle`);

  let cuddleembed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle(`${message.author.username} cuddled with ${message.mentions.members.first().user.username}`)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setImage(body.url);

  message.channel.send(cuddleembed);
  }
  
   if (args[1]) {
     
  const user = getUserFromMention(args[0]);
  const user1 = getUserFromMention(args[1]);
     
    let {body} = await superagent
  .get(`https://nekos.life/api/v2/img/cuddle`);

  let cuddleembed2 = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle(`${message.author.username} cuddled with ${user.username} and ${user1.username}`)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  .setImage(body.url);
     
  message.channel.send(cuddleembed2);
  }
  
}

module.exports.help = {
  name: "cuddle"
}
