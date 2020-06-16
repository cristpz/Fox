const Discord = require("discord.js");
const Canvas = require('canvas');
const snekfetch = require('snekfetch');

// Default: https://www.theretreatcompany.com/wp-content/uploads/2018/03/RetreatsInSwitzerland-750x250.jpg
// Default 2: https://busticket4.me/db_assets/images/blog_cover/kopaonik-the-largest-ski-resort-in-southeast-europe-109516-750x250.jpg
// Default 3: https://busticket4.me/db_assets/images/blog_cover/durmitor-ring-110713-750x250.jpg
// Default 4: http://machamehospital.org/wp-content/uploads/2016/10/Kili-750x250.jpg
// Default 5: https://www.rockwestcomposites.com/wordpress/wp-content/uploads/2017/05/Sail-Drone-750x250.jpg

module.exports.run = async (bot, message, args, member) => {
  if(args[0] === "help") return message.reply('usage: !banner <url> <user (optional)>');
  
  if(args[0] === "list") {
    let embed = new Discord.RichEmbed()
    .setTitle('Pre-made Banner List')
    .setColor('#ffa500')
    .setDescription('**Quick Tip:** use `!banner <url> <user (optional)>` to use a custom image as your banner\'s background');
    
    let embed2 = new Discord.RichEmbed()
    .addField('Default 1', '!banner default')
    .setImage('https://cdn.discordapp.com/attachments/506191128823857153/533791715736289303/banner.png')
    .setTimestamp()
     .setColor('#ffa500')
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
    
    let embed3 = new Discord.RichEmbed()
    .addField('Default 2', '!banner default2')
    .setImage('https://cdn.discordapp.com/attachments/506191128823857153/533791772590080011/banner.png')
    .setTimestamp()
     .setColor('#ffa500')
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
    
    let embed4 = new Discord.RichEmbed()
    .addField('Default 3', '!banner default3')
    .setImage('https://cdn.discordapp.com/attachments/506191128823857153/533791823257272320/banner.png')
    .setTimestamp()
     .setColor('#ffa500')
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
    
    let embed5 = new Discord.RichEmbed()
    .addField('Default 4', '!banner default4')
    .setImage('https://cdn.discordapp.com/attachments/506191128823857153/533791873731526658/banner.png')
    .setTimestamp()
     .setColor('#ffa500')
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
    
    let embed6 = new Discord.RichEmbed()
    .addField('Default 5', '!banner default5')
    .setImage('https://cdn.discordapp.com/attachments/506191128823857153/533791918711242752/banner.png')
    .setTimestamp()
    .setColor('#ffa500')
    .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);
    
    await message.channel.send(embed);
    await message.channel.send(embed2);
    await message.channel.send(embed3);
    await message.channel.send(embed4);
    await message.channel.send(embed5);
    await message.channel.send(embed6);
    
  }
  
  if(args[0] === "default") {
    let user = message.mentions.users.first() || message.author;
  const { createCanvas, loadImage } = require('canvas')
  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext('2d');


	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage('https://www.theretreatcompany.com/wp-content/uploads/2018/03/RetreatsInSwitzerland-750x250.jpg');
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
	ctx.strokeStyle = '#ffffff';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#000000';
	ctx.fillRect(125, 95, 650, 50);
  // Select the font size and type from one of the natively available fonts
	ctx.font = '40px courier';
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#ffa500';
	// Actually fill the text with a solid color
	ctx.fillText(user.tag, canvas.width / 2.9, canvas.height / 1.9);
  
  
	// Pick up the pen
	ctx.beginPath();
	// Start the arc to form a circle
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip();

	const { body: buffer } = await snekfetch.get(user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);
	// Use helpful Attachment class structure to process the file for you
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'banner.png');

	message.channel.send(`Done!`, attachment);
  }
  
  if(args[0] === "default2") {
    let user = message.mentions.users.first() || message.author;
  const { createCanvas, loadImage } = require('canvas')
  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext('2d');


	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage('https://busticket4.me/db_assets/images/blog_cover/kopaonik-the-largest-ski-resort-in-southeast-europe-109516-750x250.jpg');
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
	ctx.strokeStyle = '#ffffff';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#000000';
	ctx.fillRect(125, 95, 650, 50);
  // Select the font size and type from one of the natively available fonts
	ctx.font = '40px courier';
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#ffa500';
	// Actually fill the text with a solid color
	ctx.fillText(user.tag, canvas.width / 2.9, canvas.height / 1.9);
  
  
	// Pick up the pen
	ctx.beginPath();
	// Start the arc to form a circle
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip();

	const { body: buffer } = await snekfetch.get(user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);
	// Use helpful Attachment class structure to process the file for you
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'banner.png');

	message.channel.send(`Done!`, attachment);
  }
  
   if(args[0] === "default3") {
    let user = message.mentions.users.first() || message.author;
  const { createCanvas, loadImage } = require('canvas')
  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext('2d');


	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage('https://busticket4.me/db_assets/images/blog_cover/durmitor-ring-110713-750x250.jpg');
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
	ctx.strokeStyle = '#ffffff';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#000000';
	ctx.fillRect(125, 95, 650, 50);
  // Select the font size and type from one of the natively available fonts
	ctx.font = '40px courier';
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#ffa500';
	// Actually fill the text with a solid color
	ctx.fillText(user.tag, canvas.width / 2.9, canvas.height / 1.9);
  
  
	// Pick up the pen
	ctx.beginPath();
	// Start the arc to form a circle
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip();

	const { body: buffer } = await snekfetch.get(user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);
	// Use helpful Attachment class structure to process the file for you
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'banner.png');

	message.channel.send(`Done!`, attachment);
  }
  
   if(args[0] === "default4") {
    let user = message.mentions.users.first() || message.author;
  const { createCanvas, loadImage } = require('canvas')
  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext('2d');


	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage('http://machamehospital.org/wp-content/uploads/2016/10/Kili-750x250.jpg');
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
	ctx.strokeStyle = '#ffffff';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#000000';
	ctx.fillRect(125, 95, 650, 50);
  // Select the font size and type from one of the natively available fonts
	ctx.font = '40px courier';
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#ffa500';
	// Actually fill the text with a solid color
	ctx.fillText(user.tag, canvas.width / 2.9, canvas.height / 1.9);
  
  
	// Pick up the pen
	ctx.beginPath();
	// Start the arc to form a circle
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip();

	const { body: buffer } = await snekfetch.get(user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);
	// Use helpful Attachment class structure to process the file for you
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'banner.png');

	message.channel.send(`Done!`, attachment);
  }
  
   if(args[0] === "default5") {
    let user = message.mentions.users.first() || message.author;
  const { createCanvas, loadImage } = require('canvas')
  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext('2d');


	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage('https://www.rockwestcomposites.com/wordpress/wp-content/uploads/2017/05/Sail-Drone-750x250.jpg');
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
	ctx.strokeStyle = '#ffffff';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#000000';
	ctx.fillRect(125, 95, 650, 50);
  // Select the font size and type from one of the natively available fonts
	ctx.font = '40px courier';
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#ffa500';
	// Actually fill the text with a solid color
	ctx.fillText(user.tag, canvas.width / 2.9, canvas.height / 1.9);
  
  
	// Pick up the pen
	ctx.beginPath();
	// Start the arc to form a circle
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip();

	const { body: buffer } = await snekfetch.get(user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);
	// Use helpful Attachment class structure to process the file for you
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'banner.png');

	message.channel.send(`Done!`, attachment);
  }
  
  let user = message.mentions.users.first() || message.author;
  const { createCanvas, loadImage } = require('canvas')
  const canvas = Canvas.createCanvas(700, 250);
  const ctx = canvas.getContext('2d');


	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage(args[0]);
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
	ctx.strokeStyle = '#ffffff';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#000000';
	ctx.fillRect(125, 95, 650, 50);
  // Select the font size and type from one of the natively available fonts
	ctx.font = '40px courier';
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#ffa500';
	// Actually fill the text with a solid color
	ctx.fillText(user.tag, canvas.width / 2.9, canvas.height / 1.9);
  
  
	// Pick up the pen
	ctx.beginPath();
	// Start the arc to form a circle
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip();

	const { body: buffer } = await snekfetch.get(user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);
	// Use helpful Attachment class structure to process the file for you
	const attachment = new Discord.Attachment(canvas.toBuffer(), 'banner.png');

	message.channel.send(`Done!`, attachment);
  
}

module.exports.help = {
  name: "banner"
}
