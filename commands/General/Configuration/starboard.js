/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("STARBOARD_DESCRIPTION"),
            extendedHelp: language => language.get("STARBOARD_EXTENDEDHELP"),
            name: 'starboard',
            runIn: ['text'],
            usage: '<enable|disable|limit> [args:string]',
            subcommands: true,
            usageDelim: " ",
            permissionLevel: 6
        });
    }

    async enable(msg) {
        if(msg.guild.settings.starboard.enabled) throw msg.language.get("STARBOARD_ENABLED_ERROR")
        let channel;
        if (msg.mentions.channels.size) { channel = msg.mentions.channels.first(); }
        else { return msg.send('Usage: ``starboard enable [channel]`` - Enables a Starboard channel. For more information on the Starboard see: https://nibiru.dev/commands/starboard/\nExample: ``starboard``'); }
        await msg.guild.settings.update([["starboard.enabled", true], ["starboard.channel", channel.id]], msg.guild);
        return msg.send(`${msg.language.get("STARBOARD_ENABLED_SUCCESS")}${channel.name}!`);
    }
    
    async disable(msg) {
        if(!msg.guild.settings.starboard.enabled) throw msg.language.get("STARBOARD_DISABLED_ERROR")
        await msg.guild.settings.update("starboard.enabled", false);
        return msg.send(`${msg.language.get("STARBOARD_DISABLED_SUCCESS")}`);
    }

    async limit(msg, [limit]) {
        if (!limit) throw msg.language.get("STARBOARD_LIMIT_ERROR")
        if(isNaN(parseInt(limit))) throw "Limit must be a number.";
        await msg.guild.settings.update("starboard.limit", parseInt(limit));
        return msg.send(`${msg.language.get("STARBOARD_LIMIT_SUCCESS")} ${parseInt(limit)}.`)
    }
}