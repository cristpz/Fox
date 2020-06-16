const Discord = require("discord.js");
const Canvas = require('canvas');
const snekfetch = require('snekfetch');

module.exports.run = async (bot, message, args, member) => {
if (!args[0]) return message.reply(`Usage: !getemote <custom emote name>`);
  /* const { createCanvas, loadImage } = require('canvas')
  const canvas = Canvas.createCanvas(256, 256);
  const ctx = canvas.getContext('2d'); */

const emoji = bot.emojis.find(emoji => emoji.name === `${args[0]}`);

  if (emoji === null) return message.channel.send(':warning: Custom emote not found.');
  
  message.channel.send(`${emoji}`);
  
/*	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage(`https://cdn.discordapp.com/emojis/${emoji}`);
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'emote.png');

	message.channel.send(`Done!`, attachment); */
}

module.exports.help = {
  name: "getemote"
}