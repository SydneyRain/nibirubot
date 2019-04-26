const { Event } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class ChannelDeleteEvent extends Event {
    constructor(...args) {
        super(...args, {enabled: true});
    }

	async run(channel) {
        await this.editLog(channel);
    }
    
    async editLog(channel) {
        if(!channel.guild.settings.logs.enabled) return;
        if(!channel.guild.settings.logs.logChannelDelete) return;
        const embed = new MessageEmbed()
            .setColor("#ffcc00")
            .setTitle("Channel deleted")
            .setDescription(`A channel has been deleted.\n\n**• Name:** #${channel.name} \n**• Type:** ${channel.type} \n **• ID:** ${channel.id}`)
        
        const logchannel = await this.client.channels.get(channel.guild.settings.logs.channel);
        return logchannel.send(embed);
    }
}