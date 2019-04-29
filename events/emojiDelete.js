const { Event } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class EmojiDeleteEvent extends Event {
    constructor(...args) {
        super(...args, {enabled: true});
    }

	async run(emoji) {
        await this.editLog(emoji);
    }
    
    async editLog(emoji) {
        if(!emoji.guild.settings.logs.enabled) return;
        if(!emoji.guild.settings.logs.logEmojiDelete) return;
        const embed = new MessageEmbed()
            .setColor("#ffcc00")
            .setTitle("Emoji deleted")
            .setDescription(`An emoji has been deleted.\n\n**• Emoji Name:** ${emoji.name} \n**• ID:** ${emoji.id} `)
        
        const logchannel = await this.client.channels.get(emoji.guild.settings.logs.channel);
        return logchannel.send(embed);
    }
}