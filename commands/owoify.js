const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
 let text = args.slice(0).join(" ");
  if (!text) return message.reply(`usage: !owoify <text>`);
let {body} = await superagent
  .get(`https://nekos.life/api/v2/owoify?text=${text}`);  
        let owoembed = new Discord.RichEmbed()
        .setColor('#ffa500')
        .addField('OwOified Text', body.owo)
        .setTimestamp()
        .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
        message.channel.send(owoembed);
}

module.exports.help = {
  name: "owoify"
}
