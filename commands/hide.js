const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
let urls = [
  "https://thumbs.gfycat.com/CandidSmugHornet-size_restricted.gif",
"https://media1.tenor.com/images/af7f50de621aacf1c350baf584f9016d/tenor.gif?itemid=13765054",
"https://media1.tenor.com/images/e3d6ecc56a74062e1745b3ff9c033c71/tenor.gif?itemid=12004194",
"https://cdn.discordapp.com/attachments/605490012074672158/645718271206883338/unknown.gif"
];
let url = Math.floor((Math.random() * urls.length));
let question = args.slice(0).join(" ");                         

  let embed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle(`${message.author.username} hides`)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314 | Special Thanks To: Blitzor#0690", bot.user.displayAvatarURL)
  .setImage(urls[url]);

  message.channel.send(embed);

}

module.exports.help = {
  name: "hide"
}