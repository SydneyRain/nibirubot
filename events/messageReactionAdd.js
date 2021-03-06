const { Event } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class MessageReactionAddEvent extends Event {
    constructor(...args) {
        super(...args, {enabled: true});
    }
    
	async run(messageReaction) {
        if(messageReaction.emoji.name === "⭐") {
            await this.addToStarBoard(messageReaction);
        }

        await this.editLog(messageReaction);
    }

    async addToStarBoard(messageReaction) {
        const msg = messageReaction.message;

        if(!msg.guild.settings.starboard.enabled) return;

        if(msg.reactions.get("⭐").count < msg.guild.settings.starboard.limit) return;

        const starboard = await this.client.channels.get(msg.guild.settings.starboard.channel);

        const embed = new MessageEmbed()
            .setAuthor(`${msg.author.tag}`, msg.author.avatarURL())
            .setColor("#ffcc00")
            .setFooter(`⭐ ${msg.reactions.get("⭐").count.toString()} | #${msg.channel.name} | ${msg.id}`);
            
        if (msg.content) {
            embed.setDescription(`${msg.content}`);
            const matches = msg.content.match(/(http:\/\/|https:\/\/)([a-z, ., /, \d, -, _]+)(\.(gif|jpg|jpeg|tiff|png))/gi);
            if (matches) embed.setImage(matches[0]);
        }

        if (msg.attachments.size === 1) {
            if (/\.(gif|jpg|jpeg|tiff|png)$/i.test(msg.attachments.first().name)) embed.setImage(`${msg.attachments.first().url}`);
        }

        return starboard.send(embed);
    }

    async editLog(messageReaction) {
        const msg = messageReaction.message;
        if(!msg.guild.settings.logs.enabled) return;
        if(!msg.guild.settings.logs.logMessageReactionAdd) return;

        const embed = new MessageEmbed()
            .setAuthor(`${msg.author.tag}`, msg.author.avatarURL())
            .setColor("#ffcc00")
            .setTitle("Message reaction added")
            if (messageReaction.emoji.id) { embed.setDescription(`Message reaction was added by ${msg.author.tag}.\n\n**• Reaction:**\n <:${messageReaction.emoji.name}:${messageReaction.emoji.id}> \n**• To Message:** \`\`\`${msg.content}\`\`\`\n`); }
            else { embed.setDescription(`Message reaction was added by ${msg.author.tag}.\n\n**• Reaction:**\n ${messageReaction.emoji.name} \n**• To Message:** \`\`\`${msg.content}\`\`\`\n`); }
        const logchannel = await this.client.channels.get(msg.guild.settings.logs.channel);
        return logchannel.send(embed);
    }
}