const Discord = require("discord.js");
const Canvas = require('canvas');
const snekfetch = require('snekfetch');

module.exports.run = async (bot, message, args, member) => {
  if(args[0] === "help") return message.reply('usage: !bloke <user (optional)>');
  let user = message.mentions.users.first() || message.author;
  const { createCanvas, loadImage } = require('canvas');
  const canvas = Canvas.createCanvas(976, 549);
  const ctx = canvas.getContext('2d');


	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage("http://ichef.bbci.co.uk/news/976/cpsprodpb/1310D/production/_86339087_gettyimages-462123162.jpg");
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
  // Pick up the pen
	 ctx.beginPath();
	// Start the arc to form a circle
	ctx.beginPath();
  ctx.arc(450, 290, 120, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip(); 
  
  const { body: buffer } = await snekfetch.get(user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 320, 177, 256, 256);
  
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'bloke.png');
  
	message.channel.send(`${user} is now a bloke :flag_gb:`, attachment);
}

module.exports.help = {
  name: "bloke"
}