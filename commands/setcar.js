const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");
const errors = require("../utils/errors.js");
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
  let clio = db.fetch(`clio_${message.author.id}`);
  let evoix = db.fetch(`evoix_${message.author.id}`);
  let corsa = db.fetch(`corsa_${message.author.id}`);
  let testarossa = db.fetch(`testarossa_${message.author.id}`);
  let bora = db.fetch(`bora_${message.author.id}`);
  let brz = db.fetch(`brz_${message.author.id}`);
  let r32gtr = db.fetch(`r32gtr_${message.author.id}`);
  let rs = db.fetch(`380rs_${message.author.id}`);
  let golfxmas = db.fetch(`golfxmas_${message.author.id}`);
  let w8 = db.fetch(`w8_${message.author.id}`);
  let starlet = db.fetch(`starlet_${message.author.id}`);
  let car = db.get(`car_${message.author.id}`);
  
  if(!args[0]) return message.reply(`Usage: !setcar <car>`);
  
  if(args[0] === 'clio') {
    if(clio < 1) return message.reply('you don\'t have any clios in your garage!')
    if(clio === null) return message.reply('you don\'t have any clios in your garage!')
    await db.delete(`car_${message.author.id}`);
    await db.push(`car_${message.author.id}`, args[0])
    message.channel.send(`Successfully set your car to **${args[0]}**`);
  }
  
  if(args[0] === 'evoix') {
    if(evoix < 1) return message.reply('you don\'t have any evo ix\'s in your garage!')
    if(evoix === null) return message.reply('you don\'t have any evo ix\'s in your garage!')
    await db.delete(`car_${message.author.id}`);
    await db.push(`car_${message.author.id}`, args[0])
    message.channel.send(`Successfully set your car to **${args[0]}**`);
  }
  
  if(args[0] === 'corsa') {
    if(corsa < 1) return message.reply('you don\'t have any corsas in your garage!')
    if(corsa === null) return message.reply('you don\'t have any corsas in your garage!')
    await db.delete(`car_${message.author.id}`);
    await db.push(`car_${message.author.id}`, args[0])
    message.channel.send(`Successfully set your car to **${args[0]}**`);
  }
  
  if(args[0] === 'testarossa') {
    if(testarossa < 1) return message.reply('you don\'t have any testarossas in your garage!')
    if(testarossa === null) return message.reply('you don\'t have any testarossas in your garage!')
    await db.delete(`car_${message.author.id}`);
    await db.push(`car_${message.author.id}`, args[0])
    message.channel.send(`Successfully set your car to **${args[0]}**`);
  }
  
  if(args[0] === 'bora') {
    if(bora < 1) return message.reply('you don\'t have any boras in your garage!')
    if(bora === null) return message.reply('you don\'t have any boras in your garage!')
    await db.delete(`car_${message.author.id}`);
    await db.push(`car_${message.author.id}`, args[0])
    message.channel.send(`Successfully set your car to **${args[0]}**`);
  }
  
  if(args[0] === 'brz') {
    if(brz < 1) return message.reply('you don\'t have any brz\'s in your garage!')
    if(brz === null) return message.reply('you don\'t have any brz\'s in your garage!')
    await db.delete(`car_${message.author.id}`);
    await db.push(`car_${message.author.id}`, args[0])
    message.channel.send(`Successfully set your car to **${args[0]}**`);
  }
  
  if(args[0] === 'r32gtr') {
    if(r32gtr < 1) return message.reply('you don\'t have any r32 gt-r\'s in your garage!')
    if(r32gtr === null) return message.reply('you don\'t have any r32 gt-r\'s in your garage!')
    await db.delete(`car_${message.author.id}`);
    await db.push(`car_${message.author.id}`, args[0])
    message.channel.send(`Successfully set your car to **${args[0]}**`);
  }
  
  if(args[0] === '380rs') {
    if(rs < 1) return message.reply('that car is not accessible by regular users!')
    if(rs === null) return message.reply('that car is not accessible by regular users!')
    await db.delete(`car_${message.author.id}`);
    await db.push(`car_${message.author.id}`, args[0])
    message.channel.send(`Successfully set your car to **${args[0]}**`);
  }
  
  if(args[0] === 'golfxmas') {
    if(golfxmas < 1) return message.reply('you don\'t have that car in your inventory!')
    if(golfxmas === null) return message.reply('you don\'t have that car in your inventory!')
    await db.delete(`car_${message.author.id}`);
    await db.push(`car_${message.author.id}`, args[0])
    message.channel.send(`Successfully set your car to **${args[0]}**`);
  }
  
  if(args[0] === 'w8') {
    if(w8 < 1) return message.reply('you don\'t have that car in your inventory!')
    if(w8 === null) return message.reply('you don\'t have that car in your inventory!')
    await db.delete(`car_${message.author.id}`);
    await db.push(`car_${message.author.id}`, args[0])
    message.channel.send(`Successfully set your car to **${args[0]}**`);
  }
  
  if(args[0] === 'starlet') {
    if(starlet < 1) return message.reply('you don\'t have that car in your inventory!')
    if(starlet === null) return message.reply('you don\'t have that car in your inventory!')
    await db.delete(`car_${message.author.id}`);
    await db.push(`car_${message.author.id}`, args[0])
    message.channel.send(`Successfully set your car to **${args[0]}**`);
  }
  
  /* if(args[0] === 'clear') {
    db.delete(`car_${message.author.id}`);
    message.channel.send(`Done!`);
  } */

}

module.exports.help = {
  name: "setcar"
}