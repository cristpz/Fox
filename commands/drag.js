const Discord = require("discord.js");
const db = require("quick.db");

// Usage: !drag <amount of vtc> <member>

module.exports.run = async (bot, message, args) => {
  let user = message.mentions.users.first();
  if (args[0] === NaN) return message.reply('Please bet a valid amount of coins.')
  if (!user) return message.reply('Please mention a valid user.');
  if (user.id === message.author.id) return message.reply('???');
  if (!args[0]) return message.reply('usage: !drag <amount> <user>');
  if (!args[1]) return message.reply('usage: !drag <amount> <user>');
  if (args[0] < 0) return message.reply('usage: !drag <amount> <user>');
  if (isNaN(args[0])) return message.reply('wrong syntax, try this instead: !drag <amount> <user>');
  
  let xp = require('../xp.json');
  
  if(!xp[message.author.id]){
   xp[message.author.id] = {
     xp: 0,
     level: 1
  };
}
  
  if(!xp[user.id]){
   xp[user.id] = {
     xp: 0,
     level: 1
  };
}
  
  let curlvl = xp[message.author.id].level;
  
  let curlvl2 = xp[user.id].level;
  
  let car1 = db.get(`car_${message.author.id}`);
  
  let car2 = db.get(`car_${user.id}`);
  
  
  
  let check1 = await db.get(`${car1}_${message.author.id}`);
  
  if (check1 < 1) return db.delete(`car_${message.author.id}`),
    message.reply("you sold your main car, bruh.");
  
  
  let check2 = await db.get(`${car2}_${user.id}`);
  
  if (check2 < 1) return db.delete(`car_${user.id}`),
    message.reply("that user has sold their main car, bruh.");
  
  
  
  if(car2 === null) return message.reply('that user has not set any of their cars as their main one yet!');
  
  if(car1 === null) return message.reply('you have not set any of your cars as your main one yet!');
  
  const emoji = bot.emojis.find(emoji => emoji.name === `vintagecoin`);
  
  let balance = db.fetch(`userBalance_${message.author.id}`)
  
  let final = db.fetch(`userBalance_${user.id}`);
    
  if (args[0] > final) return message.reply('that user does not have enough money for that bet!'); 
  
  if (args[0] > balance) return message.channel.send(`Sorry, your balance in your account is insufficient to place that bet.`);
  
  if (args[0] < 0) return message.reply('not cool.');
  
  /*
  if(`${car1}` === 'clio') {
  
  if (curlvl >= 25) car1 = '**Renault Clio v6 with a Twin Turbo T3** [https://media.discordapp.net/attachments/530517627836170261/556874547505266688/1200px-RenaultClioV6.jpg?width=400&height=262]';
    
    if (curlvl <= 9) car1 = '**Renault Clio v6 with a Twin Turbo T1** [https://media.discordapp.net/attachments/530517627836170261/556874546968526858/IMG_20190317_181414.jpg?width=400&height=243]';
    
    if (curlvl <= 24) car1 = '**Renault Clio v6 with a Twin Turbo T2** [https://media.discordapp.net/attachments/530517627836170261/556874546968526859/IMG_20190317_182003.png?width=400&height=267]';
    
  }
  
  if(`${car1}` === 'evoix') {
    
    if (curlvl >= 25) car1 = '**Mitsubishi Lancer Evolution IX T3** [https://media.discordapp.net/attachments/530517627836170261/556871574524002393/maxresdefault.jpg?width=400&height=225]';
    
    if (curlvl <= 9) car1 = '**Mitsubishi Lancer Evolution IX T1** [https://media.discordapp.net/attachments/530517627836170261/556871407942762504/car_photo_212729.jpg?width=400&height=267]';
  
    if (curlvl <= 24) car1 = '**Mitsubishi Lancer Evolution IX T2** [https://media.discordapp.net/attachments/530517627836170261/556871497499803678/IMG_20190317_180732.jpg?width=400&height=218]';
    
  }
  
  if(`${car1}` === 'corsa') {
    
    if (curlvl >= 25) car1 = '**2002 Opel Corsa T3** [https://media.discordapp.net/attachments/530517627836170261/556905198686044161/161100245-4.jpg?width=400&height=266]';
    
    if (curlvl <= 9) car1 = '**2002 Opel Corsa T1** [https://cdn.proxyparts.com/vehicles/100232/2835780/large/87ebf358-be1b-4714-b3b9-74ab843db032.jpg]';
  
    if (curlvl <= 24) car1 = '**2002 Opel Corsa T2** [http://www.cars-directory.net/pics/opel/corsa/2002/opel_corsa_a1247091024b2823272_orig.jpg]';
  
  }
  
  if(`${car1}` === 'testarossa') {
    
    if (curlvl >= 25) return car1 = '**Ferarri Testarossa (1986) T3** [https://cdn.discordapp.com/attachments/605490012074672158/622592065636925453/yes-0119.png]';
    
    if (curlvl <= 9) return car1 = '**Ferarri Testarossa (1986) T1** [https://cdn.discordapp.com/attachments/605490012074672158/622591651826761748/6fae89694a205a552b9b74e5dcc49294_XL.png]';
  
    if (curlvl <= 24) return car1 = '**Ferarri Testarossa (1986) T2** [https://cdn.discordapp.com/attachments/605490012074672158/622591852717015040/1995-berlinetta-motorcars-ferrari-testarossa-01_large.png]'; 
    
  }
  
  if(`${car1}` === 'bora') {
    
    if (curlvl >= 25) return car1 = '**Volkswagen Bora (1999) T3** [http://0x0.st/zyez.jpg]';
    
    if (curlvl <= 9) return car1 = '**Volkswagen Bora (1999) T1** [http://0x0.st/zyer.png]';
  
    if (curlvl <= 24) return car1 = '**Volkswagen Bora (1999) T2** [http://0x0.st/zyes.png]'; 
    
  }
  
  if(`${car1}` === 'brz') {
    
    if (curlvl >= 25) return car1 = '**Subaru BRZ T3** [http://0x0.st/zy4t.jpg]';
    
    if (curlvl <= 9) return car1 = '**Subaru BRZ T1** [http://0x0.st/zy4J.jpg]';
  
    if (curlvl <= 24) return car1 = '**Subaru BRZ T2** [http://0x0.st/zy4p.jpg]'; 
    
  }
  
  if(`${car1}` === 'r32gtr') {
    
    if (curlvl >= 25) return car1 = '**Nissan R32 GTR T3** [https://cdn.discordapp.com/attachments/609858707118882826/637967726463156224/11882425036_f3a3fb23df_b.jpg]';
    
    if (curlvl <= 9) return car1 = '**Nissan R32 GTR T1** [https://cdn.discordapp.com/attachments/609858707118882826/637967636873084938/nissan_skyliner32_nuevo_motor.jpg]';
  
    if (curlvl <= 24) return car1 = '**Nissan R32 GTR T2** [https://cdn.discordapp.com/attachments/609858707118882826/637967686940360754/6acb4423fa151440f389f90beb34728c.jpg]'; 
    
  }
  
  if(`${car1}` === 'golfxmas') {
    
    if (curlvl >= 1) return car1 = '**Volkswagen Golf Christmas Special** [https://img.drivemag.net/media/default/0001/27/thumb_26486_default_large.jpeg]';
    
  }
  
  if(`${car1}` === '380rs') {
    
    if (curlvl >= 1) return car1 = '**Nismo 380RS Special Car** [https://conceptzperformance.com/items/14797/original/main.jpg]';
    
  }
  
   if(`${car2}` === 'clio') {
  
  if (curlvl2 >= 25) car2 = '**Renault Clio v6 with a Twin Turbo T3** [https://media.discordapp.net/attachments/530517627836170261/556874547505266688/1200px-RenaultClioV6.jpg?width=400&height=262]';
    
    if (curlvl2 <= 9) car2 = '**Renault Clio v6 with a Twin Turbo T1** [https://media.discordapp.net/attachments/530517627836170261/556874546968526858/IMG_20190317_181414.jpg?width=400&height=243]';
    
    if (curlvl2 <= 24) car2 = '**Renault Clio v6 with a Twin Turbo T2** [https://media.discordapp.net/attachments/530517627836170261/556874546968526859/IMG_20190317_182003.png?width=400&height=267]';
    
  }
  
  if(`${car2}` === 'evoix') {
    
    if (curlvl2 >= 25) car2 = '**Mitsubishi Lancer Evolution IX T3** [https://media.discordapp.net/attachments/530517627836170261/556871574524002393/maxresdefault.jpg?width=400&height=225]';
    
    if (curlvl2 <= 9) car2 = '**Mitsubishi Lancer Evolution IX T1** [https://media.discordapp.net/attachments/530517627836170261/556871407942762504/car_photo_212729.jpg?width=400&height=267]';
  
    if (curlvl2 <= 24) car2 = '**Mitsubishi Lancer Evolution IX T2** [https://media.discordapp.net/attachments/530517627836170261/556871497499803678/IMG_20190317_180732.jpg?width=400&height=218]';
    
  }
  
  if(`${car2}` === 'corsa') {
    
    if (curlvl2 >= 25) car2 = '**2002 Opel Corsa T3** [https://media.discordapp.net/attachments/530517627836170261/556905198686044161/161100245-4.jpg?width=400&height=266]';
    
    if (curlvl2 <= 9) car2 = '**2002 Opel Corsa T1** [https://cdn.proxyparts.com/vehicles/100232/2835780/large/87ebf358-be1b-4714-b3b9-74ab843db032.jpg]';
  
    if (curlvl2 <= 24) car2 = '**2002 Opel Corsa T2** [http://www.cars-directory.net/pics/opel/corsa/2002/opel_corsa_a1247091024b2823272_orig.jpg]';
  
  }
  
  if(`${car2}` === 'testarossa') {
    
     if (curlvl2 >= 25) return car2 = '**Ferarri Testarossa (1986) T3** [https://cdn.discordapp.com/attachments/605490012074672158/622592065636925453/yes-0119.png]';
    
    if (curlvl2 <= 9) return car2 = '**Ferarri Testarossa (1986) T1** [https://cdn.discordapp.com/attachments/605490012074672158/622591651826761748/6fae89694a205a552b9b74e5dcc49294_XL.png]';
  
    if (curlvl2 <= 24) return car2 = '**Ferarri Testarossa (1986) T2** [https://cdn.discordapp.com/attachments/605490012074672158/622591852717015040/1995-berlinetta-motorcars-ferrari-testarossa-01_large.png]'; 
    
  }
  
  if(`${car2}` === 'bora') {
    
    if (curlvl2 >= 25) return car2 = '**Volkswagen Bora (1999) T3** [http://0x0.st/zyez.jpg]';
    
    if (curlvl2 <= 9) return car2 = '**Volkswagen Bora (1999) T1** [http://0x0.st/zyer.png]';
  
    if (curlvl2 <= 24) return car2 = '**Volkswagen Bora (1999) T2** [http://0x0.st/zyes.png]'; 
    
  }
  
  if(`${car2}` === 'brz') {
    
    if (curlvl2 >= 25) return car2 = '**Subaru BRZ T3** [http://0x0.st/zy4t.jpg]';
    
    if (curlvl2 <= 9) return car2 = '**Subaru BRZ T1** [http://0x0.st/zy4J.jpg]';
  
    if (curlvl2 <= 24) return car2 = '**Subaru BRZ T2** [http://0x0.st/zy4p.jpg]'; 
    
  }
  
  if(`${car2}` === 'r32gtr') {
    
    if (curlvl2 >= 25) return car2 = '**Nissan R32 GTR T3** [https://cdn.discordapp.com/attachments/609858707118882826/637967726463156224/11882425036_f3a3fb23df_b.jpg]';
    
    if (curlvl2 <= 9) return car2 = '**Nissan R32 GTR T1** [https://cdn.discordapp.com/attachments/609858707118882826/637967636873084938/nissan_skyliner32_nuevo_motor.jpg]';
  
    if (curlvl2 <= 24) return car2 = '**Nissan R32 GTR T2** [https://cdn.discordapp.com/attachments/609858707118882826/637967686940360754/6acb4423fa151440f389f90beb34728c.jpg]'; 
    
  }
  
  if(`${car2}` === 'golfxmas') {
    
    if (curlvl2 >= 1) return car2 = '**Volkswagen Golf Christmas Special** [https://img.drivemag.net/media/default/0001/27/thumb_26486_default_large.jpeg]';
    
  }
  
  if(`${car2}` === '380rs') {
    
    if (curlvl2 >= 1) return car2 = '**Nismo 380RS Special Car** [https://conceptzperformance.com/items/14797/original/main.jpg]';
    
  } */
  
 let startmsg = await message.channel.send(`Hey ${user}, ${message.author.tag} has invited you to a drag race! (you have 10 seconds to react with :white_check_mark: to accept or :x: to decline)`);
    
  await startmsg.react("✅");
    
  await startmsg.react("❌");

  const filter = (reaction, user) => {
    return (
      ["✅", "❌"].includes(reaction.emoji.name) &&
      user.id === message.mentions.users.first().id
    );
  };

  startmsg
    .awaitReactions(filter, { max: 1, time: 10000, errors: ["time"] })
    .then(collected => {
      const reaction = collected.first();
          
    if (reaction.emoji.name === "✅") {
      
      let result = Math.floor((Math.random() * 100) + 0);
      
               if (result > 50) {
    db.add(`userBalance_${user.id}`, `${args[0] * 2}`);
    db.subtract(`userBalance_${message.author.id}`, `${args[0]}`);
    message.channel.send(`<@${user.id}> won using a(n) ${car2}!`);
  } 
      
  else if (result < 50) {
    db.add(`userBalance_${message.author.id}`, `${args[0] * 2}`);
    db.subtract(`userBalance_${user.id}`, `${args[0]}`);
    message.channel.send(`<@${message.author.id}> won using a(n) ${car1}!`);
  }
}
          
   if (reaction.emoji.name == "❌"){
    message.channel.send(":no_entry_sign: The drag race was cancelled! (rejected invitation)"); 
     
  }
  })
    .catch(collected => {
    });  
}

module.exports.help = {
  name: "drag"
};