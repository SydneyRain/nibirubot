/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: 'Manages the starboard configuration for this server.',
            extendedHelp: '+starboard enable #starboard :: Enables the Starboard, and sets the Starboard channel to #general".',
            name: 'starboard',
            runIn: ['text'],
            usage: '<enable|disable|limit> [args:string]',
            subcommands: true,
            usageDelim: " ",
            permissionLevel: 6
        });
    }

    async enable(msg) {
        if(msg.guild.settings.starboard.enabled) throw "**Error**: The Starboard has already been enabled!\nTo disable it, type ``+starboard disable``"
        let channel;
        if (msg.mentions.channels.size) { channel = msg.mentions.channels.first(); }
        else { return msg.send('Usage: ``starboard enable [channel]`` - Enables a Starboard channel. For more information on the Starboard see: https://nibiru.dev/commands/starboard/\nExample: ``starboard``'); }
        await msg.guild.settings.update([["starboard.enabled", true], ["starboard.channel", channel.id]], msg.guild);
        return msg.send(`Successfully enabled the Starboard in #${channel.name}!`);
    }
    
    async disable(msg) {
        if(!msg.guild.settings.starboard.enabled) throw "**Error**: The Starboard has already been disabled!\nTo enable it, type ``+starboard enable``"
        await msg.guild.settings.update("starboard.enabled", false);
        return msg.send(`Successfully disabled the Starboard.`);
    }

    async limit(msg, [limit]) {
        if (!limit) throw "Usage: ``starboard limit [number]`` - Sets how many stars a message must have before being added onto the Starboard.\nExample: ``starboard limit 5`` - Will set the amount to 5.";
        if(isNaN(parseInt(limit))) throw "Limit must be a number.";
        await msg.guild.settings.update("starboard.limit", parseInt(limit));
        return msg.send(`Starboard limit has been set to ${parseInt(limit)}.`)
    }
}