const Discord = require("discord.js");
const malScraper = require("mal-scraper");

module.exports.run = async (bot, message, args) => {
  const search = `${args}`;

  malScraper
    .getInfoFromName(search)
    .then(data => {
      const malEmbed = new Discord.RichEmbed()
        .setAuthor(
          `My Anime List search result for ${args}`.split(",").join(" ")
        )
        .setImage(data.picture)
        .setColor("#ffa500")
        .addField("English Title", data.englishTitle, true)
        .addField("Japanese Title", data.japaneseTitle, true)
        .addField("Type", data.type, true)
        .addField("Episodes", data.episodes, true)
        .addField("Rating", data.rating, true)
        .addField("Aired", data.aired, true)
        .addField("Score", data.score, true)
        .addField("Score Stats", data.scoreStats, true)
        .addField("Link", data.url)
        .setTimestamp()
        .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

      message.channel.send(malEmbed);

      //console.log(data);
    })
    .catch(err => console.log(err));
};

module.exports.help = {
  name: "anime"
};
