const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
let m421 = args.join(" ");
 if (!m421) return message.channel.send('Please define a name.')
 if (m421.length > 100) return message.channel.send(`I can't rate your waifu! It's over 100 characters!`)
 let result = Math.floor((Math.random() * 100) + 0);

   const happyrate = new Discord.RichEmbed()
 .setDescription(`I would rate **${m421}** ${result}/100, Perfect`)
 .setColor("#ffa500")
   .setTimestamp()
   .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
if (result > 90) return message.channel.send(happyrate);
     const sadembed = new Discord.RichEmbed()
 .setDescription(`I would rate **${m421}** ${result}/100, Nah`)
 .setColor("#ffa500")
     .setTimestamp()
     .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
if (result < 30) return message.channel.send(sadembed);
       const idkembed = new Discord.RichEmbed()
 .setDescription(`I would rate **${m421}** ${result}/100, Idk :neutral_face:`)
 .setColor("#ffa500")
       .setTimestamp()
       .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
if (result > 40) return message.channel.send(idkembed);
     const shrugembed = new Discord.RichEmbed()
 .setDescription(`I would rate **${m421}** ${result}/100, :shrug:`)
 .setColor("#ffa500")
     .setTimestamp()
     .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
 if (result > 50) return message.channel.send(shrugembed);
         const okembed = new Discord.RichEmbed()
 .setDescription(`I would rate **${m421}** ${result}/100, Nice :slight_smile:`)
 .setColor("#ffa500")
         .setTimestamp()
         .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
if (result > 60) return message.channel.send(okembed);
const thumbupembed = new Discord.RichEmbed()
 .setDescription(`I would rate **${m421}** ${result}/100, Very nice :smiley:`)
 .setColor("#ffa500")
.setTimestamp()
.setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
if (result > 70) return message.channel.send(thumbupembed);
const eyesembed = new Discord.RichEmbed()
 .setDescription(`I would rate **${m421}** ${result}/100, Close to perfect`)
 .setColor("#ffa500")
.setTimestamp()
   .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
 if (result > 80) return message.channel.send(eyesembed);

}

module.exports.help = {
  name: "rate"
}
