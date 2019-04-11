const { Event } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class MessageReactionAddEvent extends Event {
    constructor(...args) {
        super(...args, {event: 'messageUpdate'});
    }

	async run(old, msg) {
        if (msg.guild && old.content !== msg.content) await this.editLog(old, msg);
        return;
    }

    async editLog(old, msg) {
        if(!msg.guild.settings.logs.enabled) return;
        if(!msg.guild.settings.logs.logMessageUpdate) return;

        const embed = new MessageEmbed()
            .setAuthor(`${msg.author.tag}`, msg.author.avatarURL())
            .setColor("#ffcc00")
            .setTitle("Message updated")
            .setDescription(`Message sent by ${old.author.tag} was edited.\n\n**• Old Message:** \`\`\`${old}\`\`\`\n**• New Message:** \`\`\`${msg}\`\`\`\n`);
        
        const logchannel = await this.client.channels.get(msg.guild.settings.logs.channel);
        return logchannel.send(embed);
    }
}