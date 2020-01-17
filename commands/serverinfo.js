const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new discord.RichEmbed()
    .setAuthor(`**${message.guild.name}**`, "https://cdn.discordapp.com/attachments/571825623425613842/572125185193279528/kittvMoin4.png")
    .setThumbnail(`https://cdn.discordapp.com/attachments/571825623425613842/572125185193279528/kittvMoin4.png`)
    .addField(`**Server Name:**`, `${message.guild.name}`, true)
    .addField(`**Server Besitzer:**`, `${message.guild.owner}`, true)
    .addField(`**Benutzer:**`, `${message.guild.memberCount}`, true)
    .addField(`**Rollen:**`, `${message.guild.roles.size}`, true)
    .addField(`**Website:**`, `Momentan nicht verfügbar`, true)
    .addField(`**Erstellt am:**`, message.guild.createdAt)
    .addField(`**You joined at:**`, message.member.joinedAt)
    .addField(`**Discord:** `, `[KitTV](https://discord.gg/wCDAsCp) | [Otis Labor](https://discord.gg/juTR3A)`, true)
    .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", bot.user.avatarURL)
    .setTimestamp()
    .setColor(0x002AFF);
  message.delete();
  message.channel.send(embed);
}

module.exports.help = {
  name: 'serverinfo',
  aliases: []
};
