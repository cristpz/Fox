const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.reply(`Usage: !osulatest <user>`);
  let user = args.slice(0).join(" ");
  let {body} = await superagent
  .get(`https://osu.ppy.sh/api/get_user_recent?type=string&u=${user}&k=b36f27f1aa49e74d23a2a233e61e1976f2c90923`);

  let osuembed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setThumbnail(`https://vignette.wikia.nocookie.net/fantendo/images/1/12/Osu%21_logo.png/revision/latest?cb=20160523003852`)
  .setTitle(`${user} | osu! latest play`)
  .addField("Score", body[0].score, true)
  .addField("Max Combo", body[0].maxcombo, true)
  .addField("50", body[0].count50, true)
  .addField("100", body[0].count100, true)
  .addField("300", body[0].count300, true)
  .addField("Katu", body[0].countkatu, true)
  .addField("Geki", body[0].countgeki, true)
  .addField("Miss", body[0].countmiss, true)
  .addField("Perfect", body[0].perfect, true)
  .addField("At", body[0].date, true)
  .addField("Rank", body[0].rank, true)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  message.channel.send(`https://osu.ppy.sh/beatmaps/${body[0].beatmap_id}#osu/`);
  message.channel.send(osuembed);
}
  
module.exports.help = {
  name: "osulatest"
  
}