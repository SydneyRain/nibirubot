/*-------------- Modules --------------*/
const { Command }            = require('klasa');
const { createCanvas, loadImage, registerFont } = require('canvas');
const path        = require('path');
/*-------------------------------------*/
let appDir = path.dirname(require.main.filename);
/*-------------------------------------*/

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            cooldown: 3,
            description: language => language.get("ACHIEVEMENT_DESCRIPTION"),
            extendedHelp: language => language.get("ACHIEVEMENT_EXTENDEDHELP"),
            requiredPermissions: ["ATTACH_FILES", "EMBED_LINKS"],
            name: 'achievement',
            runIn: ['text', 'dm'],
            usage: '[textToSay:string]'
        });
    }

    async run(msg, [textToSay]) {
        if (!textToSay) throw msg.language.get("ACHIEVEMENT_ERROR");
        
        const canvas = createCanvas(420, 64);
        const ctx = canvas.getContext('2d');
        registerFont(path.join(appDir + '/resources/fonts/Minecraft.ttf'), {family: 'Minecraftia'});

        loadImage(path.join(appDir + '/resources/images/achievement.png')).then((image) => {
            ctx.drawImage(image, 0, 0, 420, 64)
            ctx.font = '16px Minecraftia';
            ctx.fillStyle = "#FFFF00";
            ctx.fillText(`Achievement Get!`,60,26);
            ctx.fillStyle = "#FFFFFF";
            ctx.fillText(`${textToSay}`,60,49);
        })

        return msg.channel.sendFile(canvas.createPNGStream());
    }
}