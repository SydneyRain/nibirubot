const { Event } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class MessageReactionRemoveEvent extends Event {
    constructor(...args) {
        super(...args, {enabled: true});
    }
    
	async run(messageReaction) {
        await this.editLog(messageReaction);
    }


    async editLog(messageReaction) {
        const msg = messageReaction.message;
        if(!msg.guild.settings.logs.enabled) return;
        if(!msg.guild.settings.logs.logMessageReactionAdd) return;

        const embed = new MessageEmbed()
            .setAuthor(`${msg.author.tag}`, msg.author.avatarURL())
            .setColor("#ffcc00")
            .setTitle("Message reaction removed")
            if (messageReaction.emoji.id) { embed.setDescription(`Message reaction added by ${msg.author.tag} was removed.\n\n**• Reaction:**\n <:${messageReaction.emoji.name}:${messageReaction.emoji.id}> \n**• To Message:** \`\`\`${msg.content}\`\`\`\n`); }
            else { embed.setDescription(`Message reaction added by ${msg.author.tag} was removed.\n\n**• Reaction:**\n ${messageReaction.emoji.name} \n**• To Message:** \`\`\`${msg.content}\`\`\`\n`); }
        const logchannel = await this.client.channels.get(msg.guild.settings.logs.channel);
        return logchannel.send(embed);
    }
}