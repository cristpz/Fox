const Discord = require("discord.js");
const Canvas = require('canvas');
const snekfetch = require('snekfetch');

module.exports.run = async (bot, message, args, member) => {
  if(args[0] === "help") return message.reply('usage: !suicide <user (optional)>');
  let user = message.mentions.users.first() || message.author;
  const { createCanvas, loadImage } = require('canvas');
  const canvas = Canvas.createCanvas( 973, 1390);
  const ctx = canvas.getContext('2d');


	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage("https://c8.alamy.com/comp/AR1ECW/arab-man-attempting-suicide-AR1ECW.jpg");
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	const { body: buffer } = await snekfetch.get(user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 440, 200, 200, 200);
	// Use helpful Attachment class structure to process the file for you
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'suicide.png');

	message.channel.send(`oof...`, attachment);
}

module.exports.help = {
  name: "suicide"
}