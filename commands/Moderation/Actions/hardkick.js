/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("HARDKICK_DESCRIPTION"),
            extendedHelp: language => language.get("HARDKICK_EXTENDEDHELP"),
            name: 'hardkick',
            runIn: ['text'],
            usage: '<member:member> [reason:string] [...]',
            usageDelim: " ",
            permissionLevel: 6,
            requiredPermissions: ["KICK_MEMBERS"],
        });
    }

    async run(msg, [member, ...reason]) {
        if (!member.kickable) return msg.sendMessage(msg.language.get("ERROR_CANT_KICK"));
        if (member.roles.highest.position >= msg.member.roles.highest.position) return msg.sendMessage(msg.language.get("ERROR_CANT_KICK"));
        
        reason = reason.length ? reason.join(" ") : "No reason given...";

        await member.kick(reason);

        return msg.sendMessage(`${member.user.tag} has been kicked by ${msg.author.tag}. Reason: ${reason}`);
    }
}