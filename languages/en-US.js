 /* en-US language file 
 * This is the English (United States) language file. If you want to translate Nibiru into another language,
 * you can use this as a starting point!
 */

const { Language } = require('klasa');

module.exports = class extends Language {

      constructor(...args) {
      super(...args,);

      this.language = {
            DEFAULT: (key) => `${key} has not been localized for en-US yet.`,

            //8-Ball
            EIGHTBALL_ERROR: 'Usage: ``8ball [question]`` - Ask the 8-Ball a question.\nExample: ``8ball Will I ever find love?`` - Asks the magic 8-ball if you will ever find love.',
            //Achievement
            ACHIEVEMENT_ERROR: 'Usage: ``achievement [text]`` - Generates an achievement get message like Minecraft.\nExample: ``achievement Time To Strike`` - Generates a Minecraft achievement that says "Time To Strike".',
            //Cookie
            COOKIE_ERROR: 'Usage: ``cookie [user]`` - Gives a user a cookie.\nExample: ``cookie Nibiru`` - Gives a cookie to Nibiru.',
            //Cowsay
            COWSAY_ERROR: 'Usage: ``cowsay [text]`` - Makes a cow say something.\nExample: ``cowsay Have you moooed today?`` - Makes the cow say "Have you moooed today?".',
            //Create Text Channel
            CTC_ERROR: 'Usage: ``creatxtchanl [channel name] - Creates a text channel.\nExample: ``creatxtchanl gaming`` - Creates a text channel named "gaming". Spaces may be used.',
            //Create Voice Channel
            CVC_ERROR: 'Usage: ``creatvoichanl [channel name] - Creates a voice channel.\nExample: ``creatvoichanl voicechat`` - Creates a voice channel named "voicechat". Spaces may be used.',
            //Reverse
            REVERSE_ERROR: 'Usage: ``revert [text]`` - Reverts any text you input.\nExample: ``revert Hello world`` - Prints "dlrow olleH", or "Hello world" backwards.',
            //Say
            SAY_ERROR: 'Usage: ``say [text]`` - Make me say something.\nExample: ``say I\'m a cool bot!`` - Makes me say "I\'m a cool bot!".',
            //Set Currency
            SETCURRENCY_SET_ERROR: 'Usage: ``setcurrency [symbol]`` - Changes the currency symbol for this server.\nExample: ``setcurrency $`` - Sets the currency symbol to a dollar.\n``setcurrency :potato:`` - Sets the currency symbol to an emoji, in this example a potato',
            //Slots
            SLOTS_ERROR: 'Usage: ``slots [amount]`` - Plays a game of slots, if you get a match up (3 emojis matching up), you can potentially win up to 300x the amount you bet!\nExample: ``slots 50`` - Bets 50 NibiruBucks on slots.',
            //Descriptions
            ACHIEVEMENT_DESCRIPTION: 'Generates an "Achievement Get" message, like Minecraft.',
            ACHIEVEMENT_EXTENDEDHELP: '+achievement Time To Strike`` :: Generates a Minecraft achievement that says "Time To Strike".',
            AUTOROLE_DESCRIPTION: 'Automatically adds a role to a user when they join the server.',
            AUTOROLE_EXTENDEDHELP: '+autorole enable [role name] :: Enables autorole, gives any new user who joins the server the specified role (if the role exists and I have proper permissions).\n+autorole disable :: Disables autorole, will not give any new users who join a role if it was set.\n+autorole view :: View the autorole details.',
            AVATAR_DESCRIPTION: 'Gets a users avatar.',
            AVATAR_EXTENDEDHELP: '+avatar @[user] :: Gets a users avatar. If no user is provided, you will be given your avatar.',
            BALANCE_DESCRIPTION: 'Displays your NibirBucks(TM) balance, including cash on hand, bank account balance and net worth.',
            BALANCE_EXTENDEDHELP: '+balance :: Displays your balance.\n+balance @[user] :: Displays another users balance',
            BAN_DESCRIPTION: 'Bans a user from the server.',
            BAN_EXTENDEDHELP: '+ban @[user] [reason] :: Bans a user from the server. I will DM them a reason why they got banned.',
            CHANNELID_DESCRIPTION: 'Gets the current channel ID.',
            CHANNELID_EXTENDEDHELP: '+channelid :: Gets the current channel ID.',
            CLEVERBOT_DESCRIPTION: 'Chat with the most intelligent bot in the world - Cleverbot!',
            CLEVERBOT_EXTENDEDHELP: '+cleverbot [text] :: Talks to Cleverbot. It might take a minute for the bot to respond.',
            COINFLIP_DESCRIPTION: 'Flips a coin.',
            COINFLIP_EXTENDEDHELP: '+coinflip :: Flips a coin.',
            COOKIE_DESCRIPTION: 'Gives somebody a cookie! :cookie:',
            COOKIE_EXTENDEDHELP: '+cookie @[user] :: Gives a cookie to a user.',
            COWSAY_DESCRIPTION: 'Makes a cow say something.',
            COWSAY_EXTENDEDHELP: '+cowsay [text] :: Makes an ASCII cow say whatever you want.',
            CTC_DESCRIPTION: 'Creates a text channel.',
            CTC_EXTENDEDHELP: '+creatxtchanl [channel name] :: Creates a text channel. Spaces may be used.',
            CVC_DESCRIPTION: 'Creates a voice channel.',
            CVC_EXTENDEDHELP: '+creatvoichanl [channel name] :: Creates a voice channel. Spaces may be used.',
            DAILY_DESCRIPTION: 'Redeems your daily 1200 NibiruBucks™!',
            DAILY_EXTENDEDHELP: '+daily :: Redeems your daily 1200 NibiruBucks.\n+daily @[user] :: Redeems your daily 1200 NibiruBucks towards another user.',
            DEPOSIT_DESCRIPTION: 'Deposit NibiruBucks into your bank account.',
            DEPOSIT_EXTENDEDHELP: '+deposit [amount] :: Deposits however much you specify into your bank account.',
            EIGHTBALL_DESCRIPTION: 'Ask the magic 8-Ball about your future.',
            EIGHTBALL_EXTENDEDHELP: '+8ball Will I find love? :: Asks the 8-ball "Will I find love?"',
            GIVE_DESCRIPTION: 'Gives another member NibiruBucks.',
            GIVE_EXTENDEDHELP: '+give @[user] [amount] :: Gives the specified user however much money you specify. For example, +give @Nibiru 500 will give Nibiru 500 NibiruBucks.',
            HARDBAN_DESCRIPTION: 'Hardbans a user from the server.',
            HARDBAN_EXTENDEDHELP: '+hardban @[user] [reason] :: Hardbans a user from the server. The only difference between banning and hardbanning is I will not DM the user the reason they were banned.',
            HARDKICK_DESCRIPTION: 'Hardkicks a user from the server.',
            HARDKICK_EXTENDEDHELP: '+hardkick @[user] [reason] :: Hardkicks a user from the server. The only difference between banning and hardkicking is I will not DM the user the reason they were kicked.',
            INSULT_DESCRIPTION: 'Insult somebody you don\'t like.',
            INSULT_EXTENDEDHELP: '+insult @[user] :: Will insult a user.',
            KICK_DESCRIPTION: 'Kicks a user from the server.',
            KICK_EXTENDEDHELP: '+kick @[user] [reason] :: Kicks a user from the server. I will DM them a reason why they got kicked.',
            PING_DESCRIPTION: 'Pings the bot and Discord API, or ping a website',
            PING_EXTENDEDHELP: '+ping :: Pings the bot and Discord\'s API.\n+ping [website] :: Pings a website. You can ping either a website, or an IP address.',
            RANDOMCOLOR_DESCRIPTION: 'Generates a random hex color.',
            RANDOMCOLOR_EXTENDEDHELP: '+randomcolor :: Prints a random hex color."',
            REVERSE_DESCRIPTION: 'Reverses whatever text you input.',
            REVERSE_EXTENDEDHELP: '+reverse [text] :: Reverses whatever text you input.',
            RUSSIANROULETTE_DESCRIPTION: 'One in six chance of either getting 2000, 5000, 1 NibiruBucks, or being kicked from the server! (Must be enabled by the server owner).' ,
            RUSSIANROULETTE_EXTENDEDHELP: '+russianroulette :: Plays the game. (if enabled)\n+russianroulette enable :: Enables playing Russian Roulette\n+russianroulette disable :: Disables playing Russian Roulette',
            SAY_DESCRIPTION: 'Makes me say anything. Anythinggg at all.',
            SAY_EXTENDEDHELP: '+say [text] :: Makes me say something..',
            SETCURRENCY_DESCRIPTION: 'Sets the currency symbol for this server.',
            SETCURRENCY_EXTENDEDHELP: '+setcurrency [symbol] :: Sets the currency symbol to a dollar.\n+setcurrency :[emoji]: :: Sets the currency symbol to an emoji.',
            SLOTS_DESCRIPTION: 'Plays a game of slots! (Requires some money)',
            SLOTS_EXTENDEDHELP: '+slots [amount] :: Bet your NibriuBucks that you will match up all three slots! If you match up all 3 you can win big. Match 3 Lucky 7\'s to potentially win up to 300x the amount you bet!',
            SERVERINFO_DESCRIPTION: 'Gets information about the current server you are on.',
            SERVERINFO_EXTENDEDHELP: '+serverinfo :: Prints out  information about the server.',
            STARBOARD_DESCRIPTION: 'Manages the starboard configuration for this server.',
            STARBOARD_EXTENDEDHELP: '+starboard enable #starboard :: Enables the Starboard, and sets the Starboard channel to "#general".\n+starboard disable :: Disables the starboard.\n+starboard limit 5 :: Sets the starboard limit to 5 (how many stars a message will need to get before it gets added to the Starboard).',
            WAIFU_DESCRIPTION: 'Prints a randomly generated waifu from www.thiswaifudoesnotexist.net.',
            WAIFU_EXTENDEDHELP: '+waifu :: Prints a random waifu.',
            WARN_DESCRIPTION: 'Warns a user on the server.',
            WARN_EXTENDEDHELP: '+warn @[user] [reason] :: Warns a user. I will DM them a reason why they were warned.',
            WITHDRAW_DESCRIPTION: 'Withdraws NibiruBucks from your bank account.',
            WITHDRAW_EXTENDEDHELP: '+withdraw [amount] :: Withdraws however much you specify from your bank account.',

            //Autorole
            AUTOROLE_ENABLED_SUCCESS: 'Autorole for this server has been enabled. \nTo set a role, type ``+autorole add [role name]``. To remove a role, type ``+autorole remove [role name]``',
            AUTOROLE_DISABLED_ERROR: ':no_entry: Autorole has already been disabled!\nTo enable it, type ``+autorole enable``',
            AUTOROLE_DISABLED_SUCCESS: 'Autorole for this server has been disabled.\nTo enable it again, type ``+autorole enable``',

            //Bank
            ERROR_INVALID_AMOUNT_DEPOSIT: 'You specified an invalid amount! You must deposit at least 1 NibiruBuck!',
            ERROR_INVALID_MONEY_DEPOSIT: 'You do not have that much NibiruBucks to deposit!',
            ERROR_INVALID_AMOUNT_WITHDRAW: 'You specified an invalid amount! You must withdraw at least 1 NibiruBuck!',
            ERROR_INVALID_MONEY_WITHDRAW: 'You do not have that much NibiruBucks to withdraw!',
            ERROR_INVALID_MONEY_GIVE: 'You do not have that much NibiruBucks to give!',
            ERROR_INVALID_AMOUNT_GIVE: 'You specified an invalid amount! You must give at least 1 NibiruBuck!',

            //Russian Roulette
            RUSSIANROULETTE_DISABLED: 'Sorry, Russian Roulette is currently disabled on this server. Ask a moderator to enable it!',
            RUSSIANROULETTE_ENABLED_ERROR: 'Russian Roulette has already been enabled!',
            RUSSIANROULETTE_ENABLED_SUCCESS: 'Russian Roulette is now enabled for this server!',
            RUSSIANROULETTE_DISABLED_ERROR: 'Russian Roulette has already been disabled!',
            RUSSIANROULETTE_DISABLED_SUCCESS: 'Russian Roulette is now disabled for this server!',

            //Starboard
            STARBOARD_ENABLED_SUCCESS: 'Successfully enabled the Starboard in #',
            STARBOARD_ENABLED_ERROR: ':no_entry: The Starboard has already been enabled!\nTo disable it, type ``+starboard disable``',
            STARBOARD_DISABLED_SUCCESS: 'Successfully disabled the Starboard.',
            STARBOARD_DISABLED_ERROR: ':no_entry: The Starboard has already been disabled!\nTo enable it, type ``+starboard enable [channel name]``',
            STARBOARD_LIMIT_ERROR: 'Usage: ``starboard limit [number]`` :: Sets how many stars a message must have before being added onto the Starboard.\nExample: ``starboard limit 5`` :: Will set the amount to 5.',
            STARBOARD_LIMIT_SUCCESS: 'Starboard limit has been set to ',

            //Slots
            SLOTS_ERROR_NO_MONEY: 'You do not have that much NibiruBucks to bet!\nTip: Type ``+daily`` each day to get 1200 bucks!',
            
            //Misc
            ERROR_ALREADY_REDEEMED: 'You have already redeemed your daily amount! You may redeem again in: ',
            ERROR_CANT_BAN: ':no_entry: This user may not be banned.',
            ERROR_CANT_KICK: ':no_entry: This user may not be kicked.',
            NSFW_ONLY: ':no_entry: This command may only be used in NSFW channels.',
            NO_PERMISSION_ADMINISTRATOR: ':no_entry: You do not have permission to do this! Requires permission: **ADMINISTRATOR**',

            DEFAULT_LANGUAGE: 'Default Language'
		};
	}

};