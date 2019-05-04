const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

function getRow(rows, number) {
	var nL = 1;
	while (nL !== rows.length) {
		if (rows[nL][number] !== "⚫") return nL;
		nL = nL + 1;
	}
}

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            aliases: ['c4'],
            description: language => language.get("CONNECT4_DESCRIPTION"),
            extendedHelp: language => language.get("CONNECT4_EXTENDEDHELP"),
            name: 'connect4',
            runIn: ['text'],
            usage: "<user:mention>"
        });
    }

    async run(msg, [user]) {
        if(!user) {
            return msg.send("I could not find that user.");
        }
        if(user == msg.author) {
            return msg.send("You can not play with yourself.");
        }
        if(user.bot) {
            return msg.send("You may not play against a bot!");
        }
        else {
            let target = user;
            let bot = this.client;
            const ea = ["1⃣", "2⃣", "3⃣", "4⃣", "5⃣", "6⃣", "7⃣"];
            var rows = [ea,  ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"], ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"], ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
            ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"], ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"], ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"]];
            var connect4Embed = new MessageEmbed()
                .setColor("FFD1DC")
                .setTitle("Connect Four Game")
                .setFooter(`It's ${msg.author.tag}'s turn!`);
            connect4Embed.setDescription(`🔴 - ${msg.author.tag}\n🔵 - ${target.tag}\n\n` + rows.map((row) => row.join(" ")).join("\n"));
            msg.send({embed: connect4Embed}).then(async function (Connect4) {
                var oL = 0;
                while (oL != ea.length) {
                    await Connect4.react(ea[oL]);
                    oL = oL + 1;
                }
                var turn = msg.author.id;
                const filter = (reaction, user) => (user.id === msg.author.id || user.id === target.id) && ea.includes(reaction.emoji.name);
                const collector = Connect4.createReactionCollector(filter, { time: 600000 });
                collector.on("collect", (reaction) => {
                    reaction.users.remove(bot.users.get(turn)).catch(function () { });
                    if (reaction.users.last().id === turn) {
                        var currentRow = getRow(rows, ea.indexOf(reaction.emoji.name));
                        if (currentRow == null) currentRow = 6; else currentRow = currentRow - 1;
                        if (currentRow !== 0) {
                            if (turn === msg.author.id) {
                                rows[currentRow][ea.indexOf(reaction.emoji.name)] = "🔴";
                                turn = target.id;
                                connect4Embed.setFooter(`It's ${target.tag}'s turn!`);
                            } else {
                                rows[currentRow][ea.indexOf(reaction.emoji.name)] = "🔵";
                                turn = msg.author.id;
                                connect4Embed.setFooter(`It's ${msg.author.tag}'s turn!`);
                            }
                            Connect4.edit({embed: connect4Embed.setDescription(`🔴 - ${msg.author.tag}\n🔵 - ${target.tag}\n\n` + rows.map((row) => row.join(" ")).join("\n"))});
                            var noRepeat = false;
                            for (let indexOfRow = 0, len = rows.length; indexOfRow < len; indexOfRow++) {
                                const row = rows[indexOfRow];
                                for (let indexOfCoin = 0, len = row.length; indexOfCoin < len; indexOfCoin++) {
                                    const coin = row[indexOfCoin];
                                    if (coin !== "⚫" && coin === row[indexOfCoin + 1] &&
                                        row[indexOfCoin + 1] === row[indexOfCoin + 2] &&
										row[indexOfCoin + 2] === row[indexOfCoin + 3]) {
                                            if (noRepeat == false) {
                                                msg.send(`${coin} won the game and has won 25 NibiruBucks!`).catch(function () { });
                                                noRepeat = true;
                                            }
                                            collector.stop(`${coin} won the game and has won 25 NibiruBucks!`);
                                        }
                                        if (rows[indexOfRow + 1] !== undefined && rows[indexOfRow + 2] !== undefined && rows[indexOfRow + 3] !== undefined) {
                                            if (coin !== "⚫" && coin === rows[indexOfRow + 1][indexOfCoin] &&
                                                rows[indexOfRow + 1][indexOfCoin] === rows[indexOfRow + 2][indexOfCoin] &&
                                                rows[indexOfRow + 2][indexOfCoin] === rows[indexOfRow + 3][indexOfCoin]) {
                                                if (noRepeat === false) {
                                                    msg.send(`${coin} won the game and has won 25 NibiruBucks!`).catch(function () { });
                                                    noRepeat = true;
                                                }
                                                collector.stop(`${coin} won the game and has won 25 NibiruBucks!`);
                                            }
                                        }
                                        if (rows[indexOfRow - 1] !== undefined && rows[indexOfRow - 2] !== undefined && rows[indexOfRow - 3] !== undefined) {
                                            if (coin !== "⚫" && coin === rows[indexOfRow - 1][indexOfCoin + 1] &&
                                                rows[indexOfRow - 1][indexOfCoin + 1] === rows[indexOfRow - 2][indexOfCoin + 2] &&
                                                rows[indexOfRow - 2][indexOfCoin + 2] === rows[indexOfRow - 3][indexOfCoin + 3]) {
                                                    if (noRepeat === false) {
                                                        msg.send(`${coin} won the game and has won 25 NibiruBucks!`).catch(function () { });
                                                        noRepeat = true;
                                                }
                                                collector.stop(`${coin} won the game and has won 25 NibiruBucks!`);
                                            }
                                        }
                                        if (rows[indexOfRow + 1] !== undefined && rows[indexOfRow + 2] !== undefined && rows[indexOfRow + 3] !== undefined) {
                                            if (coin !== "⚫" && coin === rows[indexOfRow + 1][indexOfCoin + 1] &&
                                                rows[indexOfRow + 1][indexOfCoin + 1] === rows[indexOfRow + 2][indexOfCoin + 2] &&
                                                rows[indexOfRow + 2][indexOfCoin + 2] === rows[indexOfRow + 3][indexOfCoin + 3]) {
                                                    if (noRepeat === false) {
                                                        msg.send(`${coin} won the game and has won 25 NibiruBucks!`).catch(function () { });
                                                        noRepeat = true;
                                                }
                                                collector.stop(`${coin} won the game and has won 25 NibiruBucks!`);
                                            }
                                        }
                                   }
                                if (rows.slice(1).map((row) => row.every((coin) => coin !== "⚫")).every((row) => row === true)) {
                                    noRepeat = true;
                                    msg.send(`Game ends in a draw!`).catch(function () { });
                                    collector.stop("Game ends in a draw!");
                                }
                            }
                        }
                    }
                });
                collector.on("end", (_, reason) => Connect4.edit(`Connect Four ended! ${reason}`));
            }).catch(function () {});
        }
    }
}