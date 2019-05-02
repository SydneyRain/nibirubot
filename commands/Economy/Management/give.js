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

        if (money < 1) return msg.send(msg.language.get("ERROR_INVALID_MONEY_GIVE"));
        if (msg.author.settings.money < money) return msg.send(msg.language.get("ERROR_INVALID_MONEY_GIVE"));

        if(money === parseInt(money)) {
            await msg.author.settings.update("money", parseInt(msg.author.settings.money) - money);
            await user.settings.update("money", parseInt(user.settings.money) + money);

            return msg.sendMessage(`Successfully transferred ${msg.guild.settings.currencySymbol}${money} to ${user}!`)
        }
        else {
            return msg.send("Usage: +give (money) (user) - Gives money to another user.\nExample: +give 10 @Nibiru - Sends Nibiru 10 NibiruBucks.");
        }
    }
}