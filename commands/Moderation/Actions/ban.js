/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("BAN_DESCRIPTION"),
            extendedHelp: language => language.get("BAN_EXTENDEDHELP"),
            name: 'ban',
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

        await member.send(`You have been banned from **${msg.guild.name}** by the moderator ${msg.author.tag}. Reason: \`\`\`css\n${reason} \`\`\` \n Contact the moderators of this server for help.`).catch(console.error);

        await member.ban(reason);

        return msg.sendMessage(`${member.user.tag} has been banned by ${msg.author.tag}. Reason: ${reason}`);
    }
}