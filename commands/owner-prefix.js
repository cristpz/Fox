const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
  
  if(message.author.id !== botconfig.ownerID) return;
  if(!args[0] || args[0 == "help"]) return message.reply("Usage: !pref1x <desired prefix here>");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle("Prefix Set! (this may take a bit to change)")
  .setDescription(`Set to ${args[0]}`)
  .setTimestamp()
  .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "pref1x"
}