/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("DAILY_DESCRIPTION"),
            extendedHelp: language => language.get("DAILY_EXTENDEDHELP"),
            name: 'daily',
            runIn: ['text'],
            usage: '[user:username]',
            usageDelim: " "
        });
    }

    async run(msg, [user = msg.author]) {
        await msg.author.settings.sync(true);
        /* Time for how long it'll be until you can redeem again */
        let seconds = Math.floor((parseInt(user.settings.daily) + 86400000 - (Date.now()))/1000);
        let minutes = Math.floor(seconds/60);
        let hours = Math.floor(minutes/60);
        let days = Math.floor(hours/24);

        hours = hours-(days*24);
        minutes = minutes-(days*24*60)-(hours*60);
        seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
        if (user.settings.daily + 86400000 > Date.now()) { return msg.sendMessage(`${msg.language.get("ERROR_ALREADY_REDEEMED")} ${hours} hours, ${minutes} minutes, ${seconds} seconds`) }

        await user.settings.update([["money", parseInt(user.settings.money) + 1200], ["daily", Date.now()]]).then(() => {
            return msg.sendMessage(`You have redeemed your daily ${msg.guild.settings.currencysymbol}1200 NibiruBucks! Have fun :grin:`)
        });
    }
}