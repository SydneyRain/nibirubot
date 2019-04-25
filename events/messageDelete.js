const { Event } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class MessageDeleteEvent extends Event {
    constructor(...args) {
        super(...args, {event: 'messageDelete'});
    }

	async run(msg) {
        await this.editLog(msg);
    }

    async editLog(msg) {
        if(!msg.guild.settings.logs.enabled) return;
        if(!msg.guild.settings.logs.logMessageDelete) return;

        const embed = new MessageEmbed()
            .setAuthor(`${msg.author.tag}`, msg.author.avatarURL())
            .setColor("#ffcc00")
            .setTitle("Message deleted")
            .setDescription(`Message sent by ${msg.author.tag} was deleted.\n\n**• Deleted Message:** \`\`\`${msg}\`\`\`\n`);
        
        const logchannel = await this.client.channels.get(msg.guild.settings.logs.channel);
        return logchannel.send(embed);
    }
}