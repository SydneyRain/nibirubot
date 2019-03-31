/*-------------- Modules --------------*/
const Convert     = require('color-convert');
const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            aliases: ['rc'],
            description: language => language.get("RANDOMCOLOR_DESCRIPTION"),
            extendedHelp: language => language.get("RANDOMCOLOR_EXTENDEDHELP"),
            name: 'randomcolor',
            runIn: ['text', 'dm'],
        });
    }

    async run(msg) {
        var hexno = Math.random().toString(16).slice(-6);
        await msg.send(new MessageEmbed()
            .setTitle(`Random color #${hexno}`)
            .setColor(hexno)
            .setThumbnail('https://dummyimage.com/250/' + hexno + '/' + hexno)
            .addField('Hex', '#' + hexno, true)
            .addField('RGB', '' + Convert.hex.rgb(hexno), true)
            .addField('CMYK', '' + Convert.hex.cmyk(hexno), true)
            .addField('LAB', '' + Convert.hex.lab(hexno), true)
            .addField('XYZ', '' + Convert.hex.xyz(hexno), true)
        ).catch(err => msg.send('An error occurred! ' + err + '. Falling back to text mode! \n' + '```asciidoc\n' + '= Random Color #' + hexno + ' =\nHex :: #' + hexno + '\nRGB :: ' + Convert.hex.rgb(hexno) + '\nCMYK :: ' + Convert.hex.cmyk(hexno) + '\nLAB :: ' + Convert.hex.lab(hexno) + '\nXYZ :: ' + Convert.hex.xyz(hexno) + '```'))
    }
}