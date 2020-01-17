const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let botRole1 = message.guild.roles.find("name", "Hundeguru")
    let botRole2 = message.guild.roles.find("name", "Hundetrainer")

  
  if(message.member.roles.has(botRole1.id)) {
    bot.user.setStatus("dnd");
    bot.user.setActivity("sich seinen Knochen anschauen.", {type: "WATCHING"} );
    message.delete();
  } else {
    if(message.member.roles.has(botRole2.id)) {
      bot.user.setStatus("dnd");
      bot.user.setActivity("sich seinen Knochen anschauen.", {type: "WATCHING"} );
      message.delete();
    } else {
        message.author.send("Du hast nicht die benötigten Berechtigungen. |" + " Erlaubte Rollen: Hundeguru, Hundetrainer");
        
      }
    }
}

module.exports.help = {
  name: 'watching',
  aliases: []
};