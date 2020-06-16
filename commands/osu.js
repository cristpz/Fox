const Discord = require("discord.js");
const superagent = require("superagent");

// https://osu.ppy.sh/api/get_user?k=b36f27f1aa49e74d23a2a233e61e1976f2c90923&m=0&u=${user} <- api user stats url
// https://osu.ppy.sh/api/get_user_best?k=b36f27f1aa49e74d23a2a233e61e1976f2c90923&u=${user} <- api top plays url

module.exports.run = async (bot, message, args) => {
  if (!args.join(" ")) return message.reply(`Usage: !osu <help/0-3> <user>`);

  let helpembed = new Discord.RichEmbed()
    .setColor("ffa500")
    .setThumbnail(
      `https://vignette.wikia.nocookie.net/fantendo/images/1/12/Osu%21_logo.png/revision/latest?cb=20160523003852`
    )
    .setTitle("Command Help")
    .addField("OSU!standard stats", "!osu 0 <user>")
    .addField("OSU!taiko stats", "!osu 1 <user>")
    .addField("OSU!CtB stats", "!osu 2 <user>")
    .addField("OSU!mania stats", "!osu 3 <user>")

    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  if (args[0] === "help") return message.channel.send(helpembed);

  let user = args.slice(1).join(" ");
  let { body } = await superagent.get(
    `https://osu.ppy.sh/api/get_user?k=b36f27f1aa49e74d23a2a233e61e1976f2c90923&m=${
      args[0]
    }&u=${user}`
  );

  let osuembed = new Discord.RichEmbed()
    .setColor("#ffa500")
    .setThumbnail(
      `https://vignette.wikia.nocookie.net/fantendo/images/1/12/Osu%21_logo.png/revision/latest?cb=20160523003852`
    )
    .setTitle(`${user} | osu!standard stats`)
    .addField("Join Date", body[0].join_date, true)
    .addField("300", body[0].count300, true)
    .addField("100", body[0].count100, true)
    .addField("50", body[0].count50, true)
    .addField("Play Count", body[0].playcount, true)
    .addField("Ranked Score", body[0].ranked_score, true)
    .addField("Total Score", body[0].total_score, true)
    .addField("Global Ranking", body[0].pp_rank, true)
    .addField("Country Ranking", body[0].pp_country_rank, true)
    .addField("Perfomance Points (PP)", body[0].pp_raw, true)
    .addField("Level", body[0].level, true)
    .addField("Accuracy", body[0].accuracy, true)
    .addField("SS+", body[0].count_rank_ssh, true)
    .addField("SS", body[0].count_rank_ss, true)
    .addField("S+", body[0].count_rank_sh, true)
    .addField("S", body[0].count_rank_s, true)
    .addField("A", body[0].count_rank_a, true)
    .addField("Country", body[0].country, true)
    .addField("Time Played (In Seconds)", body[0].total_seconds_played, true)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let taikoembed = new Discord.RichEmbed()
    .setColor("ffa500")
    .setThumbnail(
      `https://vignette.wikia.nocookie.net/fantendo/images/1/12/Osu%21_logo.png/revision/latest?cb=20160523003852`
    )
    .setTitle(`${user} | osu!taiko stats`)
    .addField("Join Date", body[0].join_date, true)
    .addField("300", body[0].count300, true)
    .addField("100", body[0].count100, true)
    .addField("50", body[0].count50, true)
    .addField("Play Count", body[0].playcount, true)
    .addField("Ranked Score", body[0].ranked_score, true)
    .addField("Total Score", body[0].total_score, true)
    .addField("Global Ranking", body[0].pp_rank, true)
    .addField("Country Ranking", body[0].pp_country_rank, true)
    .addField("Perfomance Points (PP)", body[0].pp_raw, true)
    .addField("Level", body[0].level, true)
    .addField("Accuracy", body[0].accuracy, true)
    .addField("SS+", body[0].count_rank_ssh, true)
    .addField("SS", body[0].count_rank_ss, true)
    .addField("S+", body[0].count_rank_sh, true)
    .addField("S", body[0].count_rank_s, true)
    .addField("A", body[0].count_rank_a, true)
    .addField("Country", body[0].country, true)
    .addField("Time Played (In Seconds)", body[0].total_seconds_played, true)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let ctbembed = new Discord.RichEmbed()
    .setColor("ffa500")
    .setThumbnail(
      `https://vignette.wikia.nocookie.net/fantendo/images/1/12/Osu%21_logo.png/revision/latest?cb=20160523003852`
    )
    .setTitle(`${user} | osu!CtB stats`)
    .addField("Join Date", body[0].join_date, true)
    .addField("300", body[0].count300, true)
    .addField("100", body[0].count100, true)
    .addField("50", body[0].count50, true)
    .addField("Play Count", body[0].playcount, true)
    .addField("Ranked Score", body[0].ranked_score, true)
    .addField("Total Score", body[0].total_score, true)
    .addField("Global Ranking", body[0].pp_rank, true)
    .addField("Country Ranking", body[0].pp_country_rank, true)
    .addField("Perfomance Points (PP)", body[0].pp_raw, true)
    .addField("Level", body[0].level, true)
    .addField("Accuracy", body[0].accuracy, true)
    .addField("SS+", body[0].count_rank_ssh, true)
    .addField("SS", body[0].count_rank_ss, true)
    .addField("S+", body[0].count_rank_sh, true)
    .addField("S", body[0].count_rank_s, true)
    .addField("A", body[0].count_rank_a, true)
    .addField("Country", body[0].country, true)
    .addField("Time Played (In Seconds)", body[0].total_seconds_played, true)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  let maniaembed = new Discord.RichEmbed()
    .setColor("ffa500")
    .setThumbnail(
      `https://vignette.wikia.nocookie.net/fantendo/images/1/12/Osu%21_logo.png/revision/latest?cb=20160523003852`
    )
    .setTitle(`${user} | osu!CtB stats`)
    .addField("Join Date", body[0].join_date, true)
    .addField("300", body[0].count300, true)
    .addField("100", body[0].count100, true)
    .addField("50", body[0].count50, true)
    .addField("Play Count", body[0].playcount, true)
    .addField("Ranked Score", body[0].ranked_score, true)
    .addField("Total Score", body[0].total_score, true)
    .addField("Global Ranking", body[0].pp_rank, true)
    .addField("Country Ranking", body[0].pp_country_rank, true)
    .addField("Perfomance Points (PP)", body[0].pp_raw, true)
    .addField("Level", body[0].level, true)
    .addField("Accuracy", body[0].accuracy, true)
    .addField("SS+", body[0].count_rank_ssh, true)
    .addField("SS", body[0].count_rank_ss, true)
    .addField("S+", body[0].count_rank_sh, true)
    .addField("S", body[0].count_rank_s, true)
    .addField("A", body[0].count_rank_a, true)
    .addField("Country", body[0].country, true)
    .addField("Time Played (In Seconds)", body[0].total_seconds_played, true)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  /* let bestembed = new Discord.RichEmbed()
  .setColor("ffa500")
  .setThumbnail(`https://vignette.wikia.nocookie.net/fantendo/images/1/12/Osu%21_logo.png/revision/latest?cb=20160523003852`)
  .setTitle(`${user} | Best Plays`)
  .addField('1.', `${bodybest[0].}`
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL); */

  if (args[0] === "0") return message.channel.send(osuembed);
  if (args[0] === "1") return message.channel.send(taikoembed);
  if (args[0] === "2") return message.channel.send(ctbembed);
  if (args[0] === "3") return message.channel.send(maniaembed);
  //  if (args[0] === "best") return message.channel.send(bestembed);
};

module.exports.help = {
  name: "osu"
};
