/*-------------- Modules --------------*/
const { Command }            = require('klasa');
const { MessageEmbed }       = require('discord.js');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("AVATAR_DESCRIPTION"),
            extendedHelp: language => language.get("AVATAR_EXTENDEDHELP"),
            name: 'avatar',
            runIn: ['text'],
            usage: '[user:username]',
            usageDelim: " "
        });
    }

    async run(msg, [user = msg.author]) {
        await msg.send(new MessageEmbed()
            .setColor("#FFD1DC")
            .setDescription(`${user}'s Avatar\n[Full Image](${user.displayAvatarURL()})`)
            .setThumbnail(user.displayAvatarURL())
        ).catch(err => msg.send('An error occurred! ' + err + '. Falling back to text mode!\n' + '```asciidoc\n' + 'Avatar URL: ::' + user.displayAvatarURL() + '```'))
    }
}