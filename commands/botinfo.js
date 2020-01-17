const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new discord.RichEmbed()
    .setAuthor(`Otis-Info`, bot.user.avatarURL)
    .setThumbnail(bot.user.avatarURL)
    .addField(`Version:`, `0.9.0`, true)
    .addField(`Node JS:`, `v10.5.0`, true)
    .addField(`Library:`, `[discord.js](https://discord.js.org/#/)`, true)
    .addField(`Server:`, `${bot.guilds.size}`, true)
    .addField(`Benutzer:`, `${bot.users.size}`, true)
    .addField(`Website:`, `In Entwicklung... 0% Abgeschlossen.`, true)
    .addField(`Erstellt am:`, bot.user.createdAt)
    .addField(`Developer:`, `@Leon|ShrederPlays#2076`, true)
    .addField(`**Discord:** `, `[KitTV](https://discord.gg/wCDAsCp) | [Otis Labor](https://discord.gg/juTR3A)`, true)
    .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", bot.user.avatarURL)
    .setTimestamp()
    .setColor(0xFF0092);
  message.delete();
  message.channel.send(embed);
}

module.exports.help = {
  name: 'botinfo',
  aliases: ['binfo']
};
