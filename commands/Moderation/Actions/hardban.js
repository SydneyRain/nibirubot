/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("HARDBAN_DESCRIPTION"),
            extendedHelp: language => language.get("HARDBAN_EXTENDEDHELP"),
            name: 'hardban',
            runIn: ['text'],
            usage: '<member:member> [reason:string] [...]',
            usageDelim: " ",
            permissionLevel: 6,
            requiredPermissions: ["BAN_MEMBERS"],
        });
    }

    async run(msg, [member, ...reason]) {
        if (!member.bannable) return msg.sendMessage(msg.language.get("ERROR_CANT_BAN"));
        if (member.roles.highest.position >= msg.member.roles.highest.position) return msg.sendMessage(msg.language.get("ERROR_CANT_BAN"));
        
        reason = reason.length ? reason.join(" ") : "No reason given...";

        await member.ban(reason);

        return msg.sendMessage(`${member.user.tag} has been banned by ${msg.author.tag}. Reason: ${reason}`);
    }
}