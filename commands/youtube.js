const Discord = require("discord.js");
const ytSearch = require( 'yt-search' )

module.exports.run = async (bot, message, args) => {
   
ytSearch(`${args.join(' ')}`, function (err, r) {
  if (err) throw err
 
  const videos = r.videos
  const playlists = r.playlists
  const accounts = r.accounts
 
  const firstResult = videos[0]
 
  message.channel.send('https://www.youtube.com' + firstResult.url);
})
  
}

module.exports.help = {
  name: "youtube"
}
