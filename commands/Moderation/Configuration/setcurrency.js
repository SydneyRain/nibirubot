/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("SETCURRENCY_DESCRIPTION"),
            extendedHelp: language => language.get("SETCURRENCY_EXTENDEDHELP"),
            name: 'setcurrency',
            runIn: ['text'],
            usage: '[currency:string]',
            usageDelim: " ",
            permissionLevel: 6
        });
    }

    async run(msg, [currency]) {
        if (!currency) throw msg.language.get("SETCURRENCY_SET_ERROR");

        await msg.guild.settings.update("currencySymbol", currency).then(() => {
            msg.send(`Successfully set currency to ${currency}`);
        });
    }
}