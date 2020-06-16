const Discord = require("discord.js");
const Canvas = require('canvas');
const snekfetch = require('snekfetch');

module.exports.run = async (bot, message, args, member) => {
  if(args[0] === "help") return message.reply('usage: !rim <user (optional)>');
  let user = message.mentions.users.first() || message.author;
  const { createCanvas, loadImage } = require('canvas');
  const canvas = Canvas.createCanvas(360, 270);
  const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage("https://cdn.glitch.com/ae3d8f57-6627-4730-920d-b6a465c0fa1b%2Frim2.png?1555246580496");
  const { body: buffer } = await snekfetch.get(user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	await ctx.drawImage(avatar, 65, 45, 200, 200);
	await ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	// Use helpful Attachment class structure to process the file for you
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'saxo-rim.png');

	message.channel.send(`Done!`, attachment);
}

module.exports.help = {
  name: "rim"
}