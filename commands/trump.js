const Discord = require("discord.js");
const Canvas = require("canvas");
const snekfetch = require("snekfetch");

module.exports.run = async (bot, message, args, member) => {
  if (args[0] === "help") return message.reply("usage: !trump <text>");
  let user = message.mentions.users.first() || message.author;
  const { createCanvas, loadImage } = require("canvas");
  const canvas = Canvas.createCanvas(480, 536);
  const ctx = canvas.getContext("2d");

  // Since the image takes time to load, you should await it
  const background = await Canvas.loadImage("https://i.imgflip.com/1ybw3c.jpg");
  // This uses the canvas dimensions to stretch the image onto the entire canvas
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  // Select the font size and type from one of the natively available fonts
  ctx.font = "24px sans-serif";
  // Select the style that will be used to fill the text in
  ctx.fillStyle = "#000000";
  // Actually fill the text with a solid color
  ctx.fillText(`${args.join(" ")}`, 20, 180);
  // Use helpful Attachment class structure to process the file for you
  const attachment = new Discord.Attachment(canvas.toBuffer(), "trumptext.png");

  message.channel.send(`Done!`, attachment);
};

module.exports.help = {
  name: "trump"
};
