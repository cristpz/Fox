// https://api.apiflash.com/v1/urltoimage?access_key=2c122f4c538047f4affd7336fffc9003&url=https://fox-project.website

const Discord = require("discord.js");
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.reply(`Usage: !screenshot <url>`);
  if(args.join(' ').includes("http")) return message.channel.send('Please exclude any kind of http(s), since they\'re added into the URL automatically.');
  let {body} = await superagent
  .get(`https://api.apiflash.com/v1/urltoimage?access_key=2c122f4c538047f4affd7336fffc9003&url=http://${args.join(' ')}&response_type=json`)
  
   let error = new Discord.RichEmbed()
  .setTitle('An error has occurred!')
  .setDescription('the following URL is invalid.')
  
  if(body.url === ["Invalid URL."]) return message.channel.send(error);
  
  let embed = new Discord.RichEmbed()
  .setColor('#ffa500')
  .setTitle('Done')
  .setImage(body.url)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314 | Powered by APIFlash", bot.user.displayAvatarURL);
      message.channel.send(embed);

}

module.exports.help = {
  name: "screenshot"
}