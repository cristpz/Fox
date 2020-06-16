const Discord = require('discord.js');
const botconfig = require('../botconfig.json');
const superagent = require('superagent');
const Canvas = require('canvas');
const snekfetch = require('snekfetch');
const errors = require("../utils/errors.js");
const cheerio = require("cheerio");
const request = require("request");
const ms = require('parse-ms');
const fs = require("fs");
const mal = require ("mal-scraper");
const address = require('address');
const db = require('quick.db');
const caterpillar = require('caterpillar');
const Twit = require('twit')
const T = new Twit({
  consumer_key:         'Ncb5MZnZQqsjPPCDOSSIngQqV',
  consumer_secret:      'N0djJGSyVog2Bo1AWTuIu9rPiM7SNVGL0KQF438tk83ms5IFRU',
  access_token:         '1097224947020238854-ZTSk9Fiqpt5bHsMOGYaeSGP8G0iM2D',
  access_token_secret:  'uVQKVBQTlOszSZrgwmIU5uF0TCeAENU3fk3i9cezzi4TS',
  timeout_ms:           60*1000,  
  strictSSL:            true,     
})
const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

module.exports.run = async (bot, message, args) => {
  
  const car = await db.get(`car_${message.author.id}`);
  
  if(message.author.id !== botconfig.ownerID) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      let embed = new Discord.RichEmbed()
      .addField('Input', `\`\`\`${args.join(' ')}\`\`\``)
      .addField('Output', `\`\`\`${clean(evaled)}\`\`\``)
      .setColor('#ffa500');
      
       message.channel.send(embed);
    } catch (err) {
      let embed = new Discord.RichEmbed()
      .addField('Input', `\`\`\`${args.join(' ')}\`\`\``)
      .addField('Error', `\`\`\`xl\n${clean(err)}\n\`\`\``)
      .setColor('#ffa500');
      
       message.channel.send(embed);
    }
}

module.exports.help = {
  name: "eval"
}
