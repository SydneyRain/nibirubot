/* eslint-disable no-irregular-whitespace */
/*-------------- Modules --------------*/
const { Command }            = require('klasa');
const { MessageEmbed }       = require('discord.js');
const Moment                 = require('moment');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: language => language.get("SERVERINFO_DESCRIPTION"),
            extendedHelp: language => language.get("SERVERINFO_EXTENDEDHELP"),
            name: 'serverinfo',
            runIn: ['text']
        });
    }

    async run(msg,) {
        const region = {
            "brazil": "🇧🇷 Brazil",
            "eu-central": "🇪🇺 Central Europe",
            "hongkong": "🇭🇰 Hong Kong",
            "japan": "🇯🇵 Japan",
            "russia": "🇷🇺 Russia",
            "singapore": "🇸🇬 Singapore",
            "southafrica": "🇿🇦 South Africa",
            "sydney": "🇦🇺 Australia / Sydney",
            "us-central": "🇺🇸 Central US",
            "us-east": "🇺🇸 Eastern US",
            "us-south": "🇺🇸 Southern US",
            "us-west": "🇺🇸 Western US",
            "eu-west": "🇪🇺 Western Europe"
        }
        
        let verlevel = ["None", "Low", "Medium", "High", "Extreme"];

        let onlinePercent = (msg.guild.members.filter(member => member.user.presence.status === 'online').size / msg.guild.memberCount) * 100;
        let idlePercent = (msg.guild.members.filter(member => member.user.presence.status === 'idle').size / msg.guild.memberCount) * 100;
        let dndPercent = (msg.guild.members.filter(member => member.user.presence.status === 'dnd').size / msg.guild.memberCount) * 100;
        let offlinePercent = (msg.guild.members.filter(member => member.user.presence.status === 'offline').size / msg.guild.memberCount) * 100;
        
        await msg.send(new MessageEmbed()
            .setAuthor(`${msg.guild.name}`, msg.guild.iconURL({ size: 16 }))
            .setThumbnail(msg.guild.iconURL({size: 512}))
            .addField('❯ Created', Moment.utc(msg.guild.createdAt).format('lll'))
            .addField(`❯ Members [${msg.guild.memberCount}]`, `<:online:557308134658408483> ${msg.guild.members.filter(member => member.user.presence.status === 'online').size} (${Math.round(onlinePercent)}%)\n<:away:557308134389973013> ${msg.guild.members.filter(member => member.user.presence.status === 'idle').size} (${Math.round(idlePercent)}%)\n<:dnd:557308134662602752> ${msg.guild.members.filter(member => member.user.presence.status === 'dnd').size} (${Math.round(dndPercent)}%)\n<:offline:557308134952140848> ${msg.guild.members.filter(member => member.user.presence.status === 'offline').size} (${Math.round(offlinePercent)}%)\n`, true)
            .addField("❯ Humans/Bots", `:man: ${msg.guild.members.filter(member => !member.user.bot).size}\n:robot: ${msg.guild.members.filter(member => member.user.bot).size}`, true)
            .addField('❯ Owner', msg.guild.owner.user.tag, true)
            .addField('❯ Region', region[msg.guild.region], true)
            .addField(`❯ Channels (${msg.guild.channels.size})`, `:keyboard: ${msg.guild.channels.filter(channel => channel.type === 'text').size || "0"}\n:loud_sound: ${msg.guild.channels.filter(channel => channel.type === 'voice').size || "0"}`, true)
            .addField(`❯ Verification Level`, `:white_check_mark: ${verlevel[msg.guild.verificationLevel]}`, true)
            .addField(`❯ Roles [${msg.guild.roles.size}]`, `${msg.guild.roles.map(role => role.name).join(', ')}`,)
            .setColor("#FFD1DC")
        ).catch(err => msg.send('An error occurred! ' + err + '. Falling back to text mode!\n' + '```asciidoc\n' + `= Server Information for ${msg.guild.name} = \n• Created :: ${Moment.utc(msg.guild.createdAt).format('lll')}\n• Members [${msg.guild.memberCount}] :: ${msg.guild.members.filter(member => member.user.presence.status === 'online').size} (${Math.round(onlinePercent)}%) online, ${msg.guild.members.filter(member => member.user.presence.status === 'idle').size} (${Math.round(idlePercent)}%) idle, ${msg.guild.members.filter(member => member.user.presence.status === 'dnd').size} (${Math.round(dndPercent)}%) DND, ${msg.guild.members.filter(member => member.user.presence.status === 'offline').size} (${Math.round(offlinePercent)}%) offline \n• Humans/Bots :: ${msg.guild.members.filter(member => !member.user.bot).size} humans, ${msg.guild.members.filter(member => member.user.bot).size} bots\n• Owner :: ${msg.guild.owner.user.tag}\n• Region :: ${region[msg.guild.region]}\n• Channels [${msg.guild.channels.size}] :: ${msg.guild.channels.filter(channel => channel.type === 'text').size || "0"} text, ${msg.guild.channels.filter(channel => channel.type === 'voice').size || "0"} voice\n• Verification Level :: ${verlevel[msg.guild.verificationLevel]}\n• Roles [${msg.guild.roles.size}] :: ${msg.guild.roles.map(role => role.name).join(', ')}\`\`\``))
    }
}