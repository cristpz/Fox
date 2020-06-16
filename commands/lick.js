const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.mentions.members.first()) return message.reply(`Usage: !lick <user>`);

let urls = ["https://media.discordapp.net/attachments/468158262483746829/514079800206557185/nom4.gif?width=400&height=216",
           "https://media.discordapp.net/attachments/468158262483746829/514086853482119175/lick6.gif?width=400&height=224",
           "https://media.discordapp.net/attachments/468158262483746829/514086856204222464/lick1.gif?width=400&height=225",
           "https://media.discordapp.net/attachments/468158262483746829/514086872302223360/lick2.gif?width=400&height=225",
           "https://media.discordapp.net/attachments/468158262483746829/514086888370470922/lick3.gif?width=400&height=224",
           "https://media.discordapp.net/attachments/468158262483746829/514086909279207431/lick4.gif?width=400&height=225",
           "https://media.discordapp.net/attachments/468158262483746829/514086920393981952/lick5.gif?width=400&height=225",
           "https://media.discordapp.net/attachments/468158262483746829/514086926454882304/lick10.gif?width=400&height=225",
           "https://media.discordapp.net/attachments/468158262483746829/514086942149967903/lick7.gif?width=400&height=221",
           "https://media.discordapp.net/attachments/468158262483746829/514086999930437672/lick8.gif?width=400&height=225"];
let url = Math.floor((Math.random() * urls.length));
let question = args.slice(0).join(" ");

let lickembed = new Discord.RichEmbed()
.setColor("#ffa500")                                                                                                                                                                    
.setTitle(`${message.author.username} licks ${message.mentions.members.first().user.username}`)
.setImage(urls[url])
.setTimestamp()
.setFooter("Fox, a bot by Akemi#2314 | Special Thanks To: Chuckle#1986", bot.user.displayAvatarURL);

message.channel.send(lickembed);



}

module.exports.help = {
  name: "lick"
}
