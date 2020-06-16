const Discord = require("discord.js");
const superagent = require("superagent");


module.exports.run = async (bot, message, args) => {
  //Checks if term is provided
  if (!args[0])
    return message.channel.send("Error. Specify a term! `!define [term]`\nNote: if you have spaces in the term use `_` instead of spaces. Example: `!define james_may`.");

  let term = convertTerm(args[0]); //Checks for multiple terms and replaces _ to %20 for API

  let define = await getDefine(term); //Gets definition

  //Checks if there were multiple definitions
  if (define.length == '3') {
    let embed = new Discord.RichEmbed()
      .setTitle(`Definition of ${term.toUpperCase()} from Urban Dictionary`)
      .setThumbnail(`https://www.digzoo.com/sites/default/files/2017-09/image1_31.jpeg`)
      .setColor("#ffa500")
      .addField("Term", define.term[0])
      .addField("Definition", define.definition[0], true)
      .addField("Example", define.example[0], true)
      .addBlankField()
      .addField("Term", define.term[1])
      .addField("Definition", define.definition[1], true)
      .addField("Example", define.example[1], true)
      .addBlankField()
      .addField("Term", define.term[2])
      .addField("Definition", define.definition[2], true)
      .addField("Example", define.example[2], true)
    .setTimestamp()
      .setFooter("Fox, a bot by Akemi#2314", bot.user.displayAvatarURL);

    return message.channel.send(embed); //Sends definition
  }
  //If no multiple definitions
  else {
    return message.channel.send(`**TERM**: ${define.term[0]}\n**DEFINITION**: ${define.definition[0]}\n**EXAMPLE**: ${define.example[0]}`); //Sends definition
  }

  async function getDefine(term) {
    //API Access
    let { body } = await superagent.get(`http://urbanscraper.herokuapp.com/search/${term}`).on("error", err => {
      return message.channel.send("**An unknown error occurred while getting the definition. Try again. If this problem keeps arising, make sure you've joined my support server to report any issues with the bot**");
    })

    let url = `http://www.urbandictionary.com/define.php?term=${term}`;
    let topTerms = [];
    let topDefs = [];
    let topExamples = [];

    //Checks if multiple definitions exist
    if (body.length > 2) {
      for (let i = 0; i < body.length; i++) {
        //Checks if the length of definition doesnt exceed discord limit 1024 chars
        if (body[i].definition.length < 1024) {
          topTerms.push(body[i].term);
          topDefs.push(body[i].definition);
          topExamples.push(body[i].example);
        }
      }
      return {
        term: topTerms,
        definition: topDefs,
        example: topExamples,
        url: url,
        length: "3"
      };
    }
    //If no multiple definitions
    else {
      topTerms.push(body[0].term);
      topDefs.push(body[0].definition);
      topExamples.push(body[0].example);

      return {
        term: topTerms,
        definition: topDefs,
        example: topExamples,
        url: url,
        length: "1"
      };
    }
  }

  function convertTerm(term) {
    let converted = "";
    for (let i = 0; i < term.length; i++) {
      if (term.charAt(i) == "_") {
        term = term.replace("_", "%20"); //Replaces _ to %20 for API
      }
    }
    converted = term.toLowerCase(); //Converts to standard lowercase for case sensitivity
    return converted;
  }
};

module.exports.help = {
  name: "define"
};
