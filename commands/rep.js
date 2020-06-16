const Discord = require('discord.js');
const db = require('quick.db'),
      ms = require('parse-ms');
const botconfig = require('../botconfig.json');

module.exports.run = async (bot, message, args, tools) => {
  
  if (!message.mentions.members.first()) return message.channel.send(`Please mention a valid user!`);
    
  let targetMember = message.mentions.members.first();
  
  if (targetMember.id === message.author.id) return message.reply(`you cannot give reputation to yourself!`);
  
  if(targetMember.bot) return message.reply(`you cannot give reputation to bots!`);
  
  let cooldown = 8.64e+7,
      amount = 1;
  
  let lastRep = await db.fetch(`lastRep_${message.author.id}`);
  
  if (lastRep !== null && cooldown - (Date.now() - lastRep) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastRep));
    
    message.reply(`you have already used your daily rep ➕, please wait ${timeObj.hours}h ${timeObj.minutes}m until using this command again!`);
  } else {
    message.channel.send(`${targetMember}, you got a rep point from ${message.author}!`);
    
    db.set(`lastRep_${message.author.id}`, Date.now());
    db.add(`userRep_${targetMember.id}`, `${amount}`);
  }
}
module.exports.help = {
  name: "rep" 
}