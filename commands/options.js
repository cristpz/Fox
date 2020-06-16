const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");
const errors = require("../utils/errors.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
  
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }
  let prefix = prefixes[message.guild.id].prefixes;
  
  let lvlupmsgs = db.get(`lvlupmsgs_${message.author.id}`);
  
  if (lvlupmsgs === null) db.push(`lvlupmsgs_${message.author.id}`, 0),
    lvlupmsgs = 'off (default)';
  if (lvlupmsgs === 0) lvlupmsgs = 'off';
  if (lvlupmsgs === 1) lvlupmsgs = 'on';
  
  let embedhelp = new Discord.RichEmbed()
  .setTitle('Options Menu')
  .setDescription(`Usage: ${prefix}options <option> <on/off>`)
  .addField(`Level Up Messages (lvlupmsgs)`, `${lvlupmsgs}`)
  .setColor('#ffa500')
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  if (!args[0]) return message.channel.send(embedhelp);
  if (args[0] === 'help') return message.channel.send(embedhelp);
  if (!args[1]) return message.channel.send(embedhelp);
  
  if (args[0] === 'lvlupmsgs') {
    
    if (args[1] === 'on') {
    if (lvlupmsgs === 'on') return message.reply(`you've already done that.`);
    db.delete(`lvlupmsgs_${message.author.id}`);
    db.push(`lvlupmsgs_${message.author.id}`, 1);
    message.channel.send('Enabled **lvlupmsgs** for ' + message.author);
    }
    
    if (args[1] === 'off') {
    if (lvlupmsgs === 'off') return message.reply(`you've already done that.`);
    db.delete(`lvlupmsgs_${message.author.id}`);
    db.push(`lvlupmsgs_${message.author.id}`, 0);
    message.channel.send('Disabled **lvlupmsgs** for ' + message.author);
    }
    
  }

}

module.exports.help = {
  name: "options"
}