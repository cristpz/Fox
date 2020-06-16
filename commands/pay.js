const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (bot, message, args, tools) => {
  const emoji = bot.emojis.find(emoji => emoji.name === `vintagecoin`);
  if (!message.mentions.members.first()) return message.channel.send(`Please mention a valid user!`);
    
  let targetMember = message.mentions.members.first(),
      amount = parseInt(args.join(' ').replace(targetMember, ''));
  
  if(targetMember.bot) return message.reply(`you cannot give ${emoji} to bots!`);
  
  if (isNaN(amount)) return message.channel.send(`Please define a valid amount of ${emoji}!`);
  
  let targetBalance = await db.fetch(`userBalance_${targetMember.id}`),
      selfBalance = await db.fetch(`userBalance_${message.author.id}`);
  
  if (targetBalance === null) targetBalance = 0;
  if (selfBalance === null) selfBalance = 0;
  
  if (amount > selfBalance) return message.channel.send(`Sorry, your balance in your account is insufficient to make a transaction to that destination.`);
  
  if (amount < 0) return message.channel.send(`...`);
  
  db.add(`userBalance_${targetMember.id}`, amount);
  db.subtract(`userBalance_${message.author.id}`, amount);
  
  let embed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .addField("Transaction Successful!", `sent ${amount}${emoji} to ${targetMember.user.username}`)
  .setTimestamp()
  .setFooter(`From ${message.author.username}`, message.author.displayAvatarURL);

  message.channel.send(embed);
}

module.exports.help = {
  name: "pay"
}