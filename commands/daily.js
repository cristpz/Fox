const Discord = require('discord.js');
const botconfig = require('../botconfig.json');
const db = require('quick.db'),
      ms = require('parse-ms');

module.exports.run = async (bot, message, args, tools) => {
  const emoji = bot.emojis.find(emoji => emoji.name === `vintagecoin`);
  let cooldown = 4.32e+7,
      amount = 250;
  
  let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);
  
  let specialLD = await db.fetch(`specialLD_${message.author.id}`);
  
  let tier = await db.fetch(`userTier_${message.author.id}`);
  
  if (tier === 2) {
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastDaily));
    
    message.reply(`you have already collected your daily ${emoji}, please wait ${timeObj.hours}h ${timeObj.minutes}m until using this command again!`);
  } else {
    message.channel.send(`Successfully collected ${amount * 2}${emoji}! (x2, Tier 2 bonus)`);
    
    db.set(`lastDaily_${message.author.id}`, Date.now());
    db.add(`userBalance_${message.author.id}`, 250 * 2);
  }
  }
  
    if (tier === 3) {
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastDaily));
    
    message.reply(`you have already collected your daily ${emoji}, please wait ${timeObj.hours}h ${timeObj.minutes}m until using this command again!`);
  } else {
    message.channel.send(`Successfully collected ${amount * 3}${emoji}! (x3, Tier 3 bonus)`);
    
    db.set(`lastDaily_${message.author.id}`, Date.now());
    db.add(`userBalance_${message.author.id}`, 250 * 3);
  }
  }
  
    if (tier === 4) {
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastDaily));
    
    message.reply(`you have already collected your daily ${emoji}, please wait ${timeObj.hours}h ${timeObj.minutes}m until using this command again!`);
  } else {
    message.channel.send(`Successfully collected ${amount * 4}${emoji}! (x4, Tier 4 bonus)`);
    
    db.set(`lastDaily_${message.author.id}`, Date.now());
    db.add(`userBalance_${message.author.id}`, 250 * 4);
  }
  }
  
    if (tier === 5) {
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastDaily));
    
    message.reply(`you have already collected your daily ${emoji}, please wait ${timeObj.hours}h ${timeObj.minutes}m until using this command again!`);
  } else {
    message.channel.send(`Successfully collected ${amount * 5}${emoji}! (x5, Tier 5 bonus)`);
    
    db.set(`lastDaily_${message.author.id}`, Date.now());
    db.add(`userBalance_${message.author.id}`, 250 * 5);
  }
  }
     if (tier === 6) {
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastDaily));
    
    message.reply(`you have already collected your daily ${emoji}, please wait ${timeObj.hours}h ${timeObj.minutes}m until using this command again!`);
  } else {
    message.channel.send(`Successfully collected ${amount * 6}${emoji}! (x6, Tier 6 bonus)`);
    
    db.set(`lastDaily_${message.author.id}`, Date.now());
    db.add(`userBalance_${message.author.id}`, 250 * 6);
  }
  }
     if (tier === 7) {
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastDaily));
    
    message.reply(`you have already collected your daily ${emoji}, please wait ${timeObj.hours}h ${timeObj.minutes}m until using this command again!`);
  } else {
    message.channel.send(`Successfully collected ${amount * 7}${emoji}! (x7, Tier 7 bonus)`);
    
    db.set(`lastDaily_${message.author.id}`, Date.now());
    db.add(`userBalance_${message.author.id}`, 250 * 7);
  }
  }
     if (tier === 8) {
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastDaily));
    
    message.reply(`you have already collected your daily ${emoji}, please wait ${timeObj.hours}h ${timeObj.minutes}m until using this command again!`);
  } else {
    message.channel.send(`Successfully collected ${amount * 8}${emoji}! (x8, Tier 8 bonus)`);
    
    db.set(`lastDaily_${message.author.id}`, Date.now());
    db.add(`userBalance_${message.author.id}`, 250 * 8);
  }
  }
     if (tier === 9) {
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastDaily));
    
    message.reply(`you have already collected your daily ${emoji}, please wait ${timeObj.hours}h ${timeObj.minutes}m until using this command again!`);
  } else {
    message.channel.send(`Successfully collected ${amount * 9}${emoji}! (x9, Tier 9 bonus)`);
    
    db.set(`lastDaily_${message.author.id}`, Date.now());
    db.add(`userBalance_${message.author.id}`, 250 * 9);
  }
  }
     if (tier === 10) {
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastDaily));
    
    message.reply(`you have already collected your daily ${emoji}, please wait ${timeObj.hours}h ${timeObj.minutes}m until using this command again!`);
  } else {
    message.channel.send(`Successfully collected ${amount * 10}${emoji}! (x10, Tier 10 bonus)`);
    
    db.set(`lastDaily_${message.author.id}`, Date.now());
    db.add(`userBalance_${message.author.id}`, 250 * 10);
  }
  }
  
  if(tier === null) {
  if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastDaily));
    
    message.reply(`you have already collected your daily ${emoji}, please wait ${timeObj.hours}h ${timeObj.minutes}m until using this command again!`);
  } else {
    message.channel.send(`Successfully collected ${amount}${emoji}!`);
    
    db.set(`lastDaily_${message.author.id}`, Date.now());
    db.add(`userBalance_${message.author.id}`, 250);
  }
  }
  
  if(tier === 1) {
  if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastDaily));
    
    message.reply(`you have already collected your daily ${emoji}, please wait ${timeObj.hours}h ${timeObj.minutes}m until using this command again!`);
  } else {
    message.channel.send(`Successfully collected ${amount}${emoji}!`);
    
    db.set(`lastDaily_${message.author.id}`, Date.now());
    db.add(`userBalance_${message.author.id}`, 250);
  }
 }
}
module.exports.help = {
  name: "daily" 
}