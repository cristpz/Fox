const Discord = require("discord.js");
const Canvas = require('canvas');
const snekfetch = require('snekfetch');

module.exports.run = async (bot, message, args, member) => {
  if(args[0] === "help") return message.reply('usage: !oi <user (optional)>');
  let user = message.mentions.users.first() || message.author;
  const { createCanvas, loadImage } = require('canvas');
  const canvas = Canvas.createCanvas(467, 449);
  const ctx = canvas.getContext('2d');


	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage("https://i2.wp.com/mobileecosystemforum.com/wp-content/uploads/2017/03/logo-oi.png?ssl=1");
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  // Pick up the pen
  ctx.beginPath();
	// Start the arc to form a circle
	ctx.beginPath();
  ctx.arc(265, 265, 120, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip(); 
  const { body: buffer } = await snekfetch.get(user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 140, 145, 250, 250);
	// Use helpful Attachment class structure to process the file for you
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'oi.png');

	message.channel.send(`oi`, attachment);
}

module.exports.help = {
  name: "oi"
}