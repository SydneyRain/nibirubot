const { Event } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class EmojiCreateEvent extends Event {
    constructor(...args) {
        super(...args, {enabled: true});
    }

	async run(emoji) {
        await this.editLog(emoji);
    }
    
    async editLog(emoji) {
        if(!emoji.guild.settings.logs.enabled) return;
        //if(!emoji.guild.settings.logs.logEmojiCreate) return;
        const embed = new MessageEmbed()
            .setColor("#ffcc00")
            .setTitle("New emoji created")
            .setDescription(`A new emoji has been created.\n\n**• Emoji:** <:${emoji.name}:${emoji.id}> \n**• Emoji Name:** ${emoji.name} \n**• ID:** ${emoji.id} `)
        
        const logchannel = await this.client.channels.get(emoji.guild.settings.logs.channel);
        return logchannel.send(embed);
    }
}