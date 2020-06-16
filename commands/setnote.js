const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");
const errors = require("../utils/errors.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
  
  let note = db.get(`note_${message.author.id}`);
  
  if(args[0] !== 'clear') {
  
  if(!args[0]) return message.reply(`Usage: !setnote <text>`);
    
    if (args.join(' ') >= 101)
    return message.channel.send(
      "Please provide a valid number from 2-100."
    );
  
    if(note !== null) {
      db.delete(`note_${message.author.id}`);
      db.push(`note_${message.author.id}`, args.join(' '));
    message.channel.send(`Successfully set your profile note to **${args.join(' ')}**`);
    }
  
    db.push(`note_${message.author.id}`, args.join(' '));
  
    message.channel.send(`Successfully set your profile note to **${args.join(' ')}**`);
  
  }
    
  /* if(args[0] === 'clear') {
    db.delete(`note_${message.author.id}`);
    message.channel.send(`Done!`);
  } */

}

module.exports.help = {
  name: "setnote"
}