/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("GIVE_DESCRIPTION"),
            extendedHelp: language => language.get("GIVE_EXTENDEDHELP"),
            name: 'give',
            runIn: ['text'],
            usage: '[money:integer] [user:username]',
            usageDelim: " "
        });
    }

    async run(msg, [money, user]) {

        
        await msg.author.settings.sync(true);

        if (money < 1) return msg.send(msg.language.get("ERROR_INVALID_AMOUNT_DEPOSIT"));
        if (msg.author.settings.money < money) return msg.send(msg.language.get("ERROR_INVALID_MONEY_DEPOSIT"));

        await msg.author.settings.update("money", parseInt(msg.author.settings.money) - money);
        await user.settings.update("money", parseInt(user.settings.money) + money);

        return msg.sendMessage(`Successfully transferred ${msg.guild.settings.currencysymbol}${money} to ${user}!`)
    }
}