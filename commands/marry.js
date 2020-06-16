const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
let marriage = db.fetch(`married_${message.author.id}`);
  
  if(!message.mentions.members.first()) return message.reply(`Usage: !marry <user>`);
  
  if(marriage !== null) return message.reply('You need to divorce your current partner in order to marry someone else!');
  
  if(marriage === null) {
    
    let startmsg = await message.channel.send(`Hey ${message.mentions.users.first()}! ${message.author} would like to marry you, react with :white_check_mark: for yes and :x: for no (This request will expire in 60 seconds)`);
    
  await startmsg.react("✅");
    
  await startmsg.react("❌");

  const filter = (reaction, user) => {
    return (
      ["✅", "❌"].includes(reaction.emoji.name) &&
      user.id === message.mentions.users.first().id
    );
  };

  startmsg
    .awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] })
    .then(collected => {
      const reaction = collected.first();

      if (reaction.emoji.name === "✅") {
        db.push(`married_${message.author.id}`, message.mentions.users.first().tag);
        db.push(`married_${message.mentions.users.first().id}`, message.author.tag);
        message.channel.send(`**Congratulations,** ${message.author} **and** ${message.mentions.users.first()} **!** :tada:`);
      }
      if (reaction.emoji.name === "❌") {
        startmsg.delete();
        message.channel.send(`${message.mentions.users.first().tag} denied your request, better luck next time!`)
      }
    })
    .catch(collected => {
    });
  }
}

module.exports.help = {
  name: "marry"
}