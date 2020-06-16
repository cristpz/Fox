const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.reply(`Usage: !osurecent <user>`);
  let user = args.slice(0).join(" ");
  let {body} = await superagent
  .get(`https://osu.ppy.sh/api/get_user_recent?type=string&u=${user}&k=b36f27f1aa49e74d23a2a233e61e1976f2c90923`);

  let osuembed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setThumbnail(`https://vignette.wikia.nocookie.net/fantendo/images/1/12/Osu%21_logo.png/revision/latest?cb=20160523003852`)
  .setTitle(`${user} | osu! recent plays (1)`)
  .addField("Score", body[0].score, true)
  .addField("Max Combo", body[0].maxcombo, true)
  .addField("50", body[0].count50, true)
  .addField("100", body[0].count100, true)
  .addField("300", body[0].count300, true)
  .addField("Miss", body[0].countmiss, true)
  .addField("Katu", body[0].countkatu, true)
  .addField("Geki", body[0].countgeki, true)
  .addField("Perfect", body[0].perfect, true)
  .addField("At", body[0].date, true)
  .addField("Rank", body[0].rank, true)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
 await message.channel.send(`https://osu.ppy.sh/beatmaps/${body[0].beatmap_id}#osu/`);
  await message.channel.send(osuembed);
  
    let osuembed1 = new Discord.RichEmbed()
  .setColor("#ffa500")
    .setThumbnail(`https://vignette.wikia.nocookie.net/fantendo/images/1/12/Osu%21_logo.png/revision/latest?cb=20160523003852`)
  .setTitle(`${user} | osu! recent plays (2)`)
  .addField("Score", body[1].score, true)
  .addField("Max Combo", body[1].maxcombo, true)
  .addField("50", body[1].count50, true)
  .addField("100", body[1].count100, true)
  .addField("300", body[1].count300, true)
  .addField("Miss", body[1].countmiss, true)
  .addField("Katu", body[1].countkatu, true)
  .addField("Geki", body[1].countgeki, true)
  .addField("Perfect", body[1].perfect, true)
  .addField("At", body[1].date, true)
  .addField("Rank", body[1].rank, true)
    .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
 await message.channel.send(`https://osu.ppy.sh/beatmaps/${body[1].beatmap_id}#osu/`);
  await message.channel.send(osuembed1);
  
  let osuembed2 = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setThumbnail(`https://vignette.wikia.nocookie.net/fantendo/images/1/12/Osu%21_logo.png/revision/latest?cb=20160523003852`)
  .setTitle(`${user} | osu! recent plays (3)`)
  .addField("Score", body[2].score)
  .addField("Max Combo", body[2].maxcombo)
  .addField("50", body[2].count50)
  .addField("100", body[2].count100)
  .addField("300", body[2].count300)
  .addField("Miss", body[2].countmiss)
  .addField("Katu", body[2].countkatu)
  .addField("Geki", body[2].countgeki)
  .addField("Perfect", body[2].perfect, true)
  .addField("At", body[2].date)
  .addField("Rank", body[2].rank)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
 await message.channel.send(`https://osu.ppy.sh/beatmaps/${body[2].beatmap_id}#osu/`);
 await  message.channel.send(osuembed2);
  
    let osuembed3 = new Discord.RichEmbed()
  .setColor("#ffa500")
    .setThumbnail(`https://vignette.wikia.nocookie.net/fantendo/images/1/12/Osu%21_logo.png/revision/latest?cb=20160523003852`)
  .setTitle(`${user} | osu! recent plays (4)`)
  .addField("Score", body[3].score, true)
  .addField("Max Combo", body[3].maxcombo, true)
  .addField("50", body[3].count50, true)
  .addField("100", body[3].count100, true)
  .addField("300", body[3].count300, true)
  .addField("Miss", body[3].countmiss, true)
  .addField("Katu", body[3].countkatu, true)
  .addField("Geki", body[3].countgeki, true)
  .addField("Perfect", body[3].perfect, true)
  .addField("At", body[3].date, true)
  .addField("Rank", body[3].rank, true)
    .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
 await message.channel.send(`https://osu.ppy.sh/beatmaps/${body[3].beatmap_id}#osu/`);
  await message.channel.send(osuembed3);
  
      let osuembed4 = new Discord.RichEmbed()
  .setColor("#ffa500")
      .setThumbnail(`https://vignette.wikia.nocookie.net/fantendo/images/1/12/Osu%21_logo.png/revision/latest?cb=20160523003852`)
      .setThumbnail(`https://vignette.wikia.nocookie.net/fantendo/images/1/12/Osu%21_logo.png/revision/latest?cb=20160523003852`)
  .setTitle(`${user} | osu! recent plays (5)`)
  .addField("Score", body[4].score, true)
  .addField("Max Combo", body[4].maxcombo, true)
  .addField("50", body[4].count50, true)
  .addField("100", body[4].count100, true)
  .addField("300", body[4].count300, true)
  .addField("Miss", body[4].countmiss, true)
  .addField("Katu", body[4].countkatu, true)
  .addField("Geki", body[4].countgeki, true)
  .addField("Perfect", body[4].perfect, true)
  .addField("At", body[4].date, true)
  .addField("Rank", body[4].rank, true)
      .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
 await message.channel.send(`https://osu.ppy.sh/beatmaps/${body[4].beatmap_id}#osu/`);
  await message.channel.send(osuembed4);

        let osuembed5 = new Discord.RichEmbed()
  .setColor("#ffa500")
        .setThumbnail(`https://vignette.wikia.nocookie.net/fantendo/images/1/12/Osu%21_logo.png/revision/latest?cb=20160523003852`)
  .setTitle(`${user} | osu! recent plays (6)`)
  .addField("Score", body[5].score, true)
  .addField("Max Combo", body[5].maxcombo, true)
  .addField("50", body[5].count50, true)
  .addField("100", body[5].count100, true)
  .addField("300", body[5].count300, true)
  .addField("Miss", body[5].countmiss, true)
  .addField("Katu", body[5].countkatu, true)
  .addField("Geki", body[5].countgeki, true)
  .addField("Perfect", body[5].perfect, true)
  .addField("At", body[5].date, true)
  .addField("Rank", body[5].rank, true)
        .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
 await message.channel.send(`https://osu.ppy.sh/beatmaps/${body[5].beatmap_id}#osu/`);
  await message.channel.send(osuembed5);
  
          let osuembed6 = new Discord.RichEmbed()
  .setColor("#ffa500")
          .setThumbnail(`https://vignette.wikia.nocookie.net/fantendo/images/1/12/Osu%21_logo.png/revision/latest?cb=20160523003852`)
  .setTitle(`${user} | osu! recent plays (7)`)
  .addField("Score", body[6].score, true)
  .addField("Max Combo", body[6].maxcombo, true)
  .addField("50", body[6].count50, true)
  .addField("100", body[6].count100, true)
  .addField("300", body[6].count300, true)
  .addField("Miss", body[6].countmiss, true)
  .addField("Katu", body[6].countkatu, true)
  .addField("Geki", body[6].countgeki, true)
  .addField("Perfect", body[6].perfect, true)
  .addField("At", body[6].date, true)
  .addField("Rank", body[6].rank, true)
          .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
 await message.channel.send(`https://osu.ppy.sh/beatmaps/${body[6].beatmap_id}#osu/`);
  await message.channel.send(osuembed6);
  
            let osuembed7 = new Discord.RichEmbed()
  .setColor("#ffa500")
            .setThumbnail(`https://vignette.wikia.nocookie.net/fantendo/images/1/12/Osu%21_logo.png/revision/latest?cb=20160523003852`)
  .setTitle(`${user} | osu! recent plays (8)`)
  .addField("Score", body[7].score, true)
  .addField("Max Combo", body[7].maxcombo, true)
  .addField("50", body[7].count50, true)
  .addField("100", body[7].count100, true)
  .addField("300", body[7].count300, true)
  .addField("Miss", body[7].countmiss, true)
  .addField("Katu", body[7].countkatu, true)
  .addField("Geki", body[7].countgeki, true)
  .addField("Perfect", body[7].perfect, true)
  .addField("At", body[7].date, true)
  .addField("Rank", body[7].rank, true)
            .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
  await message.channel.send(`https://osu.ppy.sh/beatmaps/${body[7].beatmap_id}#osu/`);
  await message.channel.send(osuembed7);
  
              let osuembed8 = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setThumbnail(`https://vignette.wikia.nocookie.net/fantendo/images/1/12/Osu%21_logo.png/revision/latest?cb=20160523003852`)
  .setTitle(`${user} | osu! recent plays (9)`)
  .addField("Score", body[8].score, true)
  .addField("Max Combo", body[8].maxcombo, true)
  .addField("50", body[8].count50, true)
  .addField("100", body[8].count100, true)
  .addField("300", body[8].count300, true)
  .addField("Miss", body[8].countmiss, true)
  .addField("Katu", body[8].countkatu, true)
  .addField("Geki", body[8].countgeki, true)
  .addField("Perfect", body[8].perfect, true)
  .addField("At", body[8].date, true)
  .addField("Rank", body[8].rank, true)
              .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
 await message.channel.send(`https://osu.ppy.sh/beatmaps/${body[8].beatmap_id}#osu/`);
 await message.channel.send(osuembed8);
  
                let osuembed9 = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setThumbnail(`https://vignette.wikia.nocookie.net/fantendo/images/1/12/Osu%21_logo.png/revision/latest?cb=20160523003852`)
  .setTitle(`${user} | osu! recent plays (10)`)
  .addField("Score", body[9].score, true)
  .addField("Max Combo", body[9].maxcombo, true)
  .addField("50", body[9].count50, true)
  .addField("100", body[9].count100, true)
  .addField("300", body[9].count300, true)
  .addField("Miss", body[9].countmiss, true)
  .addField("Katu", body[9].countkatu, true)
  .addField("Geki", body[9].countgeki, true)
  .addField("Perfect", body[9].perfect, true)
  .addField("At", body[9].date, true)
  .addField("Rank", body[9].rank, true)
                .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
 await message.channel.send(`https://osu.ppy.sh/beatmaps/${body[9].beatmap_id}#osu/`);
 await message.channel.send(osuembed9);
}

module.exports.help = {
  name: "osurecent"
  
}
