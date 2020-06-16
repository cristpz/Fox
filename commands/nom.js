const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.mentions.members.first()) return message.reply(`Usage: !nom <user>`);

let urls = ["https://media.discordapp.net/attachments/468158262483746829/514079815758905364/nom1.gif?width=400&height=225", 
            "https://media.discordapp.net/attachments/468158262483746829/514080169632464896/nom7.gif?width=400&height=225", 
            "https://media.discordapp.net/attachments/468158262483746829/514080165819842575/nom9.gif?width=300&height=300", 
            "https://media.discordapp.net/attachments/468158262483746829/514079863427039242/nom6.gif?width=400&height=225", 
            "https://media.discordapp.net/attachments/468158262483746829/514079846666600450/nom5.gif?width=400&height=225", 
            "https://media.discordapp.net/attachments/468158262483746829/514079843068018708/nom7.gif?width=400&height=225", 
            "https://media.discordapp.net/attachments/468158262483746829/514079823992324097/nom3.gif?width=400&height=225",
            "https://media.discordapp.net/attachments/468158262483746829/514080179199410237/nom8.gif?width=400&height=226",
            "https://media.discordapp.net/attachments/468158262483746829/514080351904071690/nom10.gif?width=400&height=223",
            "https://media.discordapp.net/attachments/468158262483746829/514080802405875712/nom11.gif?width=400&height=224",
            "https://media.discordapp.net/attachments/468158262483746829/514080820508753940/nom12.gif?width=400&height=225",
            "https://media.discordapp.net/attachments/468158262483746829/514080832386760724/nom13.gif?width=300&height=300"];

let url = Math.floor((Math.random() * urls.length));
let question = args.slice(0).join(" ");

let nomembed = new Discord.RichEmbed()
.setColor("#ffa500")  
.setTimestamp()
.setTitle(`${message.author.username} noms ${message.mentions.members.first().user.username}`)
.setImage(urls[url])
.setFooter("Fox, a bot by Akemi#2314 | Special Thanks To: Chuckle#8455", bot.user.displayAvatarURL);

message.channel.send(nomembed);



}

module.exports.help = {
  name: "nom"
}
