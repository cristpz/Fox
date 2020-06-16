const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
  
  let user = message.mentions.users.first() || message.author;
  
  let replies = [
    ` you're either a man or you need to eat your veggies!`,
    ` a cups, cute!`,
    ` b cups!`,
    ` c cups!`,
    ` d cups!`,
    ` dd cups, uwu~`,
    ` dd+ cups, awa~`,
    ` e cups, o.o`,
    ` h cups, O.O <3`
  ];

  let result = Math.floor(Math.random() * replies.length);

  let titsize = db.fetch(`titsize_${user.id}`);
  
  let tiddyembed1 = new Discord.RichEmbed()
    .setColor("ffa500")
    .addField(`${user.username}'s tiddy size`, replies[result])
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let tiddyembed2 = new Discord.RichEmbed()
    .setColor("ffa500")
    .addField(`${user.username}'s tiddy size`, titsize)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  let tiddyembed3 = new Discord.RichEmbed()
    .setColor("ffa500")
    .addField(`${user.username}'s tiddy size`, `c cups ^-^`)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  if (user.id === '306104099185623042') return message.channel.send(tiddyembed3);

  if (titsize === null) {
  
  db.push(`titsize_${user.id}`, replies[result]);
  message.channel.send(tiddyembed1);
    
  } else {
    
    message.channel.send(tiddyembed2);
    
  } 
  
};

module.exports.help = {
  name: "tidsize"
};
