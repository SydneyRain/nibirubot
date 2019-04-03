/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("WITHDRAW_DESCRIPTION"),
            extendedHelp: language => language.get("WITHDRAW_EXTENDEDHELP"),
            name: 'withdraw',
            runIn: ['text'],
            usage: '[money:integer]',
            usageDelim: " "
        });
    }

    async run(msg, [money = 1]) {
        await msg.author.settings.sync(true);
        if (money < 1) return msg.send(msg.language.get("ERROR_INVALID_AMOUNT_WITHDRAW"));
        if (money > msg.author.settings.bankmoney) return msg.send(msg.language.get("ERROR_INVALID_MONEY_WITHDRAW"));
        
        await msg.author.settings.update([["money", parseInt(msg.author.settings.money) + money], ["bankmoney", parseInt(msg.author.settings.bankmoney) - money]]).then(() => {
            return msg.sendMessage(`Withdrew ${msg.guild.settings.currencysymbol}${money} from your account.`)
        });
    }
}