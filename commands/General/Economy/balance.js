/*-------------- Modules --------------*/
const { Command }            = require('klasa');
const { MessageEmbed }       = require('discord.js');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("BALANCE_DESCRIPTION"),
            extendedHelp: language => language.get("BALANCE_EXTENDEDHELP"),
            name: 'balance',
            runIn: ['text'],
            usage: '[user:username]',
            usageDelim: " "
        });
    }

    async run(msg, [user = msg.author]) {
        await msg.send(new MessageEmbed()
            .setTitle(`Balance for ${user.username}`)
            .setColor("#3498DB")
            .addField('Balance', `${msg.guild.settings.currencysymbol}${user.settings.money}`, true)
            .addField('Bank', `${msg.guild.settings.currencysymbol}${user.settings.bankmoney}`, true)
            .addField('Net Worth', `${msg.guild.settings.currencysymbol}${parseInt(user.settings.money) + parseInt(user.settings.bankmoney)}`, true)
        ).catch(err => msg.send('An error occurred! ' + err + '. Falling back to text mode! \n' + '```asciidoc\n' + '```'))
    }
}