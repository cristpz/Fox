const Discord = require("discord.js");
const pack = require("../package.json");
const fs = require('fs');
const botconfig = require('../botconfig.json');

module.exports.run = async (bot, message, args) => {
  
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }
  let prefix = prefixes[message.guild.id].prefixes;
  
  const emoji = bot.emojis.find(emoji => emoji.name === `vintagecoin`);
  
  let embed = new Discord.RichEmbed()
    .setTitle("Fox Tiers")
    .setDescription(`Useful Tip: Use ${prefix}tier <next tier number> to move to the next tier!`)
    .setColor("#ffa500")
    .setThumbnail(
      "https://cdn.glitch.com/c3b0b6b5-d3e4-4fd1-9802-c75cc299793c%2Fhow.png?v=1588732386902"
    )
    .addField(`Tier 1 (-10 lvl, -3000 xp, -1000${emoji})`, "+100 work bonus")
    .addField(
      `Tier 2 (-20 lvl, -6000 xp, -5000${emoji})`,
      "+200 work bonus, x2 dailies"
    )
    .addField(
      `Tier 3 (-30 lvl, -9000 xp, -10000${emoji})`,
      "+300 work bonus, x3 dailies"
    )
    .addField(
      `Tier 4 (-40 lvl, -12000 xp, -20000${emoji})`,
      "+400 work bonus, x4 dailies"
    )
    .addField(
      `Tier 5 (-50 lvl, -15000 xp, -40000${emoji})`,
      "+500 work bonus, x5 dailies"
    )
    .addField(
      `Tier 6 (-60 lvl, -18000 xp, -80000${emoji})`,
      "+600 work bonus, x6 dailies"
    )
    .addField(
      `Tier 7 (-70 lvl, -21000 xp, -160000${emoji})`,
      "+700 work bonus, x7 dailies"
    )
    .addField(
      `Tier 8 (-80 lvl, -24000 xp, -320000${emoji})`,
      "+800 work bonus, x8 dailies"
    )
    .addField(
      `Tier 9 (-90 lvl, -27000 xp, -640000${emoji})`,
      "+900 work bonus, x9 dailies"
    )
    .addField(
      `Tier 10 (-100 lvl, -30000 xp, -1280000${emoji})`,
      "+1000 work bonus, x10 dailies"
    )
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
  message.channel.send(embed);
};

module.exports.help = {
  name: "tierinfo"
};
