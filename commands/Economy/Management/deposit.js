/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("DEPOSIT_DESCRIPTION"),
            extendedHelp: language => language.get("DEPOSIT_EXTENDEDHELP"),
            name: 'deposit',
            runIn: ['text'],
            usage: '[money:integer]',
            usageDelim: " "
        });
    }

    async run(msg, [money = 1]) {
        await msg.author.settings.sync(true);
        if (money < 1) return msg.send(msg.language.get("ERROR_INVALID_AMOUNT_DEPOSIT"));
        if (msg.author.settings.money < money) return msg.send(msg.language.get("ERROR_INVALID_MONEY_DEPOSIT"));
        
        await msg.author.settings.update([["money", parseInt(msg.author.settings.money) - money], ["bankmoney", parseInt(msg.author.settings.bankmoney) + money]]).then(() => {
            return msg.sendMessage(`Deposited ${msg.guild.settings.currencySymbol}${money} into your account.`)
        });
    }
}