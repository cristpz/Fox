const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
let marriage = db.fetch(`married_${message.author.id}`);
  
  if(!message.mentions.members.first()) return message.reply(`Usage: !divorce <user>`);
  
  if(marriage === null) {
    message.channel.send(`But, you're already free?`);
  }
  
  if(marriage !== null) {
    db.delete(`married_${message.author.id}`);
    db.delete(`married_${message.mentions.users.first().id}`);
    message.channel.send(`${message.mentions.users.first()}, ouch...`);
  }
  
}

module.exports.help = {
  name: "divorce"
}