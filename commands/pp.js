const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
  
  let user = message.mentions.users.first() || message.author;
  
  let replies = [` you should be a girl, right?`, ` an inch long!`, ` 2 inches long!`, ` 3 inches long!`, ` 4 inches long!`, ` 5 inches long!`, ` 6 inches long!`, ` 7 inches long!`, ` 8 inches long!`,
 ` 9 inches long!`, ` 10 inches long!`, ` 11 inches long, owo`, ` 12 inches long, OWO`, ` too long >~<`];

let result = Math.floor((Math.random() * replies.length));
  
let ppsize = db.fetch(`ppsize_${user.id}`);
  
  let ppembed2 = new Discord.RichEmbed()
.setColor("ffa500")
.addField(`${user.username}'s pp size`, 'Okay... How about we keep that topic for later, or maybe never?')
  .setTimestamp()
.setFooter("FoxBot, a bot by Akemi#4040", bot.user.displayAvatarURL);
  
  let ppembed1 = new Discord.RichEmbed()
.setColor("ffa500")
.addField(`${user.username}'s pp size`, replies[result])
  .setTimestamp()
.setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let ppembed3 = new Discord.RichEmbed()
.setColor("ffa500")
.addField(`${user.username}'s pp size`, ppsize)
  .setTimestamp()
.setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
 if (user.id === '306104099185623042') return message.channel.send(ppembed2); 
  
  if (ppsize === null) {
  
db.push(`ppsize_${user.id}`, replies[result])
message.channel.send(ppembed1);

  } else {
    
    message.channel.send(ppembed3);
    
  }

}

module.exports.help = {
  name: "ppsize"
}
