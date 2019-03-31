/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("AUTOROLE_DESCRIPTION"),
            extendedHelp: language => language.get("AUTOROLE_EXTENDEDHELP"),
            name: 'autorole',
            runIn: ['text'],
            usage: '<enable|disable|view> [role:rolename]',
            subcommands: true,
            usageDelim: " ",
            permissionLevel: 6
        });
    }

    async enable(msg, [role]) {
        if(!role) throw msg.language.get("AUTOROLE_ENABLED_ERROR");
        await msg.guild.settings.update([["autorole.enabled", true], ["autorole.rolename", role]], msg.guild).then(() => {
            msg.send(`${msg.language.get("AUTOROLE_ENABLED_SUCCESS")} ${role}`);
        });
    }
    
    async disable(msg) {
        if(!msg.guild.settings.autorole.enabled) throw msg.language.get("AUTOROLE_DISABLED_ERROR")
        await msg.guild.settings.update("autorole.enabled", false, msg.guild).then(() => {
            msg.send(msg.language.get("AUTOROLE_DISABLED_SUCCESS"));
        });
    }

    async view(msg) {
        msg.send(`:desktop: Autorole Settings for ${msg.guild.name}:\n**Enabled**: ${msg.guild.settings.autorole.enabled || "false"}\n**Name:** ${msg.guild.roles.get(msg.guild.settings.autorole.rolename).toString() || "None"}\n**ID:** ${msg.guild.settings.autorole.rolename || "None"}\n`)
    }
}