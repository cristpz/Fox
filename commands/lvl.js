const Canvas = require('canvas');
const snekfetch = require('snekfetch');
const Discord = require('discord.js');
const db = require('quick.db');
const botconfig = require("../botconfig.json");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args, tools) => {
let user = message.mentions.users.first() || message.author;
  
  let balance = await db.fetch(`userBalance_${user.id}`);
  let rep = await db.fetch(`rep_${user.id}`);
  
  let global = await db.fetch(`globalMessages_${user.id}`);
  let guild = await db.fetch(`guildMessages_${message.guild.id}.${user.id}`);
  
  let tier = db.fetch(`userTier_${user.id}`);
  if (tier === null) tier = 0;
  
  if (balance === null) balance = 0;
  if (rep === null) rep = 0;
  if (global === null) global = 0;
  if (guild === null) guild = 0;
  if (tier === null) tier = `0 - Noob`;
  if (tier === 1) tier = `1 - Crook`;
  if (tier === 2) tier = `2 - Hitman`;
  if (tier === 3) tier = `3 - Small Boss`;
  if (tier === 4) tier = `4 - Medium Boss`;
  if (tier === 5) tier = `5 - Large Boss`;
  if (tier === 6) tier = `6 - Larger Boss`;
  if (tier === 7) tier = `7 - Big Boss`;
  if (tier === 8) tier = `8 - Huge Boss`;
  if (tier === 9) tier = `9 - Godfather's Right Hand`;
  if (tier === 10) tier = `10 - Godfather`;
  
  if(!xp[user.id]){
   xp[user.id] = {
     xp: 0,
     level: 1
  };
}
  let curxp = xp[user.id].xp;
  let curlvl = xp[user.id].level;
  let nxtLvlXp = curlvl * 300;
  let difference = nxtLvlXp - curxp;
  
    /*await message.channel.send(':watch: Loading, please wait...').then(msg => msg.delete(500));
*/    
  const { createCanvas, loadImage } = require('canvas');
  const canvas = Canvas.createCanvas(1280, 720);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://www.xmple.com/wallpaper/black-orange-glow-gradient-hexagon-white-1280x720-c4-ffffff-ffffff-ffa500-000000-l2-13-159-a-10-f-6.svg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	// Select the color of the stroke
	ctx.strokeStyle = '#ffffff';
	// Draw a rectangle with the dimensions of the entire canvas
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = '#ffffff';
	ctx.fillRect(0, 225, 1280, 250);
  
  // Select the font size and type from one of the natively available fonts
	ctx.font = '50px Arial';
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#FD6A02';
	// Actually fill the text with a solid color
	ctx.fillText(`Lv. ${curlvl}`, 512, 300);
  ctx.fillText(`${curxp} EXP`, 512, 360);
  ctx.fillText(`Remaining XP: ${difference}`, 512, 420);

  
  // Pick up the pen
	ctx.beginPath();
	// Start the arc to form a circle
	ctx.arc(345, 350, 90, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip();
  
	// Get the icon in the form of a buffer
	const { body: buffer } = await snekfetch.get(user.displayAvatarURL);
	// Wait for Canvas to load the image
	const avatar = await Canvas.loadImage(buffer);
	// Draw a shape onto the main canvas
	ctx.drawImage(avatar, 250, 250, 210, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'level-card.png');

	await message.channel.send('**:small_orange_diamond: ' + user.tag + `'s level stats:` + '**', attachment);
 
}

module.exports.help = {
  name: "lvl" 
}
