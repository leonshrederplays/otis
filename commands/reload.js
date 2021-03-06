const utils = require('../global/utils');
const config = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return utils.timed_msg(utils.no_perm(`${message.author}, you do have the permissions to run this command!`), 5000)

    let command = args[0];
    if (!command) return utils.timed_msg(utils.cmd_fail('Bitte gebe einen Befehl ein der reloaded werden soll!', `${config.prefix}reload <command>`), 5000)

    let response = await bot.unloadCommand(command);
    if (response) return [message.delete(), utils.timed_msg(response, 5000)];

    response = bot.loadCommand(command);
    if (response) return [message.delete(), utils.timed_msg(response, 5000)];

    return [message.delete(), utils.timed_msg(`Befehl ${command} wurde erfolgreich reloaded!`, 5000)];
};

module.exports.help = {
    name: 'reload',
    aliases: []
};