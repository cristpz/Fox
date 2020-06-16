const Discord = require('discord.js');
const db = require('quick.db'),
      ms = require('parse-ms');

module.exports.run = async (bot, message, args, tools) => {

  const emoji = bot.emojis.find(emoji => emoji.name === `vintagecoin`);
  
  var randomnumber = Math.floor(Math.random() * 50);
  let amount = randomnumber;
  
  let tier = await db.fetch(`userTier_${message.author.id}`);
  
  let thanks = ["serving in the sinovietnamese war", "making a sick cross-platform videogame :sunglasses:", "supporting the veterans", "actually caring about this bot", "working as a tesco cashier", "driving some old rusty atego loaded with 10 tons of cardboard from Newcastle, UK to Bratislava, SK", "your very useful information please tell us much more about this interesting topic :thumbsup:"];

let thanks1 = Math.floor((Math.random() * thanks.length));  

  if (tier === 1) {
    message.channel.send(`Thank you for ${thanks[thanks1]}, you have earned ${amount + 100}${emoji}! (+100, Tier 1 bonus)`);
    
    db.add(`userBalance_${message.author.id}`, amount + 100);
  }
  if (tier === 2) {
    message.channel.send(`Thank you for ${thanks[thanks1]}, you have earned ${amount + 200}${emoji}! (+200, Tier 2 bonus)`);
    
    db.add(`userBalance_${message.author.id}`, amount + 200);
  }
  if (tier === 3) {
    message.channel.send(`Thank you for ${thanks[thanks1]}, you have earned ${amount + 300}${emoji}! (+300, Tier 3 bonus)`);
    
    db.add(`userBalance_${message.author.id}`, amount + 300);
  }
  if (tier === 4) {
    message.channel.send(`Thank you for ${thanks[thanks1]}, you have earned ${amount + 400}${emoji}! (+400, Tier 4 bonus)`);
    
    db.add(`userBalance_${message.author.id}`, amount + 400);
  }
  if (tier === 5) {
    message.channel.send(`Thank you for ${thanks[thanks1]}, you have earned ${amount + 500}${emoji}! (+500, Tier 5 bonus)`);
    
    db.add(`userBalance_${message.author.id}`, amount + 500);
  }
   if (tier === 6) {
    message.channel.send(`Thank you for ${thanks[thanks1]}, you have earned ${amount + 600}${emoji}! (+600, Tier 6 bonus)`);
    
    db.add(`userBalance_${message.author.id}`, amount + 600);
  }
   if (tier === 7) {
    message.channel.send(`Thank you for ${thanks[thanks1]}, you have earned ${amount + 700}${emoji}! (+700, Tier 7 bonus)`);
    
    db.add(`userBalance_${message.author.id}`, amount + 700);
  }
   if (tier === 8) {
    message.channel.send(`Thank you for ${thanks[thanks1]}, you have earned ${amount + 800}${emoji}! (+800, Tier 8 bonus)`);
    
    db.add(`userBalance_${message.author.id}`, amount + 800);
  }
   if (tier === 9) {
    message.channel.send(`Thank you for ${thanks[thanks1]}, you have earned ${amount + 900}${emoji}! (+900, Tier 9 bonus)`);
    
    db.add(`userBalance_${message.author.id}`, amount + 900);
  }
   if (tier === 10) {
    message.channel.send(`Thank you for ${thanks[thanks1]}, you have earned ${amount + 1000}${emoji}! (+1000, Tier 10 bonus)`);
    
    db.add(`userBalance_${message.author.id}`, amount + 1000);
  }
  
  let replies = [" you lost your payment while turning back home.", " you got robbed...", " you took all that money, bought alcohol and got wasted...", " your brother stole your payment."];

let reply = Math.floor((Math.random() * replies.length));
  
  if (tier === null) {
    if (amount === 0) return message.channel.send(`Thank you for your help at the docks, but sadly,` + replies[reply]);
    message.channel.send(`Thank you for working at the docks, you have earned ${amount}${emoji}!`);
    
    db.add(`userBalance_${message.author.id}`, `${amount}`);
  }
  }


module.exports.help = {
  name: "work"
}