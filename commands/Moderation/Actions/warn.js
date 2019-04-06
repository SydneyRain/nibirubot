/*-------------- Modules --------------*/
const { Command }            = require('klasa');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("WARN_DESCRIPTION"),
            extendedHelp: language => language.get("WARN_EXTENDEDHELP"),
            name: 'warn',
            runIn: ['text'],
            usage: '<member:member> [reason:string] [...]',
            usageDelim: " ",
            permissionLevel: 6
        });
    }

    async run(msg, [member, ...reason]) {
        reason = reason.length ? reason.join(" ") : "No reason given...";

        await member.send(`You have been warned in **${msg.guild.name}** by the moderator ${msg.author.tag}. Reason: \`\`\`css\n${reason} \`\`\` \n Contact the moderators of this server for help.`).catch(console.error);

        await member.kick(reason);

        return msg.sendMessage(`${member.user.tag} has been warned by ${msg.author.tag}. Reason: ${reason}`);
    }
}