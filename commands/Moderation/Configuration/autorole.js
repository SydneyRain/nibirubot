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
            usage: '<add|enable|disable> [role:rolename]',
            subcommands: true,
            usageDelim: " ",
            permissionLevel: 6,
            requiredPermissions: ["MANAGE_GUILD"],
        });
    }

    async add(msg, [...role]) {
        if (!role) throw msg.language.get("AUTOROLE_NO_ROLE_SPECIFIED");
        await msg.guild.settings.update("autorole.roles", role, msg.guild).then(() => {
            msg.send(`${msg.language.get("AUTOROLE_SUCCESSFULLY_ADDED")}: ${role}`);
        });
    }

    async enable(msg) {
        if(msg.guild.settings.autorole.enabled) throw msg.language.get("AUTOROLE_ALREADY_ENABLED")
        await msg.guild.settings.update("autorole.enabled", true, msg.guild).then(() => {
            msg.send(`${msg.language.get("AUTOROLE_ENABLED_SUCCESS")}`);
        });
    }
    
    async disable(msg) {
        if(!msg.guild.settings.autorole.enabled) throw msg.language.get("AUTOROLE_DISABLED_ERROR")
        await msg.guild.settings.update("autorole.enabled", false, msg.guild).then(() => {
            msg.send(msg.language.get("AUTOROLE_DISABLED_SUCCESS"));
        });
    }
}