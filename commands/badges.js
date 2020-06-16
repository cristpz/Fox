const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
  
  const emoji = bot.emojis.find(emoji => emoji.name === `vintagecoin`);
  const emojifused = bot.emojis.find(emoji => emoji.name === `fused`);
  const balance = db.fetch(`userBalance_${message.author.id}`);
  const fused = db.fetch(`fusedBadge_${message.author.id}`);
  
  const embed = new Discord.RichEmbed()
  .setTitle(`Badges List [2]`)
  .setDescription("Usage: !badges <buy/sell> <badge>")
  .addField(`Fused Badge ${emojifused} (fused)`, `Buy for: 1000${emoji} | Sell for: 500${emoji}`)
  .addField(`Team Trees Badge 🎄`, `DM Akemi#2314 to get this badge!`)
  .setColor("#ffa500")
  .setThumbnail("https://discordapp.com/assets/117476c82e097a60f93a9447b67d0dbf.svg")
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  if (!args[0]) return message.channel.send(embed);
  if (args[0] === 'help') return message.channel.send(embed);
  if (!args.join(' ')) return message.channel.send(embed);
  if (!args[1]) return message.channel.send("How about rechecking the badges list? Use !badges to see the list.");
  
  if (args[0] === 'buy') {
    
    if (args[1] === 'fused') {
      
      if (fused === 1) return message.reply('you already have that badge.')
      
      if (fused === null) {
        
        if (balance < 1000) return message.channel.send("Your balance is insufficient for this purchase!");
        
        db.subtract(`userBalance_${message.author.id}`, 1000);
        db.add(`fusedBadge_${message.author.id}`, 1),
          message.channel.send(`Bought the FUSED badge (${emojifused}) for 1000${emoji}`);
        
      }
      
    }
    
  }
  
  if (args[0] === 'sell') {
    
    if (args[1] === 'fused') {
      
      if (fused === null) return message.reply('you don\'t have that badge.')
      
      if (fused === 1) {
        
        db.delete(`fusedBadge_${message.author.id}`),
          db.add(`userBalance_${message.author.id}`, 500),
          message.channel.send(`Sold the FUSED badge (${emojifused}) for 500${emoji}`);
        
      }
      
    }
    
  }
  
}

module.exports.help = {
  name: "badges"
}