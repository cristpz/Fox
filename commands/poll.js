const Discord  = module.require('discord.js');
const errors = require("../utils/errors.js");

const agree    = "✅";
const disagree = "❌";

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.reply(`Usage: !poll <topic>`);
 
  let msg = await message.channel.send("Vote now! (30 seconds)");
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 30000});
  msg.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }
  
  var sumsum = new Discord.RichEmbed()

    .addField("Total votes (NO):", `${NO_Count - 1}`)
    .addField("Total votes (YES):", `${YES_Count - 1}`)
    .setTimestamp()
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL)
    .setColor("0xffa500");

  await message.channel.send({ embed: sumsum });
  
}

module.exports.help = {
    name: "poll"
}

