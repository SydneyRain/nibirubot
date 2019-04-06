/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("KICK_DESCRIPTION"),
            extendedHelp: language => language.get("KICK_EXTENDEDHELP"),
            name: 'kick',
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

        await member.send(`You have been kicked from **${msg.guild.name}** by the moderator ${msg.author.tag}. Reason: \`\`\`css\n${reason} \`\`\` \n Contact the moderators of this server for help.`).catch(console.error);

        await member.kick(reason);

        return msg.sendMessage(`${member.user.tag} has been kicked by ${msg.author.tag}. Reason: ${reason}`);
    }
}