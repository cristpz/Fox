const Discord = require("discord.js");
const Canvas = require('canvas');
const snekfetch = require('snekfetch');

module.exports.run = async (bot, message, args, member) => {
  if(args[0] === "help") return message.reply('usage: !russia <user (optional)>');
  let user = message.mentions.users.first() || message.author;
  const { createCanvas, loadImage } = require('canvas');
  const canvas = Canvas.createCanvas(1280, 600);
  const ctx = canvas.getContext('2d');


	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage("https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_the_Soviet_Union_%281922%E2%80%931923%29.svg");
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  // Pick up the pen
	ctx.beginPath();
	// Start the arc to form a circle
	ctx.beginPath();
  ctx.arc(640, 260, 100, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip();
  const { body: buffer } = await snekfetch.get(user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 480, 100, 320, 320);
	// Use helpful Attachment class structure to process the file for you
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'russia.png');

	message.channel.send(`Done!`, attachment);
}

module.exports.help = {
  name: "russia"
}