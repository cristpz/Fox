const Discord = require("discord.js");
const pack = require("../package.json");
const checkDiskSpace = require('check-disk-space');
const db = require('quick.db');
const commandUsage = db.fetch('commandUsage');

module.exports.run = async (bot, message, args) => {
  
    let embed = new Discord.RichEmbed()
      .setTitle("Bot Information")
    .setColor("#ffa500")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Name", `${bot.user.username}`, true)
    .addField("Version", `${pack.version}`, true)
    .addField("Node Version", `${pack.engines.node}`, true)
    .addField("Serving", `${bot.users.size} users on ${bot.guilds.size} servers`, true)
    .setURL('https://discordbots.org/bot/508054508744605700')
    .addField("Total Commands Fetched", `${commandUsage}`, true)
    .addField("RAM Usage", process.memoryUsage().heapUsed / 1024 / 1024 + ' mb', true)
    .addField("Free RAM", 2048 - process.memoryUsage().heapUsed / 1024 / 1024 + ' mb', true)
   // .addField("Total Used RAM (without extras)", process.memoryUsage().heapTotal / 1024 / 1024 + ' mb', true)
   // .addField("Total Used RAM (including extras)", process.memoryUsage().rss / 1024 / 1024 + ' mb', true)
    .addField("Total RAM", '2 GB', true)
   // .addField("RAM to C++", process.memoryUsage().external / 1024 / 1024 + ' mb', true)
    .addField("Developed by", `<@306104099185623042>`)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  
  message.channel.send(embed);
  
}

module.exports.help = {
  name: "info"
}
