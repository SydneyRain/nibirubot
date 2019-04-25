const { Event } = require('klasa');
const { MessageEmbed } = require('discord.js');
const Moment = require('moment');

module.exports = class MessageReactionAddEvent extends Event {
    constructor(...args) {
        super(...args, {enabled: true});
    }

	async run(member) {
        await this.autoroleadd(member);
        await this.editLog(member);
    }

    autoroleadd(member) {
        if (!member.guild.settings.autorole.enabled) return;
        if (!member.guild.me.permissions.has("MANAGE_ROLES")) return;
        return member.roles.add(member.guild.settings.autorole.roles, "Adding user to role (Autorole)").catch(() => null);
    }
    
    async editLog(member) {
        if(!member.guild.settings.logs.enabled) return;
        if(!member.guild.settings.logs.logGuildMemberAdd) return;
        const embed = new MessageEmbed()
            .setAuthor(`${member.user.tag}`, member.user.avatarURL())
            .setThumbnail(member.user.avatarURL())
            .setColor("#ffcc00")
            .setTitle("New user join")
            .setDescription(`A new user has joined ${member.guild.name}.\n\n**• Name:** ${member.user.tag} \n**• Joined Discord:** ${Moment(member.user.createdAt).format('lll')} \n **• Joined Server:** ${Moment(member.user.joinedAt).format('lll')}** \n • ID:** ${member.user.id}`)
            .setFooter(`Server is now at ${member.guild.memberCount} members!`);
        
        const logchannel = await this.client.channels.get(member.guild.settings.logs.channel);
        return logchannel.send(embed);
    }
}