const currentLanguage = "english",
    langCode = 'en-US'
c = require("../config.js"),
    e = c.emojis,
    l = c.links;
const { clearifyNumber, generateStars } = require('../helpers/utils');

// This class is used to store languages strings

module.exports = class {

    constructor() {
        this.language = {

            PERM_LEVELS: [
                "User",
                "Moderator",
                "Administrator",
                "Founder",
                "Ultimate",
                "Bot owner"
            ],

            ERR_CMD_CLIENT_PERMISSIONS: (perms) => `${e.error} __**Missing permissions**__\n\nI need the following permissions for this command to work properly: ${perms.map((p) => "`" + p + "`").join(", ")}`,
            ERR_CMD_USER_PERMISSIONS: (levelName, userLevel) => `${e.error} | This command requires the level of permissions \`${levelName}\` (you are \`${userLevel}\`) !`,
            ERR_CMD_COOLDOWN: (time) => `${e.error} | Hey, keep calm! Wait **${this.convertMs(time * 1000)}** before performing this command again!`,
            ERR_CMD_NSFW: `${e.error} | This command must be executed in a NSFW channel!`,
            ERR_CMD_DISABLED: `${e.error} | This command is currently disabled!`,
            ERR_OCCURRED: `${e.error} | An error has occurred. Please try again in a few minutes!`,
            ERR_CMD_GUILDONLY: `${e.error} | This command is not available in private messages!`,
            ERR_CMD_MAINGUILDONLY: `${e.error} | This command is not available outside main server!`,
            ERR_CMD_INVALID_ARGS: (prefix, cmd) => `${e.error} | Invalid arguments. Type \`${prefix}help ${cmd}\` for mor details!`,
            ERR_CMD_NOT_FOUND: (cmd) => `${e.error} | Command \`${cmd}\` not found`,
            ERR_CMD_DISABLED_CHANNEL: (cmd) => `${e.error} | Command${cmd ? " `" + cmd + "`" : "s"} disabled for this channel`,
            ERR_CMD_DISABLED_GUILD: (cmd) => `${e.error} | Command${cmd ? " `" + cmd + "`" : "s"} disabled for this server`,
            ERR_CH_COOLDOWN: (time) => `${e.error} | Hey, keep calm! Wait **${this.convertMs(time * 1000)}** before chatting in this channel!`,
            ERR_NEXTTURN: (username) => `${e.error} | Calm down **${username}**, wait for others!`,
            ERR_INPUT_INVALID_TIME: `${e.error} | Invalid time input! Example: \`3d4h5m6s\``,
            ERR_INPUT_INVALID_DATE: `${e.error} | Invalid date input! Example: \`2020-01-31 12:00:59\``,
            ERR_INPUT_INVALID_CHARACTER: `${e.error} | Invalid character`,
            ERR_INVALID_CHOICE: (options) => `${e.error} | Invalid choice. Try ${options.map((p) => "`" + p + "`").join(", ")}`,
            ERR_CMD_NO_USER: `${e.error} | Couldn't find user`,
            ERR_INVALID_FIELD: (field, FIELDS) => `${e.error} | Field **${field}** not exist. Try ${Array.isArray(FIELDS) ? FIELDS.map((p) => "`" + p + "`").join(", ") : FIELDS}`,
            INVALID_FIELD: (field, FIELDS) => `Field **${field}** not exist. Try ${Array.isArray(FIELDS) ? FIELDS.map((p) => "`" + p + "`").join(", ") : FIELDS}`,
            JSON_ERR_FORMAT: `${e.error} | Invalid JSON format`,
            ERR_PERMISSION_LOWER_ROLE: `${e.error} __**Missing permissions**__\n\nI need permission \`MANAGE_ROLES\` and my role position must be high enough to do this!`,
            PREFIX_INFO: (prefix) => `${e.success} | The prefix of this server is \`${prefix}\`!`,

            /* PING COMMAND */
            PING_DESCRIPTION: "Displays the bot latency!",
            PING_USAGE: "$ping",
            PING_EXAMPLES: "$ping",
            PING_WAIT: `${e.loading} | Pinging...`,
            PING_RESULT: (ms) => `${e.success} | Pong! Latency: \`${ms}\` ms!`,

            /* BUILD EMOJIS COMMAND */
            BUILD_EMOJIS_DESCRIPTION: "Automatically adds the emojis necessary for the bot to work properly and generates a configuration!",
            BUILD_EMOJIS_USAGE: "$build-emojis",
            BUILD_EMOJIS_EXAMPLES: "$build-emojis",
            BUILD_EMOJIS_IN_PROGRESS: `${e.success} | Adding emojis is in progress...-`,
            BUILD_EMOJIS_INFOS: `${e.success} | Copy and paste this into your configuration!`,

            /* HELP COMMAND */
            HELP_TITLE: "Commands List",
            HELP_SUBTITLE: (prefix) => `Use \`${prefix}help [command]\` for more details\nNeed support? Join [Cat](${l.supportChannelInvite})`,
            HELP_HEADINGS: [
                "Command:",
                "Usage:",
                "Examples:",
                "Group:",
                "Description:",
                "Aliases:",
                "User permissions:",
                "Bot permissions:"
            ],
            HELP_NO_ALIASES: "No alias.",
            HELP_ERR_CMD_NOT_FOUND: (cmd) => `${e.error} | Command \`${cmd}\` not found!`,
            HELP_DESC_SUBCMD: (prefix, cmd) => `Use \`${prefix}help ${cmd} [subcommand]\` for more details`,

            /* COINFLIP COMMAND */
            COINFLIP_DESCRIPTION: "Coinflip with 2 modes\n**Classic**: choices `t`, `s` - win `x2` bet\n**Extended**: choices `1s`-`3s` or `1t`-`3t` - win `x3.5` bet, choices `4s`,`4n` or `0s`, `0n` - win `x15` bet",
            COINFLIP_USAGE: "$xocdia [bet] (choice)",
            COINFLIP_EXAMPLES: "$xocdia 500\n$xocdia all t\n$xocdia all 3t",
            COINFLIP_NAME_CLASSIC: "Coinflip Classic",
            COINFLIP_NAME_EXTENDED: "Coinflip Extended",
            COINFLIP_BET_DESCRIPTION: (username, amount, choice) => `**${username}** bet **${clearifyNumber(amount)} catnip** on **${choice}**`,
            COINFLIP_FLIPPING: "Flipping <a:CAT_hyper:588594746176307200>",
            COINFLIP_CHOICES_RESULT: (CHOICES, winChoices) => `Result: ${e.coinflip[CHOICES[winChoices[0]]]} ${e.coinflip[CHOICES[winChoices[1]]]} ${e.coinflip[CHOICES[winChoices[2]]]} ${e.coinflip[CHOICES[winChoices[3]]]}`,
            COINFLIP_FINAL_RESULT: (username, amount, choice, reward) => `**${username}** bet **${clearifyNumber(amount)} catnip** on **${choice}**` + (reward > 0 ? ` and won **${clearifyNumber(reward)} catnip**` : " and lost it all :("),

            /* CATNIP */
            CATNIP_ERR_NOT_ENOUGH: `${e.error} | Not enough catnip`,
            ERR_INVALID_AMOUNT: `${e.error} | Invalid amount`,
            NIP_DESCRIPTION: "check your balance",
            NIP_USAGE: "$nip",
            NIP_EXAMPLES: "$nip",
            NIP_CHECK: (username, amount) => `**${username}**, you have **${clearifyNumber(amount)} catnip**`,

            /* DAILY */
            DAILY_DESCRIPTION: "get high and receive catnip every 12 hours",
            DAILY_USAGE: "$high",
            DAILY_EXAMPLES: "$high",
            DAILY_TITLE: (username) => `${username}, let's high`,
            DAILY_TOTAL_RECEIVED: (amount) => `You received total of **${clearifyNumber(amount)} catnip**`,
            DAILY_HIGH_STREAK: (streak) => `High streak (${streak})`,
            DAILY_HIGH_NEXT: (amount) => `Next reward: ${clearifyNumber(amount)} catnip`,
            DAILY_VOTE_STREAK: (streak) => `Vote streak (${streak})`,
            DAILY_VOTE_NEXT: (min, max) => `Next vote: random ${clearifyNumber(min)} - ${clearifyNumber(max)} catnip`,
            DAILY_VOTE_TIP: `Vote **Doraemon** on __**[link](${l.botVote})**__ (every 12 hours) to receive more cool rewards`,
            DAILY_PREMIUM: (point) => `Premium (${point} points)`,
            DAILY_PREMIUM_COUNT: (bonus) => `Bonus: ${clearifyNumber(bonus)} catnip`,

            /* GIVE */
            GIVE_DESCRIPTION: "give catnip",
            GIVE_USAGE: "$give [@user] [amount]",
            GIVE_EXAMPLES: "$give @Komatsu 100",
            GIVE_ERR_NO_USER: `${e.error} | Missing user`,
            GIVE_ERR_NO_AMOUNT: `${e.error} | Missing catnip amount`,
            GIVE_ERR_USER_BOT: `${e.error} | Cannot sent catnip to bot`,
            GIVE_ERR_USER_SELF: `${e.error} | Cannot sent catnip to yourself`,
            GIVE_INFO: (from, to, amount) => `**${to}** received **${clearifyNumber(amount)} catnip** from **${from}**`,

            /* ADD */
            ADD_DESCRIPTION: "add catnip",
            ADD_USAGE: "$add [@user] [amount]",
            ADD_EXAMPLES: "$add @Komatsu 100",
            ADD_ERR_NO_USER: `${e.error} | Missing user`,
            ADD_ERR_NO_AMOUNT: `${e.error} | Missing catnip amount`,
            ADD_ERR_USER_BOT: `${e.error} | Cannot add catnip to bot`,
            ADD_INFO: (from, to, amount) => `**${to}** has been added **${clearifyNumber(amount)} catnip** by **${from}**`,

            /* TAKE */
            TAKE_DESCRIPTION: "take catnip",
            TAKE_USAGE: "$take [@user] [amount]",
            TAKE_EXAMPLES: "$take @Komatsu 100",
            TAKE_ERR_NO_USER: `${e.error} | Missing user`,
            TAKE_ERR_NO_AMOUNT: `${e.error} | Missing catnip amount`,
            TAKE_ERR_USER_BOT: `${e.error} | Cannot take catnip from bot`,
            TAKE_INFO: (from, to, amount) => `**${to}** has been taken **${clearifyNumber(amount)} catnip** by **${from}**`,

            /** CLEAN */
            CLEAN_DESCRIPTION: "clean the last 15 messages of Mon",
            CLEAN_USAGE: "$clean",
            CLEAN_EXAMPLES: "$cl",

            /** LEADERBOARD */
            LEADERBOARD_DESCRIPTION: "Global leaderboard: catnip, battle streak, power,...",
            LEADERBOARD_USAGE: "$leaderboard [category] [limit]",
            LEADERBOARD_EXAMPLES: "$lb catnip 10",
            LEADERBOARD_CATNIP_TITLE: "Catnip Leaderboard",
            LEADERBOARD_FOOTER: (rank) => `Your rank: ${rank}`,
            /**
            * Feature Channels
            */
            XINH_DESCRIPTION_PROVIDED: `Source for \`girl\` command`,
            ZAI_DESCRIPTION_PROVIDED: `Source for \`boy\` command`,
            MEO_DESCRIPTION_PROVIDED: `Source for \`meo\` command`,
            MEME_DESCRIPTION_PROVIDED: `Source for \`meme\` command`,
            SEXY_DESCRIPTION_PROVIDED: `Source for \`sexy\` command`,
            FOOD_DESCRIPTION_PROVIDED: `Source for \`food\` command`,

            BANK_DESCRIPTION_PROVIDED: "auto exchange cowoncy to catnip",
            BANK_EXCHANGE_SUCCESS: (username, amount) => `${e.success} | **${username}**, transaction completed. You now have **${clearifyNumber(amount)} catnip**`,
            CHARWORDCHAIN_DESCRIPTION_PROVIDED: "Word chain | Character connect",
            WORDWORDCHAIN_DESCRIPTION_PROVIDED: "Word chain | Word connect",
            WORDCHAIN_ERR_INVALIDWORD: (con) => `${e.error} | Next word must start with **${con}**! Use \`> <content>\` to comment.`,
            WORDCHAIN_ERR_NEXTTURN: (username) => `${e.error} | Calm down **${username}**, wait for others! Use \`> <content>\` to comment.`,
            ONEWORDSTORY_DESCRIPTION_PROVIDED: "One-word story",
            TWOWORDSTORY_DESCRIPTION_PROVIDED: "Two-word story",

            /* CHANNEL */
            CHANNEL_DESCRIPTION: "Setup featured channels",
            CHANNEL_USAGE: "$channel []",
            CHANNEL_EXAMPLES: "$channel feature meme",
            CHANNEL_MEDIA_DESCRIPTION: "Set current channel as media channel",
            CHANNEL_MEDIA_USAGE: "$channel media [feature]",
            CHANNEL_MEDIA_EXAMPLES: "$cn media xinh/zai/meo/food/meme/sexy/art/gif/bank",
            CHANNEL_CHARWORDCHAIN_DESCRIPTION: "Set current channel as char-wordchain channel. Example: `hello - object - teacher - ...`",
            CHANNEL_CHARWORDCHAIN_USAGE: "$channel charwordchain",
            CHANNEL_CHARWORDCHAIN_EXAMPLES: "$cn cwc",
            CHANNEL_CONFESSIONPENDING_DESCRIPTION: "Set current channel as confession pending channel",
            CHANNEL_CONFESSIONPENDING_USAGE: "$channel confessionpending",
            CHANNEL_CONFESSIONPENDING_EXAMPLES: "$cn cfsp ",
            CHANNEL_CONFESSION_DESCRIPTION: "Set current channel as confession channel and setup \`key\`. Members will DM me \`keycfs [content]\` to send confession!",
            CHANNEL_CONFESSION_USAGE: "$channel confession [key]",
            CHANNEL_CONFESSION_EXAMPLES: "$cn cfs drm ",
            CHANNEL_COOLDOWN_DESCRIPTION: "Set queue cooldown for current channel",
            CHANNEL_COOLDOWN_USAGE: "$channel cooldown [duration]",
            CHANNEL_COOLDOWN_EXAMPLES: "$cn cd 5s",
            CHANNEL_COUNTING_DESCRIPTION: "Set current channel as counting channel",
            CHANNEL_COUNTING_USAGE: "$channel counting",
            CHANNEL_COUNTING_EXAMPLES: "$cn cnt",
            CHANNEL_INFO_DESCRIPTION: "Show channel info",
            CHANNEL_INFO_USAGE: "$channel info",
            CHANNEL_INFO_EXAMPLES: "$cn i",
            CHANNEL_ONEWORDSTORY_DESCRIPTION: "Set current channel as one-word story channel",
            CHANNEL_ONEWORDSTORY_USAGE: "$channel onewordstory",
            CHANNEL_ONEWORDSTORY_EXAMPLES: "$cn ows",
            CHANNEL_RESET_DESCRIPTION: "Reset featured channel settings",
            CHANNEL_RESET_USAGE: "$channel reset",
            CHANNEL_RESET_EXAMPLES: "$cn rs",
            CHANNEL_TWOWORDSTORY_DESCRIPTION: "Set current channel as two-word story channel",
            CHANNEL_TWOWORDSTORY_USAGE: "$channel twowordstory",
            CHANNEL_TWOWORDSTORY_EXAMPLES: "$cn tws",
            CHANNEL_VOICECHANNELCREATOR_DESCRIPTION: "Set current voice channel as auto creator voice channel",
            CHANNEL_VOICECHANNELCREATOR_USAGE: "$channel voicechannelcreator",
            CHANNEL_VOICECHANNELCREATOR_EXAMPLES: "$cn vcc",
            CHANNEL_WORDWORDCHAIN_DESCRIPTION: "Set current channel as word-wordchain channel. Example: `xin chào - chào hỏi - hỏi han - ...`",
            CHANNEL_WORDWORDCHAIN_USAGE: "$channel wordwordchain",
            CHANNEL_WORDWORDCHAIN_EXAMPLES: "$cn wwc",

            CHANNEL_RESET_SUCCESS: `${e.success} | This channel has been reset to default!`,
            CHANNEL_ERR_INVALID_FEATURE: (FEATURES) => `${e.error} | Invalid feature! Try ${FEATURES.map((f) => "`" + f + "`").join(" ")}`,
            CHANNEL_SUCCESS: (field, feature) => `${e.success} | This channel has been set **${field}** to **${feature}**`,
            CHANNEL_ERR_USER_PERMISSIONS: `${e.error} | You don't have permission to setup this channel or feature!`,
            CHANNEL_ERR_UNSET_NOT_MATCH: (current, unset) => `${e.error} | This channel feature is \`${current}\` not \`${unset}\`. Checkout command \`reset\` to reset channel!`,
            CHANNEL_ERR_SET_OVERWRITE: (feature) => `${e.error} | This channel feature is \`${feature}\`. Try to \`reset\` first!`,
            CHANNEL_COOLDOWN_SUCCESS: (time) => `${e.success} | This channel has been **Cooldown** to **${this.convertMs(time)}**!`,

            /* CONFESSION */
            CONFESSION_DESCRIPTION_PROVIDED: `Confession channel`,
            CONFESSION_ERR_INVALID_KEY_CHAR: `${e.error} | Invalid key. Try only one word with latin characters!`,
            CONFESSION_ERR_KEY_EXIST: (key) => `${e.error} | Key \`${key}\` already exists. Try other one!`,
            CONFESSION_SUCCESS: (key) => `${e.success} | This channel has been set to **Confession** with key \`${key}\``,
            CONFESSIONPENDING_SUCCESS: `${e.success} | This channel has been set to server's **Confession pending**`,
            CONFESSION_ERR_MISSING_CONTENT: `${e.error} | Missing content!`,
            CONFESSION_ERR_KEY_NOT_FOUND: (key) => `${e.error} | Key \`${key}\` not found.`,
            CONFESSION_ERR_NOT_MEM: (guild) => `${e.error} | You are not a member of server **${guild.name}**`,
            CONFESSION_ERR_MEMBER_MISSING_READ_PERM: (channel) => `${e.error} | You don't have permission to read message in **${channel}**`,
            CONFESSION_WAIT_PENDING: (channel) => `${e.loading} | Your confession is pending before sent to **${channel}**`,
            CONFESSION_REPLY_WAIT_PENDING: (channel) => `${e.loading} | Your reply is pending before sent to **${channel}**`,
            CONFESSION_REPLY_ERR_INVALID_COUNT: (count) => `${e.error} | Invalid confession number: **${count}**`,
            CONFESSION_REPLY_ERR_NOT_PRE: `Reply confession only works for **Guild Premium**`,
            CONFESSION_SEND_WARN_ATTACH_NOTPRE: `${e.warning} | Attaching images without pending mode may cause spamming!`,

            /** COUNTING */
            COUNTING_DESCRIPTION_PROVIDED: `Counting channel`,
            COUNTING_ERR_INVALID_MSG: (number) => `${e.error} | Ah ah, try to include \`${number}\` in your message!`,
            COUNTING_TOPIC: (number) => `Next message must include ${number}`,

            /* LANGUAGE */
            LANGUAGE_DESCRIPTION: "Setup language for server",
            LANGUAGE_USAGE: "$language\n$language [language]\n$language list",
            LANGUAGE_EXAMPLES: "$language english",
            LANGUAGE_INFO: `The language of this server is \`${this.getLang()}\`!`,
            LANGUAGE_ERR_INVALID_LANG: (lang) => `${e.error} | Language \`${lang}\` not found!`,
            LANGUAGE_SUCCESS: (lang) => `${e.success} | The language of this server is \`${lang}\`!`,

            /* LIXI */
            LIXI_DESCRIPTION: "Give and take. Add `rd` for random, `s` for server only",
            LIXI_USAGE: "$lixi list\n$lixi take\n$lixi give [amount] (boxes) (random) (server only)",
            LIXI_EXAMPLES: "$lx give 1000 10\n$lx give 5000 rd\n$lx give 3000 s",
            LIXI_ERR_INVALID_BOX_OR_AMOUNT: `${e.error} | Invalid boxes or amount`,
            LIXI_ERR_INVALID_BOXES: (max) => `${e.error} | Maximum is **${max}** boxes`,
            LIXI_ERR_INVALID_RANDOM_AMOUNT: (min) => `${e.error} | Minimum for random mode: **${clearifyNumber(min)} catnip**`,
            LIXI_ERR_INVALID_BOX_AMOUNT: (min) => `${e.error} | Minimum for each box: **${clearifyNumber(min)} catnip**`,
            LIXI_GIVE_SUCCESS: (turns, total) => `${e.success} | You gave away **${turns}** boxes for total **${clearifyNumber(total)} catnip**`,
            LIXI_TAKE_SUCCESS: (num, total, givers) => `${e.success} | You took **${num}** box(es) for total **${clearifyNumber(total)} catnip** from **Lixi** of ${givers}`,
            LIXI_ERR_NO_BOX: `${e.error} | Nothing to take, let's give some!`,
            LIXI_ERR_ALL_TAKEN: `${e.error} | You can't take more, let's give some!`,
            LIXI_LIST_TITLE: "Lixi List",
            LIXI_INFO: (remain, turns, random, guild) => `**${clearifyNumber(remain)}** catnip in **${turns}** boxes ${random ? "`[r]`" : ''}${guild ? "`[g]`" : ''}`,

            /** VOICECHANNEL */
            VOICECHANNEL_DESCRIPTION: "Auto voice channels. Create temp voice channels with settings of the creator!",
            VOICECHANNEL_ERR_NOT_IN_VOICE: `${e.error} | Connect to voice channel to continue!`,
            VOICECHANNEL_CREATOR_SUCCESS: (channel) => `${e.success} | Channel **${channel}** has been set to \`voice channel creator\`. Those channels created by this channel will copy settings from it!`,
            VOICECHANNEL_STABLE_SUCCESS: (channel) => `${e.success} | Channel **${channel}** has been set to \`voice channel stable\``,

            VOICECHANNEL_CLAIM_SUCCESS: (user, channel) => `${e.voiceChannel} | **${user}** has claimed room **${channel}**`,
            VOICECHANNEL_CLAIM_DESCRIPTION: "Claim room when the host left",
            VOICECHANNEL_CLAIM_USAGE: "$voice claim",
            VOICECHANNEL_CLAIM_EXAMPLES: "$vc c",
            VOICECHANNEL_INFO_DESCRIPTION: "Room info",
            VOICECHANNEL_INFO_USAGE: "$voice info",
            VOICECHANNEL_INFO_EXAMPLES: "$vc i",
            VOICECHANNEL_CLEAN_DESCRIPTION: "Clean voice settings messages",
            VOICECHANNEL_CLEAN_USAGE: "$voice clean",
            VOICECHANNEL_CLEAN_EXAMPLES: "$vc cl",
            VOICECHANNEL_ALLOW_DESCRIPTION: "Allow user(s) to connect",
            VOICECHANNEL_ALLOW_USAGE: "$voice allow [@user]",
            VOICECHANNEL_ALLOW_EXAMPLES: "$vc a @komatsu#7447 @ustamok#3010",
            VOICECHANNEL_DENY_DESCRIPTION: "Deny user(s) from room",
            VOICECHANNEL_DENY_USAGE: "$voice deny [@user]",
            VOICECHANNEL_DENY_EXAMPLES: "$vc d @komatsu#7447 @ustamok#3010",
            VOICECHANNEL_LIMIT_DESCRIPTION: "Edit user limit, enter \`0\` to unlimit",
            VOICECHANNEL_LIMIT_USAGE: "$voice limit [quantity]",
            VOICECHANNEL_LIMIT_EXAMPLES: "$vc lm 5",
            VOICECHANNEL_LOCK_DESCRIPTION: "Lock room and allow all users in room",
            VOICECHANNEL_LOCK_USAGE: "$voice lock",
            VOICECHANNEL_LOCK_EXAMPLES: "$vc l",
            VOICECHANNEL_UNLOCK_DESCRIPTION: "Unlock room",
            VOICECHANNEL_UNLOCK_USAGE: "$voice unlock",
            VOICECHANNEL_UNLOCK_EXAMPLES: "$vc ul",
            VOICECHANNEL_NAME_DESCRIPTION: "Change room name",
            VOICECHANNEL_NAME_USAGE: "$voice name [new name]",
            VOICECHANNEL_NAME_EXAMPLES: "$vc n Let's talk",
            VOICECHANNEL_RESET_DESCRIPTION: "Reset room settings",
            VOICECHANNEL_RESET_USAGE: "$voice reset",
            VOICECHANNEL_RESET_EXAMPLES: "$vc rs",
            VOICECHANNEL_SLEEP_DESCRIPTION: "Enable sleep-mode",
            VOICECHANNEL_SLEEP_USAGE: "$voice sleep",
            VOICECHANNEL_SLEEP_EXAMPLES: "$vc s",
            VOICECHANNEL_WAKEUP_DESCRIPTION: "Disable sleep-mode",
            VOICECHANNEL_WAKEUP_USAGE: "$voice wakeup",
            VOICECHANNEL_WAKEUP_EXAMPLES: "$vc w",
            VOICECHANNEL_TRANSFER_DESCRIPTION: "Transfer host",
            VOICECHANNEL_TRANSFER_USAGE: "$voice transfer [@user]",
            VOICECHANNEL_TRANSFER_EXAMPLES: "$vc tf @komatsu7447",
            VOICECHANNEL_BLOCK_DESCRIPTION: "Soft-block users, avoid seeing their channels and prevent them from seeing your channel when you `solfhide` it!",
            VOICECHANNEL_BLOCK_USAGE: "$voice block [user]",
            VOICECHANNEL_BLOCK_EXAMPLES: "$vc bl 202381699164667913",
            VOICECHANNEL_UNBLOCK_DESCRIPTION: "Unblock users",
            VOICECHANNEL_UNBLOCK_USAGE: "$voice unblock [user]",
            VOICECHANNEL_UNBLOCK_EXAMPLES: "$vc ubl 202381699164667913",
            VOICECHANNEL_HIDE_DESCRIPTION: "Hide channel",
            VOICECHANNEL_HIDE_USAGE: "$voice hide",
            VOICECHANNEL_HIDE_EXAMPLES: "$vc h",
            VOICECHANNEL_SHOW_DESCRIPTION: "Show channel",
            VOICECHANNEL_SHOW_USAGE: "$voice show",
            VOICECHANNEL_SHOW_EXAMPLES: "$vc sh",
            VOICECHANNEL_SOFTHIDE_DESCRIPTION: "Soft-hide channel, prevent soft-blocked users seeing your channel",
            VOICECHANNEL_SOFTHIDE_USAGE: "$voice softhide",
            VOICECHANNEL_SOFTHIDE_EXAMPLES: "$vc sfh",
            VOICECHANNEL_SOFTSHOW_DESCRIPTION: "Soft-show channel, soft-blocked users maybe see your channel",
            VOICECHANNEL_SOFTSHOW_USAGE: "$voice softshow",
            VOICECHANNEL_SOFTSHOW_EXAMPLES: "$vc sfs",

            VOICECHANNEL_LIMIT_SUCCESS: (channel, limit) => `${e.voiceChannel} | **${channel}**'s user limit has been set to **${limit}**`,
            VOICECHANNEL_NO_LIMIT_SUCCESS: (channel) => `${e.voiceChannel} | **${channel}**'s user limit cleared`,
            VOICECHANNEL_LOCK_SUCCESS: (channel) => `${e.voiceChannel} | **${channel}** locked`,
            VOICECHANNEL_UNLOCK_SUCCESS: (channel) => `${e.voiceChannel} | **${channel}** unlocked`,
            VOICECHANNEL_NAMED_SUCCESS: (channel) => `${e.voiceChannel} | Room named **${channel}**`,
            VOICECHANNEL_TRANSFER_SUCCESS: (user, channel) => `${e.voiceChannel} | **${user}** has become host of **${channel}**`,
            VOICECHANNEL_ERR_TRANSFER_OUTSIDE: (user) => `${e.error} | **${user}** not in room!`,
            VOICECHANNEL_ERR_TRANSFER_SELF: `${e.loading} | Wait what?`,
            VOICECHANNEL_ERR_TRANSFER_BOT: `${e.error} | Hey... Don't let a bot control you!!`,
            VOICECHANNEL_DENY_SUCCESS: (user, channel) => `${e.voiceChannel} | **${user}** has been denied from **${channel}**`,
            VOICECHANNEL_UNDENY_SUCCESS: (user, channel) => `${e.voiceChannel} | **${user}** no longer denied from **${channel}**`,
            VOICECHANNEL_ALLOW_SUCCESS: (user, channel) => `${e.voiceChannel} | **${user}** allowed to connect **${channel}**`,
            VOICECHANNEL_RESET_SUCCESS: (channel) => `${e.voiceChannel} | **${channel}** has been reset`,
            VOICECHANNEL_SLEEP_SUCCESS: (channel) => `${e.voiceChannel} | **${channel}** enabled **sleep-mode**`,
            VOICECHANNEL_WAKEUP_SUCCESS: (channel) => `${e.voiceChannel} | **${channel}** disabled **sleep-mode**`,
            VOICECHANNEL_BLOCK_ALREADY: (target) => `${e.error} | You have blocked **${target}** before`,
            VOICECHANNEL_BLOCK_SUCCESS: (target) => `${e.voiceChannel} | you've soft-blocked **${target}**`,
            VOICECHANNEL_UNBLOCK_NOTBLOCK: (target) => `${e.error} | You haven't blocked **${target}** yet`,
            VOICECHANNEL_UNBLOCK_SUCCESS: (target) => `${e.voiceChannel} | you've un-blocked **${target}**`,
            VOICECHANNEL_ERR_NOT_VC: `${e.error} | This command only works for \`auto voice channels\``,
            VOICECHANNEL_ERR_TRANSFER_NOBODY: `${e.error} | Missing user`,
            VOICECHANNEL_ERR_HOSTONLY: `${e.error} | Only host can use this command`,
            VOICECHANNEL_ERR_INVALID_LIMIT: `${e.error} | User limit must be \`1-99\` or \`0\` in case clear`,
            VOICECHANNEL_ERR_HOST_EXISTS: `${e.error} | The host is around here, calm down!`,
            VOICECHANNEL_ERR_ALREADY_HOST: `${e.error} | You are the host, remember?`,
            VOICHANNEL_ERR_MISSING_CATE_PERMS: `${e.error} | Missing permissions!\nTry to give me all the permissions (\`Manage Channel\` and \`Manage Permission\`) with this **Creator channel**`,
            CHANNEL_VOICECHANNELCREATOR_ERR_MAX: (guild, channel) => `${e.error} | Server **${guild}** have reached maximum Creator channels (**${channel}**)`,
            CHANNEL_CONFESSION_ERR_MAX: (guild, cn) => `${e.error} | Server **${guild}** have reached maximum Confession channel (<#${cn}>)`,

            /** LINKS */
            LINK_DESCRIPTION: "Useful links",
            LINK_USAGE: "$link",
            LINK_EXAMPLES: "$link",
            LINK_USEFUL_LINKS: "Here you are, some useful links",

            /** SAY */
            SAY_DESCRIPTION: "Forward messages content to channels. Use `sayx` to delete original message",
            SAY_USAGE: "$say [content]\n$say [#channel] content",
            SAY_EXAMPLES: "$say hello\n$say #chat hello\n$sayx #chat guess who",
            SAY_ERR_PERM_CLIENT: (channel) => `${e.error} | Mon doesn't have permission to send message in **${channel}**!`,
            SAY_ERR_PERM_USER: (channel) => `${e.error} | You don't permission to send message in **${channel}**!`,

            /** MUTE */
            MUTE_ERR_MANAGE_PERM: `${e.error} | Can't mute this user (can \`manage_channels\`)`,
            MUTE_SUCCESS: (user, time) => `${e.mute} | **${user}** has been **muted** for **${this.convertMs(time)}**`,
            UNMUTE_SUCCESS: (user) => `${e.unmute} | **${user}** has been **unmuted**`,
            UNMUTE_ERR_NOT_MUTED: `${e.error} | User hasn't been muted yet!`,

            /** STOP */
            STOP_DESCRIPTION: "Stop and disconnect bot from voice channel",
            STOP_USAGE: "$stop",
            STOP_EXAMPLES: "$stop",
            STOP_ERR_IS_USING: `${e.error} | Someone is using this command!`,

            /** SPEAK */
            SPEAK_DESCRIPTION: "Text to speech. Use `speakx` to delete original message.\nSoundboards: `aecc`, `ccc`, `ccmmd`, `clmnm`, `clq`, `dccmg`, `dt`, `dvl`, `gc`, `hldmm`, `md`, `nl`, `ooa`, `sqsq`, `tlm`, `ttdnd`, `tuk`, `vcl`, `xl`, `ydcg`, `yrd`",
            SPEAK_USAGE: "$speak [content]",
            SPEAK_EXAMPLES: "$s hello, it's me\n$sx hello, guess who",
            SPEAK_ERR_IS_SPEAKING: `${e.error} | Wait a minute, Mon is talking right now`,
            SPEAK_ERR_CHANNEL_NOT_FOUND: `${e.error} | Couldn't find voice channel`,
            SPEAK_ERR_USER_MISSING_PERM_MOVE: `${e.error} | You need \`MOVE_MEMBERS\` permission to speak in different channel!`,
            SPEAK_ERR_NOT_VIEWABLE: (channel) => `${e.error} | Missing permission \`VIEW_CHANNEL\` with **${channel}**`,
            SPEAK_ERR_NOT_JOINABLE: (channel) => `${e.error} | Mon can not join **${channel}**`,
            SPEAK_ERR_NOT_SPEAKABLE: (channel) => `${e.error} | Mon can not speak in **${channel}**`,
            SPEAK_ERR_TOO_LONG: (max, guildPre) => `${e.error} | Maximum **${max}** words per sentence${guildPre ? " in **Premium Guild**" : ""}!`,

            /** LEVEL */
            LEVEL_DESCRIPTION: "Level, rank, rewards",
            LEVEL_REWARD_DESCRIPTION: "Add/remove level reward as role",
            LEVEL_REWARD_USAGE: "$level reward add [@role] [level] (description)\n$level reward remove [@role]",
            LEVEL_REWARD_EXAMPLES: "$lvl rw add @starter 5 Change nickname is unlocked\n$lvl rw remove @starter",
            LEVEL_DISABLE_DESCRIPTION: "Disable level for server",
            LEVEL_DISABLE_USAGE: "$level disable",
            LEVEL_DISABLE_EXAMPLES: "$lvl disable",
            LEVEL_ENABLE_DESCRIPTION: "Enable level for server",
            LEVEL_ENABLE_USAGE: "$level enable",
            LEVEL_ENABLE_EXAMPLES: "$lvl enable",
            LEVEL_MESSAGE_DESCRIPTION: "Edit level-up message",
            LEVEL_MESSAGE_USAGE: "$level message [content]",
            LEVEL_MESSAGE_EXAMPLES: "$lvl msg Congratz {user}, you've reached level {level}!",
            LEVEL_NOXP_DESCRIPTION: "Set no-xp role",
            LEVEL_NOXP_USAGE: "$level noxp [@role]",
            LEVEL_NOXP_EXAMPLES: "$lvl noxp @No-xp",
            LEVEL_RESET_DESCRIPTION: "Reset members xp",
            LEVEL_RESET_USAGE: "$level reset all\n$lvl reset [@user]",
            LEVEL_RESET_EXAMPLES: "$lvl rs all\n$lvl rs @komatsu#7447 @ustamok#3010",
            LEVEL_SETXP_DESCRIPTION: "Custom channel xp range. Use `--g` for server custom",
            LEVEL_SETXP_USAGE: "$level setxp (--g) [min] [max]",
            LEVEL_SETXP_EXAMPLES: "$level setxp 10 20\n$lvl setxp --g 10 20",
            LEVEL_UPDATE_DESCRIPTION: "Update missing role reward for members",
            LEVEL_UPDATE_USAGE: "$level update",
            LEVEL_UPDATE_EXAMPLES: "$lvl update",
            LEVEL_LEADERBOARD_DESCRIPTION: "Show leaderboard",
            LEVEL_LEADERBOARD_USAGE: "$level leaderboard",
            LEVEL_LEADERBOARD_EXAMPLES: "$lvl lb",
            LEVEL_RANK_DESCRIPTION: "Check rank",
            LEVEL_RANK_USAGE: "$level rank\n$level rank [user]",
            LEVEL_RANK_EXAMPLES: "$lvl rank\n$lvl rank 436520860254470156",
            LEVEL_REWARDS_DESCRIPTION: "Show rewards",
            LEVEL_REWARDS_USAGE: "$level rewards",
            LEVEL_REWARDS_EXAMPLES: "$lvl rws",
            LEVEL_INFO_DESCRIPTION: "Show level settings",
            LEVEL_INFO_USAGE: "$level info",
            LEVEL_INFO_EXAMPLES: "$lvl i",
            LEVEL_TOGGLEREMOVEROLE_DESCRIPTION: `Toggle remove lower role rewards`,
            LEVEL_TOGGLEREMOVEROLE_USAGE: "$level toggleremoverole",
            LEVEL_TOGGLEREMOVEROLE_EXAMPLES: "$lvl trr",

            LEVEL_TOGGLEREMOVEROLE_SUCCESS: (newState) => `${e.success} | Toggle remove role state: **${newState}**`,
            LEVEL_ERR_REWARD_INVALID: "Level reward invalid",
            LEVEL_ERR_REWARD_ROLE_NOT_FOUND: (key) => `Role with ID \`${key}\` does no longer exist.\nRemoving the reward for you...`,
            LEVEL_ERR_ADDROLE_PERMISSION: (role, user, guild) => `Not enough permissions to assign **${role}** to **${user}** on **${guild}**.`,
            LEVEL_UP_TITLE: "LEVEL UP!",
            LEVEL_FIX_TITLE: "LEVEL FIX!",
            LEVEL_UP_DESC: (member, lvl) => `**${member}** just reached level **${lvl}**!`,
            LEVEL_LEADERBOARD_TITLE: (guild) => `${guild}'s Level Leaderboard`,
            LEVEL_REWARDS_TITLE: (guild) => `${guild}'s Level Rewards`,
            LEVEL_INFO_TITLE: (guild) => `${guild}'s Level Info`,
            LEVEL: "Level",
            LEVEL_GENERAL_XP: "General Xp",
            LEVEL_CUSTOM_XP: "Custom Xp",
            LEVEL_MESSAGE_ERR_TOOLONG: (limit) => `${e.error} | Message too long. Maximum: \`${limit}\` characters!`,
            LEVEL_MESSAGE_SUCCESS: (guild) => `${e.success} | **${guild}**'s level-up message updated!`,
            LEVEL_REWARD_ERR_INVALID_LEVEL: `${e.error} | Invalid level!`,
            LEVEL_REWARD_ADD_SUCCESS: (role, level, desc) => `${e.success} | Reward added\nLevel: **${level}**\nRole: **${role}**\nDescription: ${desc}`,
            LEVEL_REWARD_ADD_ERR_EXIST: `${e.error} | Role is already a reward!`,
            LEVEL_REWARD_REMOVE_SUCCESS: `${e.success} | Reward removed!`,
            LEVEL_REWARD_REMOVE_ERR_NOT_EXIST: `${e.error} | Role is not a reward!`,
            LEVEL_NOXP_ROLE: "No-xp Role",
            LEVEL_ENABLE_SUCCESS: (guild) => `${e.success} | Enabled level for server **${guild}**`,
            LEVEL_DISABLE_SUCCESS: (guild) => `${e.success} | Disabled level for server **${guild}**`,
            LEVEL_ENABLE_ALREADY: `${e.error} | Level already enabled in this server`,
            LEVEL_DISABLE_ALREADY: `${e.error} | Level already disabled in this server`,
            LEVEL_RESET_MEMBERS_SUCCESS: (members) => `${e.success} | ${members} xp reset to 0`,
            LEVEL_RESET_SERVER_CONFIRM: (guild) => `${e.loading} | Are you sure to reset all **${guild}**'s levels?`,
            LEVEL_RESET_SERVER_SUCCESS: (guild) => `${e.success} | **${guild}**'s levels has been reset!`,
            LEVEL_SETXP_ERR_OUTRANGE: (min, max) => `${e.error} | Invalid min, max xp (\`${min} - ${max}\`)`,
            LEVEL_SETXP_RANGE_SUCCESS: (channels, min, max) => `${e.success} | Set custom xp of **${channels}** to \`${min}\` - \`${max}\``,
            LEVEL_SETXP_GUILD_RANGE_SUCCESS: (guild, min, max) => `${e.success} | Set custom xp of server **${guild}** to \`${min}\` - \`${max}\``,
            LEVEL_NOXP_SUCCESS: (role) => `${e.success} | ${role} set to no-xp role`,
            LEVEL_BONUS_CATNIP: (amount) => `Bonus: **${clearifyNumber(amount)} catnip**`,

            /** GTN */
            GTN_DESCRIPTION: "Guess the number! Three hints levels randomly spawns. When auto-mode is on, just type the number to guess.",
            GTN_USAGE: "$gtn auto\n$gtn [number]\n$gtn info",
            GTN_EXAMPLES: "$gtn auto (toggle auto mode)\n$gtn 50\n50 (in auto-mode)\n$gtn info",
            GTN_WIN: (user, reward) => `BINGOOOOOOOOO!!!! **${user}** guessed the right number` + (reward ? ` and earned **${clearifyNumber(reward)} catnip**` : '.'),
            GTN_TOGGLE_AUTOMODE: (auto) => `${e.success} | GTN auto: **${auto ? 'ON' : 'OFF'}**`,
            GTN_ERR_OUTTURN: `${e.error} | You're out of turns, try again in next game!`,
            GTN_HINT_LVL: (level) => `GTN hint level **${level}**`,
            GTN_HINT_LVL_HIDDEN: (level) => `GTN hint level **${level}** hidden`,
            GTN_HINT_LVL_1: (number, key) => [
                `The key number is \`${(key % 2) ? 'odd' : 'even'}\``,
                `The key number is \`${(number < key) ? 'greater' : 'not greater'}\` than \`${number}\``,
                `The key number is \`${(number < key) ? 'greater' : 'not greater'}\` than \`${number}\``,
            ],
            GTN_HINT_LVL_2: (keyS, hintDigit, digitsSum) => [
                `The key number has a digit \`${hintDigit}\``,
                `The total of all digit(s) is \`${digitsSum}\``,
                `The key number has \`${keyS.length}\` digits`,
                `The first digit is \`${keyS.slice(0, 1)}\``,
                `The last digt is \`${keyS.slice(-1)}\``
            ],
            GTN_HINT_LVL_3: (numbers) => [`The set of digits: **${numbers}**`],

            /** BAUCUA */
            BAUCUA_DESCRIPTION: `Game Baucua\nChoices: \`tom\` (${e.baucua['tom']}), \`ga\` (${e.baucua['ga']}), \`nai\` (${e.baucua['nai']}), \`ca\` (${e.baucua['ca']}), \`bau\` (${e.baucua['bau']}), \`cua\` (${e.baucua['cua']})`,
            BAUCUA_USAGE: "$baucua [bet] (choice)",
            BAUCUA_EXAMPLES: "$bc 5000\n$bc all tom",
            BAUCUA_TITLE: "Baucua",
            // BAUCUA_COUNTDOWN: (time) => `ends in ${this.convertMs(time)}`,
            // BAUCUA_END_TITLE: "Baucua Ended",
            BAUCUA_BET_DESCRIPTION: (user, amount, choice, timeout) => `${e.baucua['icon']} **|** **${user}** bet **${clearifyNumber(amount)} catnip** on ${e.baucua[choice]} (\`${this.convertMs(timeout)} left\`)`,
            BAUCUA_WIN_DESCRIPTION: (user, amount) => `${e.baucua['icon']} **|** ${user} won **${clearifyNumber(amount)} catnip**`,

            /** BLACKJACK */
            BLACKJACK_DESCRIPTION: "Blackjack PvP",
            BLACKJACK_USAGE: "",
            BLACKJACK_EXAMPLES: "",
            BLACKJACK_JOIN_DESCRIPTION: "Join game",
            BLACKJACK_JOIN_USAGE: "$blackjack join [ID]",
            BLACKJACK_JOIN_EXAMPLES: "$bj in 1011",
            BLACKJACK_LIST_DESCRIPTION: "List waiting blackjack games in server",
            BLACKJACK_LIST_USAGE: "$blackjack list",
            BLACKJACK_LIST_EXAMPLES: "$bj ls",
            BLACKJACK_MINE_DESCRIPTION: "List your waiting blackjack games",
            BLACKJACK_MINE_USAGE: "$blackjack mine",
            BLACKJACK_MINE_EXAMPLES: "$bj mine",
            BLACKJACK_NEW_DESCRIPTION: "Create new game",
            BLACKJACK_NEW_USAGE: "$blackjack new [bet]",
            BLACKJACK_NEW_EXAMPLES: "$bj n 5000",
            BLACKJACK_START_DESCRIPTION: "Start game",
            BLACKJACK_START_USAGE: "$blackjack start [ID]",
            BLACKJACK_START_EXAMPLES: "$bj s 1011",
            BLACKJACK_INFO_DESCRIPTION: "Game info",
            BLACKJACK_INFO_USAGE: "$blackjack info [ID]",
            BLACKJACK_INFO_EXAMPLES: "$bj i 1011",
            BLACKJACK_LEAVE_DESCRIPTION: "Leave game",
            BLACKJACK_LEAVE_USAGE: "$blackjack leave [ID]",
            BLACKJACK_LEAVE_EXAMPLES: "$bj out 1011",

            BLACKJACK_JOIN_ERR_GAME_STARTED: `${e.error} | Game started!`,
            BLACKJACK_TITLE: "Blackjack",
            BLACKJACK_LIST_TITLE: (guild) => `${guild}'s blackjack games`,
            BLACKJACK_MINE_TITLE: (user) => `${user}'s blackjack games`,
            BLACKJACK_ERR_GAME_NOT_FOUND: "Game not found",
            BLACKJACK_ERR_INVALID_ID: "Invalid game ID",
            BLACKJACK_JOIN_ERR_ALREADY: `${e.error} | You've already joined this game before`,
            BLACKJACK_LIST_NO_GAME: `No games to show`,
            BLACKJACK_START_ERR_NOT_HOST: `${e.error} | Only host can start game`,
            BLACKJACK_START_ERR_ALONE: `${e.error} | You cannot play alone in PvP game!`,
            BLACKJACK_END: "Blackjack ended",
            BLACKJACK_START: "Blackjack started",
            BLACKJACK_RESULT_SUPER: "Super Blackjack",
            BLACKJACK_RESULT_BLACKJACK: "Blackjack",
            BLACKJACK_RESULT_HIGH_FIVE: "High-five",
            BLACKJACK_RESULT_BUST: "Bust",
            BLACKJACK_HIT_OR_STAND: (hit, stand) => `React ${hit} to take more card or ${stand} to finish`,
            BLACKJACK_YOUR_HAND: "Your hand",
            BLACKJACK_LEAVE: (user, id) => `**${user}** left blackjack ID \`${id}\``,
            BLACKJACK_NEW_ERR_MINBET: (min) => `${e.error} | Minimum bet: **${min} catnip**`,

            /** LIENG */
            LIENG_DESCRIPTION: "Blackjack PvP",
            LIENG_USAGE: "",
            LIENG_EXAMPLES: "",
            LIENG_JOIN_DESCRIPTION: "Join game",
            LIENG_JOIN_USAGE: "$lieng join [ID]",
            LIENG_JOIN_EXAMPLES: "$l in 1011",
            LIENG_LIST_DESCRIPTION: "List waiting blackjack games in server",
            LIENG_LIST_USAGE: "$lieng list",
            LIENG_LIST_EXAMPLES: "$l ls",
            LIENG_MINE_DESCRIPTION: "List your waiting blackjack games",
            LIENG_MINE_USAGE: "$lieng mine",
            LIENG_MINE_EXAMPLES: "$l mine",
            LIENG_NEW_DESCRIPTION: "Create new game. Adding \`up\` will create **Lieng To**",
            LIENG_NEW_USAGE: "$lieng new [bet]\n$lieng new [bet] up",
            LIENG_NEW_EXAMPLES: "$l n 5000\n$l n 5000 up",
            LIENG_START_DESCRIPTION: "Start game",
            LIENG_START_USAGE: "$lieng start [ID]",
            LIENG_START_EXAMPLES: "$l s 1011",
            LIENG_INFO_DESCRIPTION: "Game info",
            LIENG_INFO_USAGE: "$lieng info [ID]",
            LIENG_INFO_EXAMPLES: "$l i 1011",
            LIENG_LEAVE_DESCRIPTION: "Leave game",
            LIENG_LEAVE_USAGE: "$lieng leave [ID]",
            LIENG_LEAVE_EXAMPLES: "$l out 1011",
            LIENG_JOIN_ERR_GAME_STARTED: `${e.error} | Game started!`,
            LIENG_TITLE: "Lieng",
            LIENG_LIST_TITLE: (guild) => `${guild}'s lieng games`,
            LIENG_MINE_TITLE: (user) => `${user}'s lieng games`,
            LIENG_ERR_GAME_NOT_FOUND: "Game not found",
            LIENG_JOIN_ERR_ALREADY: `${e.error} | You've already joined this game before`,
            LIENG_LIST_NO_GAME: `No games to show`,
            LIENG_START_ERR_NOT_HOST: `Only host can start game`,
            LIENG_START_ERR_ALONE: `${e.error} | You cannot play alone in PvP game!`,
            LIENG_END: "Lieng ended",
            LIENG_START: "Lieng started",
            LIENG_RESULT_TRIPLE: "Triple",
            LIENG_RESULT_ROW: "Row",
            LIENG_RESULT_ROYAL: "Royal",
            LIENG_YOUR_HAND: "Your hand",
            LIENG_LEAVE: (user, id) => `${user} left lieng ID \`${id}\``,
            LIENG_NEW_ERR_MINBET: (min) => `${e.error} | Minimum bet: **${min} catnip**`,
            LIENG_SHUFFLING: `${e.loading} | Shuffling the cards`,
            LIENG_UP_AWAIT: (game, user, min, max, time) => `**Lieng** | \`${game}\`\n${user}, your turn\nEnter the amount (min: \`${clearifyNumber(min)}\`, max: \`${clearifyNumber(max)}\`) to up or \`sur\` to surrender! (${time}s)`,
            LIENG_SUR: (user) => `**${user}** surrendered`,
            LIENG_ABORT: (user) => `**${user}** aborted`,
            LIENG_UP_DESC: (user, amount) => `**${user}** up **${clearifyNumber(amount)}**`,

            /** AVATAR */
            AVATAR_DESCRIPTION: "Show user avatar",
            AVATAR_USAGE: "$avatar [search]",
            AVATAR_EXAMPLES: "$avt @komatsu#7447\n$avt komatsu\n$avt 436520860254470156\n$avt koma\n$avt 7447",
            AVATAR_SEARCH_TITLE: (key) => `Searching for: ${key}`,
            AVATAR_SEARCH_DESC: `Enter the number before that matched user`,

            /** INVISIBLE */
            INVISIBLE_DESCRIPTION: "Toggle invisible mode",
            INVISIBLE_USAGE: "$invisible",
            INVISIBLE_EXAMPLES: "$invi",

            /** INVISIBLE */
            PICK_DESCRIPTION: "Pick from options (serprate by `,`) or max",
            PICK_USAGE: "$pick [option_1, option_2,...]\n$pick [max]",
            PICK_EXAMPLES: "$pick a,b,c\n$pick 999",

            /** MUTE */
            MUTE_LOG: (user, tomute, time) => `**${user}** muted **${tomute}** for **${this.convertMs(time)}**`,

            /** ITEM */
            ITEM_DESCRIPTION: "Items in shop (`Sxxx`) and inventory (`Uxxx`)",
            ITEM_CREATE_DESCRIPTION: "Create item",
            ITEM_CREATE_USAGE: "$item create [name]",
            ITEM_CREATE_EXAMPLES: "$item create orayaki",
            ITEM_EDIT_DESCRIPTION: "Edit item",
            ITEM_EDIT_USAGE: "$item edit [field] [value]",
            ITEM_EDIT_EXAMPLES: "$item edit price 5000",
            ITEM_DELETE_DESCRIPTION: "Delete item",
            ITEM_DELETE_USAGE: "$item delete [ID]",
            ITEM_DELETE_EXAMPLES: "$item del s001",
            ITEM_INFO_DESCRIPTION: "Item info",
            ITEM_INFO_USAGE: "$item info [ID]",
            ITEM_INFO_EXAMPLES: "$item info s001",
            ITEM_USE_DESCRIPTION: "Use item",
            ITEM_USE_USAGE: "$item use [ID] [quantity]",
            ITEM_USE_EXAMPLES: "$item use s001 4",
            ITEM_BUY_DESCRIPTION: "Buy item",
            ITEM_BUY_USAGE: "$buy [ID] [quantity]",
            ITEM_BUY_EXAMPLES: "$buy s001 5",
            ITEM_INVENTORY_DESCRIPTION: "Your items. Find all or match with `search`",
            ITEM_INVENTORY_USAGE: "$inventory (search)",
            ITEM_INVENTORY_EXAMPLES: "$inv\n$inv oraya",
            ITEM_SHOP_DESCRIPTION: "Shop items. Find all or match with `search`",
            ITEM_SHOP_USAGE: "$shop (search)",
            ITEM_SHOP_EXAMPLES: "$shop\n$shop oraya",

            ITEM_CREATE_ERR_EXIST: (name) => `${e.error} | Item **${name}** already exists!`,
            ITEM_CREATE_SUCCESS: (name, id) => `${e.success} | Added new item **${name}**, ID: ${id}`,
            ITEM_ERR_INVALID_ID: (id) => `${e.error} | Invalid item ID: ${id}`,
            ITEM_ERR_ID_NOT_FOUND: (id) => `${e.error} | No item found with ID: ${id}`,
            ITEM_DELETE_SUCCESS: (name, id) => `${e.success} | Removed item **${name}**, ID: ${id}`,            
            ITEM_BUY_ERR_MORE_SPECIFIC: (items) => `Which one?\n${items.map((item) => "`"+item.name+"`").join(", ")}`,
            ITEM_BUY_ERR_MAX_STOCK: (max) => `${e.error} | Maximum stock at time: ${clearifyNumber(max)}`,
            ITEM_BUY_ERR_NOT_ENOUGH_STOCK: (item, stock) => `${e.error} | Not enough stock. Only **${stock}** ${item} left`,
            ITEM_BUY_ERR_ENDED: (item, date) => `${e.error} | **${item}** has stopped selling since **${date}**`,
            ITEM_BUY_ERR_NOT_START: (item, date) => `${e.error} | **${item}** will be sold from **${date}**`,
            ITEM_BUY_ERR_NO_PRICE: (item) => `${e.error} | **${item}** has no price`,
            ITEM_BUY_SUCCESS: (user, item, quantity, price) => `${e.success} | **${user}** bought ${quantity} x **${item}** for **${clearifyNumber(price)} catnip**`,
            ITEM_SEARCH_TITLE: (key) => `Searching items for: ${key}`,

            ITEM_NOT_FOUND: `Item not found`,
            ITEM_LIST_TITLE: `CAT ITEMS`,
            ITEM_DETAIL_TITLE: `CAT ITEM`,
            ITEM_USER_LIST: (user) => `${user}'s Items`,
            ITEM_USE_ERR_ID_NOT_FOUND: (id) => `${e.error} | You do not own any item with ID: ${id}`,
            ITEM_USE_SUCCESS: (user, item, quantity) => `${e.success} | **${user}** used ${quantity} x **${item}**`,

            /** TASK */
            TASK_DESCRIPTION: "Cat tasks and custom tasks for giveaways",
            TASK_CREATE_DESCRIPTION: "Create task",
            TASK_CREATE_USAGE: "$task create [name]",
            TASK_CREATE_EXAMPLES: "$task create Requirement 01",
            TASK_EDIT_DESCRIPTION: "Edit task",
            TASK_EDIT_USAGE: "$task edit [ID] [field] [value]",
            TASK_EDIT_EXAMPLES: "$task edit t001 quantity 50",
            TASK_DELETE_DESCRIPTION: "Delete task",
            TASK_DELETE_USAGE: "$task delete [ID]",
            TASK_DELETE_EXAMPLES: "$task del t001",
            TASK_INFO_DESCRIPTION: "Task info",
            TASK_INFO_USAGE: "$task info [ID]",
            TASK_INFO_EXAMPLES: "$task info t001",
            TASK_MINE_DESCRIPTION: "Your assigned tasks. Find all or match `search`",
            TASK_MINE_USAGE: "$task mine (search)",
            TASK_MINE_EXAMPLES: "$task mine\n$task mine ga",
            TASK_LIST_DESCRIPTION: "Your custom tasks. Find all or match `search`",
            TASK_LIST_USAGE: "$task list (search)",
            TASK_LIST_EXAMPLES: "$task ls",
            TASK_REROLL_DESCRIPTION: "Reroll your tasks",
            TASK_REROLL_USAGE: "$task reroll [type]",
            TASK_REROLL_EXAMPLES: `$task rr daily\n$task rr long\n${e.userPremium} $task rr premium`,

            TASK_CREATE_ERR_MAX_CUSTOM: (max) => `You only have **${max}** custom tasks, try \`edit\` or \`remove\``,
            TASK_CREATE_AWAIT_FORM: (forms, time) => `Please enter the type of your task (\`${time / 1000}s\`)\`\`\`${forms}\`\`\``,
            TASK_CREATE_CANCEL: `Task adding canceled`,
            TASK_CREATE_SUCCESS: (title, id, type, requires, options, supers) => `${e.success} | Added new task **${title}**, ID: ${id}, type: \`${type}\`. See list editable fields:\`\`\`${supers ? 'Supers: ' + supers.join(" ") + '\n' : ''}Require: ${requires.join(" ")}\nOptions: ${options.join(" ")}\`\`\``,
            TASK_ERR_INVALID_ID: (id) => `${e.error} | Invalid task ID: ${id}`,
            TASK_ERR_ID_NOT_FOUND: (id) => `${e.error} | No task found with ID: ${id}`,
            TASK_DELETE_SUCCESS: (title, id) => `${e.success} | Removed task **${title}**, ID: ${id}`,
            TASK_INFO_TITLE: (title) => `**Title**: \`${title}\``,
            TASK_INFO_TIMEOUT: (time) => `**Timeout**: \`${this.convertMs(time)}\``,
            TASK_ERR_NOT_OWNER: (id) => `${e.error} | You do not own task **${id}**`,

            TASK_INFO_ID: (id) => `**ID**: ${id}`,
            TASK_INFO_CREATOR: (user) => `**Creator**: ${user}`,
            TASK_INFO_TYPE: (type) => `**Type**: ${type}`,
            TASK_INFO_RANDOM: (random) => `**Random assign**: \`${random}\``,
            TASK_INFO_REQUIREMENT: `Requirements`,
            TASK_INFO_REWARD: `Rewards`,
            TASK_INFO_GUILD: (guild) => `**Server**: ${guild}`,

            TASK_PROGRESS: (require, progress) => `• Progress: \`${clearifyNumber(progress)}/${clearifyNumber(require)}\``,
            TASK_DESC_SEND: (channels, allowcontain, content, require) => `• Send \`${require}\` message(s) ${allowcontain ? 'contains ' : ''}${content ? " `" + content + "`" : ''} ${channels.length ? `to channel(s) ` + channels.join(' and/or ') : ''}`,
            TASK_DESC_VOICE: (channels, guild, require) => `• Stay in voice channel(s) ${channels ? channels.join(' and/or ') + " " : ''}of server **${guild}** for \`${this.convertMs(require*60*1000)}\``,
            TASK_DESC_REACT: (emojis, link, require) => `• React emoji(s) ${emojis.length ? emojis.join(' and/or ') + ' ' : ''}to [message](${link}) for  \`${require}\` time(s)`,
            TASK_DESC_COLLECT_CATNIP: (commands, exchange, farm, require) => `• Collect \`${clearifyNumber(require)}\` catnip${commands.length ? ` by command(s) \`${commands.join('\` and/or \`')}\`` : ''}${exchange ? ` by \`exchange\`` : ''}${farm ? ` by \`farm\`` : ''}`,
            TASK_DESC_SPEND_CATNIP: (commands, require) => `• Spend \`${clearifyNumber(require)}\` catnip${commands.length ? ` with command(s) \`${commands.join('\` and/or \`')}\`` : ''}`,
            TASK_DESC_HAS_CATNIP: (require) => `• Has \`${clearifyNumber(require)}\` catnip`,
            TASK_DESC_MENTION: (users, require) => `• Mention user(s) ${users.length ? users.join(' and/or ') + ' ' : ''}for \`${require}\` time(s)`,
            TASK_DESC_MENTIONED: (users, require) => `• Be mentioned ${users.length ? 'by ' + users.join(' and/or ') + ' ' : ''}for \`${require}\` time(s)`,
            TASK_DESC_COMMAND: (commands, users, require) => `• Use command(s) ${commands.length ? '\`' + commands.join('\` and/or \`') + '\`' : ''} ${users.length ? 'on ' + users.join(' and/or ') + ' ' : ''}for \`${require}\` time(s)`,
            TASK_DESC_COMMANDED: (commands, users, require) => `• Has user(s) ${users.length ? users.join(' and/or ') + ' ' : ''} used command(s) ${commands.length ? '\`' + commands.join('\` and/or \`') + '\`' : ''}  on you for \`${require}\` time(s)`,
            TASK_DESC_ROLE: (roles, guild) => `• Has role ${roles.map(r => "**"+r+"**").join(' and/or ')} in server **${guild}**`,
            TASK_DESC_COLLECT_ITEM: (emoji, name, require) => `• Collect \`${(require || '').toString().padStart(2, '0')}\` **${emoji} ${name}**`,
            TASK_DESC_HAS_ITEM: (emoji, name, require) => `• Has \`${(require || '').toString().padStart(2, '0')}\` **${emoji} ${name}**`,
            TASK_DESC_HAS_GUILD: (guild, before, after) => `• Join server **${guild}**${before ? ` before \`${before}\`` : ''}${before && after ? ' and ' : ''}${after ? ` after \`${after}\`` : ''}`,

            TASK_DETAIL_TITLE: `TASK DETAIL`,
            TASK_EDIT_ERR_ITEM_NO_OPTION: (OPTIONS) => `${e.error} | No option provided. Try ${OPTIONS.map((p) => "`" + p + "`").join(", ")}`,
            TASK_EDIT_ERR_CMD_NOT_FOUND: (cmd) => `${e.error} | Command \`${cmd}\` not found`,
            TASK_EDIT_ERR_ITEM_MISSING_ITEMID_OR_QUANTITY: `${e.error} | Missing item ID or quantity`,
            TASK_EDIT_ERR_ITEM_INVALID_QUANTITY: (quantity) => `${e.error} | Invalid item quantity: ${quantity}`,
            TASK_EDIT_ERR_CHANNEL_NOT_FOUND: `${e.error} | Channel not found`,
            TASK_EDIT_ERR_ITEM_NOT_FOUND: (id) => `${e.error} | Item \`${id}\` not found`,
            TASK_EDIT_ERR_ADD_ITEM_NOT_MATCH: (current) => `${e.error} | Current item is: ${current}!`,
            TASK_EDIT_ERR_REMOVE_ITEM_NOT_MATCH: (current) => `${e.error} | Current item is: ${current}!`,
            TASK_SEARCH_TITLE: (key) => `Searching tasks for: ${key}`,
            TASK_LIST_TITLE: `CAT TASKS`,
            TASK_NOT_FOUND: `Task not found`,
            INVALID_MSG_LINK: `Invalid message link`,
            TASK_USER_LIST: (user) => `${user}'s Tasks`,
            TASK_ERR_MISSING_REQUIRE_FIELD: (id, field) => `${e.error} | Task **${id}** missing required field: \`${field}\``,
            TASK_REROLL_ERR_INVALID_TYPE: (types) => `${e.error} | Invalid task type. Try ${types.map((t) => "`" + t + "`").join(", ")}`,
            TASK_REROLL_SUCCESS: (type) => `${e.success} | Rerolled a \`${type}\` task!`,
            TASK_REROLL_ERR_DONE: `${e.error} | You can't reroll a finished task, just wait for the next one!`,
            TASK_DONE_REWARD: (user, task, reward) => `${e.success} | **${user}**, you've finished task **${task}** and received **${reward}**`,

            /** GIVEAWAY */
            GIVEAWAY_DESCRIPTION: `Giveaways with requirements`,
            GIVEAWAY_START_DESCRIPTION: "Create and start new giveaway. For requirements, you need to create task first!",
            GIVEAWAY_START_USAGE: `$giveaway start [duration] [winners] [title]\n${e.userPremium} $giveaway start [duration] [winners] [--taskID] [title]`,
            GIVEAWAY_START_EXAMPLES: `$ga s 12h 3w One month Nitro classic\n${e.userPremium} $ga s 5d 2w --5 One month Nitro classic`,
            GIVEAWAY_LIST_DESCRIPTION: "List of ongoing giveaways in the server or search requirements process by giveaway's title",
            GIVEAWAY_LIST_USAGE: "$giveaway list\n$giveaway [title]",
            GIVEAWAY_LIST_EXAMPLES: "$ga ls\n$ga Nitro 01",
            GIVEAWAY_REQUIREMENT_DESCRIPTION: "List of GA's requirements you've joined",
            GIVEAWAY_REQUIREMENT_USAGE: "$giveaway require [title]",
            GIVEAWAY_REQUIREMENT_EXAMPLES: "$ga req Nitro",
            GIVEAWAY_CANCEL_DESCRIPTION: "Cancel a giveaway",
            GIVEAWAY_CANCEL_USAGE: "$giveaway cancel [message ID]",
            GIVEAWAY_CANCEL_EXAMPLES: "$ga cc 676481304556077056",
            GIVEAWAY_END_DESCRIPTION: "End a giveaway",
            GIVEAWAY_END_USAGE: "$giveaway end [message ID]",
            GIVEAWAY_END_EXAMPLES: "$ga end 676481304556077056",
            GIVEAWAY_REROLL_DESCRIPTION: "Reroll a giveaway",
            GIVEAWAY_REROLL_USAGE: "$giveaway reroll [message ID]",
            GIVEAWAY_REROLL_EXAMPLES: "$ga rr 676481304556077056",

            GIVEAWAY_ERR_PERMISSION: (role, perm) => `${e.error} | You need permission \`${perm}\` or role \`${role}\` to use this command!`,
            GIVEAWAY_ERR_NO_GA: `There's no giveaways running in this server`,
            GIVEAWAY_LIST_TITLE: (guild) => `${guild}'s ongoing giveaways`,
            GIVEAWAY_NOT_FOUND: `${e.error} | Giveaway not found`,
            GIVEAWAY_ENDED: `${e.error} | Giveaway ended`,
            GIVEAWAY_END_ERR_PERMISSION: `${e.error} | Only admins can end Giveaways hosted by others`,
            GIVEAWAY_END_ERR_GUILD_NOT_MATCH: (msg) => `${e.error} | Giveaway \`${msg}\` not hosted in this server!`,
            GIVEAWAY_WINNERS: (winners) => `Winner(s): ${winners}`,
            GIVEAWAY_NOT_RUNNING: `${e.error} | This giveaway is not running!`,
            GIVEAWAY_CANCELED_TITLE: `**GIVEAWAY CANCELED**`,
            GIVEAWAY_ENDED_TITLE: `**GIVEAWAY ENDED**`,
            GIVEAWAY_STARTED_TITLE: `**GIVEAWAY STARTED**`,
            GIVEAWAY_NOT_ENDED: `${e.error} | This giveaway is running!`,
            GIVEAWAY_HOST: (host) => `Host: ${host}`,
            GIVEAWAY_REQUIREMENTS: `Requirements`,
            GIVEAWAY_START_AWAIT_ADD_TASK: `Do you wanna assign requirement to this giveaway?`,
            GIVEAWAY_START_AWAIT_TASK_DESC: (descs) => `Please enter the type of your task...\`\`\`${descs}\`\`\`\``,
            GIVEAWAY_START_TASK_CANCEL: `No task found`,
            GIVEAWAY_START_ERR_INVALID_QUANTITY: `${e.error} | Invalid number of winners`,
            GIVEAWAY_START_ERR_INVALID_TITLE: `${e.error} | Invalid title`,
            GIVEAWAY_ADD_TASK_ERR_NOT_PREMIUM: `${e.error} | Giveaways with requirements only available for **Premium User**.`,
            GIVEAWAY_REACT_DESC: (emoji) => `React ${emoji} to join`,
            GIVEAWAY_FOOTER: (quantity) => `${quantity} win${parseInt(quantity) > 1 ? 's' : ''} | Rolls at`,
            GIVEAWAY_FOOTER_REQ: (quantity, prefix) => `${quantity} winner${parseInt(quantity) > 1 ? 's' : ''} | Rolls at`,
            GIVEAWAY_FOOTER_ENDED: (quantity) => `Rolled ${quantity} winner${parseInt(quantity) > 1 ? 's' : ''} at`,
            GIVEAWAY_NO_WINNERS: (title, host) => `Giveaway **${title}** hosted by ${host} ended, no winners`,
            GIVEAWAY_CONGRATZ: (winners, title, host) => `Congratz ${winners}, you won the giveaway **${title}** hosted by ${host}`,
            GIVEAWAY_CANCEL: (title, host) => `Giveaway **${title}** hosted by ${host} canceled`,
            GIVEAWAY_JUMP: (url) => `**[Jump to giveaway](${url})**`,
            GIVEAWAY_REROLL_MSG: (winner) => `New winner: ${winner}`,

            /* ITEM USAGES */
            CREATED_ROLE: (name, color, position) => `Role **${name}** created | Color: \`${color}\`, Position \`${position}\``,

            /** LOTTO */
            LOTTO_DESCRIPTION: "Buy tickets and win Jackpot.",
            LOTTO_USAGE: "$lotto",
            LOTTO_EXAMPLES: "$lt",

            /** LUDO */
            LUDO_DESCRIPTION: "Ludo. (*creating*)",
            LUDO_USAGE: "$ludo",
            LOTTO_EXAMPLES: "$ld",

            /** MEDIA */
            MEDIA_DESCRIPTION: "Random media pictures and gifs",
            MEDIA_USAGE: "$meo\n$xinh\n$food\n$meme\n$sexy\n$zai",
            MEDIA_EXAMPLES: "$meo\n$xinh\n$food\n$meme\n$sexy\n$zai",


            /** UPGRADE */
            UPGRADE_DESCRIPTION: "Upgrade user/guild to premium",
            UPGRADE_USAGE: "$upgrade [target ID] [months]",
            UPGRADE_EXAMPLES: "$upgrade 436520860254470156 3\n$upgrade 511577620429668355 6",
            UPGRADE_ERR_INVALID_MONTH: `${e.error} | Invalid number of months`,

            /** DOWNGRADE */
            DOWNGRADE_DESCRIPTION: "Downgrade user/guild from premium",
            DOWNGRADE_USAGE: "$downgrade [target ID] [months]",
            DOWNGRADE_EXAMPLES: "$downgrade 436520860254470156 1\n$downgrade 436520860254470156 1",

            /** FEEDBACK */
            FEEDBACK_DESCRIPTION: "Send feedback, report bugs. Attach images to make it more clear!",
            FEEDBACK_USAGE: "$feedback [content]",
            FEEDBACK_EXAMPLES: "$fb I found an error with command high. Take a look at these images!",
            FEEDBACK_MISSING_CONTENT: "missing feedback content!",
            
            /** PREMIUM */
            PREMIUM_DESCRIPTION: "Check premium status of member and server",
            PREMIUM_USAGE: "$premium []",
            PREMIUM_EXAMPLES: "$downgra",
            PREMIUM_HELP_UPGRADE_TITLE: "Upgrade Premium",
            PREMIUM_HELP_UPGRADE_DESC: `**Upgrade**\n\t• [Donate Patreon](${l.patreon})\n\t• Other ways - contact our staffs in **[Cat](${l.supportChannelInvite})** for more details`,
            ERR_NOT_PREMIUM_USER: `You need to upgrade **User Premium** to use this command with no limits. Try command \`premium\` for more details.`,
            ERR_NOT_PREMIUM_GUILD: `This server needs to upgrade **Guild Premium** so that members can use this command with no limits. Try command \`premium\` for more details.`,
            PREMIUM_STATUS_AUTHOR: (user) => `${user}'s premium status`,
            PREMIUM_USER_DESC: (benefits, duration, point) => `**User Premium** (${duration}, ${point} points)\n${benefits.map((b) => "\t• `" + b + "`").join("\n")}`,
            PREMIUM_GUILD_DESC: (benefits, duration) => `**Guild Premium** (${duration})\n${benefits.map((b) => "\t• `" + b + "`").join("\n")}`,

            /** ROLE */
            ROLE_DESCRIPTION: "Role commands",
            ROLE_USAGE: "",
            ROLE_EXAMPLES: "",
            ROLE_POSITION_DESCRIPTION: "Check role position",
            ROLE_POSITION_USAGE: "$role position [@role] [position]",
            ROLE_POSITION_EXAMPLES: "$role pos @dev 10",
            ROLE_POSITION_ERR_INVALID_POS: "Invalid position",

            /** ECONOMY */
            ECONOMY_DESCRIPTION: "Total balance",
            ECONOMY_USAGE: "$economy",
            ECONOMY_EXAMPLES: "$eco",
            ECONOMY_TOTAL: (total) => `Cat economy: **${clearifyNumber(total)} catnip**`,

            /** COMMAND */
            COMMAND_DESCRIPTION: "Disable, enable commands",
            COMMAND_USAGE: "$command disable\n$command enable",
            COMMAND_EXAMPLES: "$cmd d\n$cmd e",

            /** DISABLE */
            COMMAND_DISABLE_DESCRIPTION: "Disable commands (or all) in current channel, commands seperated by comma `,`\nUse `--g` to disable commands in server",
            COMMAND_DISABLE_USAGE: "$command disable (--g) [command]",
            COMMAND_DISABLE_EXAMPLES: "$cmd d say, high\n$cmd d --g voice lock\n$cmd d all",
            COMMAND_DISABLE_CMD_ALREADY: (isGuild, cmds) => `Command(s) ${cmds.map((c) => "`" + c + "`").join(", ")} disabled already in this ${isGuild ? 'server' : 'channel'}`,
            COMMAND_DISABLE_SUCCESS: (isGuild, cmds) => `${e.success} | Disabled command(s) ${cmds.map((c) => "`" + c + "`").join(", ")} in this ${isGuild ? 'server' : 'channel'}`,
            COMMAND_DISABLE_ALL_SUCCESS: (isGuild) => `${e.success} | Disabled all commands in this ${isGuild ? 'server' : 'channel'}`,

            /** ENABLE */
            COMMAND_ENABLE_DESCRIPTION: "Enable commands (or all) in current channel, commands seperated by comma `,`.\nUse `--g` to enable commands in server",
            COMMAND_ENABLE_USAGE: "$command enable (--g) [command]",
            COMMAND_ENABLE_EXAMPLES: "$cmd e say, high\n$cmd e --g voice lock$cmd e all",
            COMMAND_ENABLE_CMD_ALREADY: (isGuild, cmds) => `Command(s) \`${cmds.map((c) => "`" + c + "`").join(", ")}\` not disabled in this ${isGuild ? 'server' : 'channel'}`,
            COMMAND_ENABLE_SUCCESS: (isGuild, cmds) => `${e.success} | Enabled command(s) \`${cmds.map((c) => "`" + c + "`").join(", ")}\` in this ${isGuild ? 'server' : 'channel'}`,
            COMMAND_ENABLE_ALL_SUCCESS: (isGuild) => `${e.success} | Enable all commands in this ${isGuild ? 'server' : 'channel'}`,

            /** BATTLE */

            /** CHARACTER */
            CHARACTER_DESCRIPTION: "Claim, search, reroll, upgrade and check your characters",
            CHARACTER_USAGE: "$character",
            CHARACTER_EXAMPLES: "$c",

            CHARACTER_CLAIM_DESCRIPTION: "Claim a character",
            CHARACTER_CLAIM_USAGE: "$character claim",
            CHARACTER_CLAIM_EXAMPLES: "$c c",
            CHARACTER_REROLL_DESCRIPTION: "Reroll a random character",
            CHARACTER_REROLL_USAGE: "$character reroll [ID ID ID]",
            CHARACTER_REROLL_EXAMPLES: "$c rr 23 24 25\n$c rr ",
            CHARACTER_UPGRADE_DESCRIPTION: "Upgrade your character",
            CHARACTER_UPGRADE_USAGE: "$character upgrade [charID] [gemID] [quantity]",
            CHARACTER_UPGRADE_EXAMPLES: "$c up 2 3 5",
            CHARACTER_MINE_DESCRIPTION: "Check your characters",
            CHARACTER_MINE_USAGE: "$character mine (ID/name)",
            CHARACTER_MINE_EXAMPLES: "$c me\n$c 110\n$c nobi",
            CHARACTER_INFO_DESCRIPTION: "Check a character's info",
            CHARACTER_INFO_USAGE: "$character info [ID/name]",
            CHARACTER_INFO_EXAMPLES: "$c i nobita",
            CHARACTER_SEARCH_DESCRIPTION: "Search for characters",
            CHARACTER_SEARCH_USAGE: "$character search [name]",
            CHARACTER_SEARCH_EXAMPLES: "$c ls nobi",
            CHARACTER_CREATE_DESCRIPTION: "Create a character",
            CHARACTER_CREATE_USAGE: "$character create [name]",
            CHARACTER_CREATE_EXAMPLES: "$c add nobita",
            CHARACTER_DELETE_DESCRIPTION: "Delete a character",
            CHARACTER_DELETE_USAGE: "$character delete [ID]",
            CHARACTER_DELETE_EXAMPLES: "$c del 1eeeeeeeeeeeeee0",
            CHARACTER_EDIT_DESCRIPTION: "Edit a character",
            CHARACTER_EDIT_USAGE: "$character edit [ID] [field] [value]",
            CHARACTER_EDIT_EXAMPLES: "$c edit 1eeeeeeeeeeeeeee0 spawnrate 0.5",
            CHARACTER_USE_DESCRIPTION: "Use a character",
            CHARACTER_USE_USAGE: "$character use [ID]",
            CHARACTER_USE_EXAMPLES: "$c use 20",
            CHARACTER_RENAME_DESCRIPTION: "Rename a character",
            CHARACTER_RENAME_USAGE: "$character rename [ID] [name]",
            CHARACTER_RENAME_EXAMPLES: "$c rn 20 My little boi",

            CHARACTER_CREATE_ERR_EXIST: (name) => `${e.error} | Character **${name}** already exists!`,
            CHARACTER_CREATE_SUCCESS: (name, id) => `${e.success} | Added new character **${name}**, ID: **${id}**`,
            CHARACTER_ERR_INVALID_NAME: (name) => `${e.error} | Invalid character name: ${name}`,
            CHARACTER_ERR_NOT_FOUND: `${e.error} | Character not found`,
            CHARACTER_DELETE_SUCCESS: (name) => `${e.success} | Deleted character **${name}**`,
            CHARACTER_NOT_FOUND: `Character not found`,
            CHARACTER_LIST_TITLE: `BATTLE CHARACTERS`,
            CHARACTER_DETAIL_TITLE: `BATTLE CHARACTER`,

            CHARACTER_INFO_TYPE: "Gen",
            CHARACTER_INFO_STARS: "Stars",
            CHARACTER_INFO_SPAWN_RATE: "Spawn rate",
            CHARACTER_INFO_SKILL_RATE: "Skill rate",
            CHARACTER_INFO_PUBLIC: `Public`,
            CHARACTER_SEARCH_TITLE: (key) => `Searching characters for: ${key}`,
            CHARACTER_INFO_BASIC_INDEX: "Basic",
            CHARACTER_INFO_EXTEND_INDEX: "Extend",
            CHARACTER_CLAIM_SUCCESS: (user) => `${user} claimed a character`,
            CHARACTER_CLAIM_GUIDE: (prefix) => `Use \`${prefix}help character\` to see list actions`,
            CHARACTER_USER_LIST: (user) => `${user}'s Characters`,
            CHARACTER_REROLL_ERR_INVALID_ID: `${e.error} | Invalid character ID(s)`,
            CHARACTER_REROLL_ERR_NOT_ENOUGH: (char, count) => `${e.error} | Not enough ${count} ${char} to reroll`,
            CHARACTER_REROLL_SUCCESS: (user) => `${user} rerolled a character`,
            CHARACTER_ID_ERR_NOT_FOUND: (ID) => `${e.error} | Character ID ${ID} not found or not enough stock to use`,
            CHARACTER_USE_SUCCESS: (char) => `${e.success} | **${char}** has been set to your main character.`,
            CHARACTER_USE_ALREADY: (gadget) => `**${gadget}** has already been your main character`,
            CHARACTER_RENAME_ERR_TOO_LONG: (max) => `${e.error} | Character's nickname can not be longer than **${max}** character`,
            CHARACTER_RENAME_SUCCESS: (nickname, name) => `${e.success} | Your **${name}** has been named **${nickname}**`,
            
            /** GEM */
            GEM_DESCRIPTION: "Search, sell and check your gems",
            GEM_USAGE: "$gem",
            GEM_EXAMPLES: "$g",

            GEM_SELL_DESCRIPTION: "Sell your gems",
            GEM_SELL_USAGE: "$character sell [ID] [quantity]",
            GEM_SELL_EXAMPLES: "$g sell 3 30",
            GEM_MINE_DESCRIPTION: "Check your gems",
            GEM_MINE_USAGE: "$gem mine (ID/name)",
            GEM_MINE_EXAMPLES: "$g me\n$g 110\n$g nobi",
            GEM_INFO_DESCRIPTION: "Check a gem's info",
            GEM_INFO_USAGE: "$gem info [ID/name]",
            GEM_INFO_EXAMPLES: "$g i offensive",
            GEM_SEARCH_DESCRIPTION: "Search for gems",
            GEM_SEARCH_USAGE: "$gem search [name]",
            GEM_SEARCH_EXAMPLES: "$g ls off",
            GEM_CREATE_DESCRIPTION: "Create a gem",
            GEM_CREATE_USAGE: "$gem create [name]",
            GEM_CREATE_EXAMPLES: "$g add Raw buff Offensive",
            GEM_DELETE_DESCRIPTION: "Delete a gem",
            GEM_DELETE_USAGE: "$gem delete [ID]",
            GEM_DELETE_EXAMPLES: "$g del 1eeeeeeeeeeeeeeeee0",
            GEM_EDIT_DESCRIPTION: "Edit a gem",
            GEM_EDIT_USAGE: "$gem edit [ID] [field] [value]",
            GEM_EDIT_EXAMPLES: "$g edit 1eeeeeeeeeeeeeee0 index 25",
            GEM_USE_DESCRIPTION: "Use a gem",
            GEM_USE_USAGE: "$gem use [ID] (quantity)",
            GEM_USE_EXAMPLES: "$g use 20\n$g use 20 5",

            GEM_CREATE_ERR_EXIST: (name) => `${e.error} | Gem **${name}** already exists!`,
            GEM_CREATE_SUCCESS: (name, id) => `${e.success} | Added new gem **${name}**, ID: **${id}**`,
            GEM_ERR_NOT_FOUND: `${e.error} | Gem not found`,
            GEM_DELETE_SUCCESS: (name) => `${e.success} | Deleted gem **${name}**`,
            GEM_NOT_FOUND: `Gem not found`,
            GEM_LIST_TITLE: `BATTLE GEMS`,
            GEM_DETAIL_TITLE: `BATTLE GEM`,
            GEM_INFO_SELL_PRICE: "Sell",
            GEM_INFO_TYPE: "Type",
            GEM_INFO_SPAWN_RATE: "Spawn rate",
            GEM_INFO_PUBLIC: "Public",
            GEM_INFO_INDEX: "Bonus index",
            GEM_INFO_SUCCESS_RATE: "Success rate",
            GEM_SEARCH_TITLE: (key) => `Searching gems for: ${key}`,
            GEM_USER_LIST: (user) => `${user}'s Gems`,
            GEM_SELL_ERR_INVALID_ID: `${e.error} | Invalid gem ID(s)`,
            GEM_SELL_ERR_NOT_ENOUGH: `${e.error} | Not enough gems to sell`,
            GEM_SELL_ERR_TYPE_INVALID: `${e.error} | Invalid gem type(s)`,
            GEM_SELL_TYPE_SUCCESS: (user, sells, total) => `${e.success} | **${user}** sold ${Object.keys(sells).map((type) => e.indexType[type] + "**x" + clearifyNumber(sells[type]) + "**").join(", ")} for total of **${clearifyNumber(total)}** ${e.dorayaki}`,
            GEM_SELL_ID_SUCCESS: (user, uGem, quantity, price) => `${e.success} | **${user}** sold **${clearifyNumber(quantity)}** x ${e.indexType[uGem.gem.type]} **${uGem.gem.name}** for **${clearifyNumber(price)}** ${e.dorayaki}`,
      
            GEM_ID_ERR_NOT_FOUND: (ID) => `${e.error} | Gem ID ${ID} not found or not enough stock`,
            GEM_EQUIP_SUCCESS: (gem) => `${e.success} | **${gem}** has been equiped`,
            GEM_EQUIP_ERR_MAX: (max) => `${e.error} | Your **${max}** gem positions has been filled, try to \`unequip\` first`,
            GEM_EQUIP_ALREADY: (gem) => `${e.error} | **${gem}** has already equiped`,
            GEM_UNEQUIP_NOT_EQUIP: (gem) => `${e.error} | **${gem}** hasn't equiped yet`,
            GEM_UNEQUIP_SUCCESS: (gem) => `${e.success} | **${gem}** has been unequiped`,

            /** UPGRADE */
            UPGRADE_ERR_INVALID_TYPE: `${e.error} | Invalid gem type`,
            UPGRADE_ERR_INDEX_ALREADY: (target, type, oldBonus) => `Your **${target}** has been upgraded ${e.indexType[type]}**+${oldBonus}** already, try to use a higher index gem!`,
            UPGRADE_SUCCESS: (target, type, up, times, rate) => `${e.success} | Congratz!!! Your **${target}** has been upgraded successfully ${e.indexType[type]}**+${up}** at rate \`${Math.floor(rate*10000)/100}%\` after **${times}** ${times == 1 ? 'try' : 'tries'}!`,
            UPGRADE_FAILS: (rate) => `Good luck next time! Rate: \`${Math.floor(rate*10000)/100}%\``,

            /** GADGET */
            GADGET_DESCRIPTION: "Search, sell, combine, equip, upgrade and check your gadgets",
            GADGET_USAGE: "$gadget",
            GADGET_EXAMPLES: "$g",

            GADGET_SELL_DESCRIPTION: "Sell your gadget",
            GADGET_SELL_USAGE: "$gadget sell [ID] [quantity]",
            GADGET_SELL_EXAMPLES: "$gg sell 3 30",
            GADGET_COMBINE_DESCRIPTION: "Combine your 4 gadgets and get higher star gadget",
            GADGET_COMBINE_USAGE: "$gadget combine [ID] [quantity]",
            GADGET_COMBINE_EXAMPLES: "$gg cb 23 all",
            GADGET_UPGRADE_DESCRIPTION: "Upgrade your gadget",
            GADGET_UPGRADE_USAGE: "$gadget upgrade [gadgetID] [gemID] [quantity]",
            GADGET_UPGRADE_EXAMPLES: "$gg up offensive 3",
            GADGET_MINE_DESCRIPTION: "Check your gadgets",
            GADGET_MINE_USAGE: "$gadget mine (ID/name)",
            GADGET_MINE_EXAMPLES: "$gg me\n$g 110\n$g defense",
            GADGET_INFO_DESCRIPTION: "Check a gadget's info",
            GADGET_INFO_USAGE: "$gadget info [ID/name]",
            GADGET_INFO_EXAMPLES: "$gg i Raw Defense Buff",
            GADGET_SEARCH_DESCRIPTION: "Search for gadgets",
            GADGET_SEARCH_USAGE: "$gadget search [name]",
            GADGET_SEARCH_EXAMPLES: "$gg ls def",
            GADGET_CREATE_DESCRIPTION: "Create a gadget",
            GADGET_CREATE_USAGE: "$gadget create [name]",
            GADGET_CREATE_EXAMPLES: "$gg add Raw Defense Buff",
            GADGET_DELETE_DESCRIPTION: "Delete a gadget",
            GADGET_DELETE_USAGE: "$gadget delete [ID]",
            GADGET_DELETE_EXAMPLES: "$gg del 1eeeeeeeeeeeeee0",
            GADGET_EDIT_DESCRIPTION: "Edit a gadget",
            GADGET_EDIT_USAGE: "$gadget edit [ID] [field] [value]",
            GADGET_EDIT_EXAMPLES: "$gg edit 1eeeeeeeeeeeeeee0 skillflags BONUS_1_TURN FIRE_ALL_ENEMIES",
            GADGET_EQUIP_DESCRIPTION: "Equip a gadget",
            GADGET_EQUIP_USAGE: "$gadget equip [ID]",
            GADGET_EQUIP_EXAMPLES: "$gg use 20",
            GADGET_UNEQUIP_DESCRIPTION: "Unequip a gadget",
            GADGET_UNEQUIP_USAGE: "$gadget unequip [ID]",
            GADGET_UNEQUIP_EXAMPLES: "$gg unuse 20",
            GADGET_RENAME_DESCRIPTION: "Rename a gadget",
            GADGET_RENAME_USAGE: "$gadget rename [ID] [name]",
            GADGET_RENAME_EXAMPLES: "$gg rn 20 Heliii Copterrr",

            GADGET_CREATE_ERR_EXIST: (name) => `${e.error} | Gadget **${name}** already exists!`,
            GADGET_CREATE_SUCCESS: (name, id) => `${e.success} | Added new gadget **${name}**, ID: **${id}**`,
            GADGET_ERR_NOT_FOUND: `${e.error} | Gadget not found`,
            GADGET_DELETE_SUCCESS: (name) => `${e.success} | Deleted gadget **${name}**`,
            GADGET_NOT_FOUND: `Gadget not found`,
            GADGET_LIST_TITLE: `BATTLE GADGETS`,
            GADGET_DETAIL_TITLE: `BATTLE GADGET`,
            GADGET_INFO_SELL_PRICE: "Sell",
            GADGET_INFO_TYPE: "Type",
            GADGET_INFO_SPAWN_RATE: "Spawn rate",
            GADGET_INFO_SKILL_RATE: "Skill rate",
            GADGET_INFO_PUBLIC: "Public",
            GADGET_SEARCH_TITLE: (key) => `Searching gadgets for: ${key}`,
            GADGET_USER_LIST: (user) => `${user}'s Gadgets`,
            GADGET_SELL_ERR_INVALID_ID: `${e.error} | Invalid gadget ID(s)`,
            GADGET_SELL_ERR_NOT_ENOUGH: `${e.error} | Not enough gadgets to sell`,
            GADGET_SELL_ERR_TYPE_INVALID: `${e.error} | Invalid gadget type(s)`,
            GADGET_SELL_TYPE_SUCCESS: (user, sells, total) => `${e.success} | **${user}** sold ${Object.keys(sells).map((type) => e.gadgetType[type] + "**x" + clearifyNumber(sells[type]) + "**").join(", ")} for total of **${clearifyNumber(total)}** ${e.dorayaki}`,
            GADGET_SELL_ID_SUCCESS: (user, uGadget, quantity, price) => `${e.success} | **${user}** sold **${clearifyNumber(quantity)}** x ${e.gadgetType[uGadget.gadget.type]} **${uGadget.gadget.name}** ${generateStars(uGadget.star, e.star)} for **${clearifyNumber(price)}** ${e.dorayaki}`,
            GADGET_COMBINE_ERR_NOT_ENOUGH: (gadget) => `${e.error} | Not enough **${gadget}** to combine`,
            GADGET_COMBINE_ERR_MAX: (gadget, max) => `${e.error} | Your **${gadget}** has reached the maximum **${max}** star`,
            GADGET_COMBINE_SUCCESS: (user, uGadget, quantity) => `${e.success} | **${user}** has combined sucessfully **${clearifyNumber(quantity)}** x ${e.gadgetType[uGadget.gadget.type]} **${uGadget.nickname || uGadget.gadget.name}** ${e.stars[uGadget.star+1]}`,
            GADGET_INFO_EXTEND_INDEX: "Extend",
            GADGET_INFO_BASIC_INDEX: "Basic",
            GADGET_INFO_SKILL: "Skills",
            GADGET_SKILL_DESC: {
                'BONUS_1_TURN': "Get bonus 1 turn"
            },

            GADGET_ID_ERR_NOT_FOUND: (ID) => `${e.error} | Gadget ID ${ID} not found or not enough stock`,
            GADGET_EQUIP_SUCCESS: (gadget) => `${e.success} | **${gadget}** has been equiped`,
            GADGET_EQUIP_ERR_MAX: (max) => `${e.error} | Your **${max}** gadget positions has been filled, try to \`unequip\` first`,
            GADGET_EQUIP_ALREADY: (gadget) => `${e.error} | **${gadget}** has already equiped`,
            GADGET_UNEQUIP_NOT_EQUIP: (gadget) => `${e.error} | **${gadget}** hasn't equiped yet`,
            GADGET_UNEQUIP_SUCCESS: (gadget) => `${e.success} | **${gadget}** has been unequiped`,
            GADGET_RENAME_ERR_TOO_LONG: (max) => `${e.error} | Gadget's nickname can not be longer than **${max}** characters`,
            GADGET_RENAME_SUCCESS: (nickname, name) => `${e.success} | Your **${name}** has been named **${nickname}**`,

            /** WEAPON */
            WEAPON_DESCRIPTION: "Search, auction, unify, equip, upgrade and check your weapons",
            WEAPON_USAGE: "$weapon",
            WEAPON_EXAMPLES: "$wp",

            WEAPON_UNIFY_DESCRIPTION: "Combine your 2 weapons with different elements and get a mixed weapon",
            WEAPON_UNIFY_USAGE: "$weapon unify [ID ID] (quantity)",
            WEAPON_UNIFY_EXAMPLES: "$wp u 23 24\n$wp u 23 24 all",
            WEAPON_AUCTION_DESCRIPTION: "Auction your weapon and get the highest paid",
            WEAPON_AUCTION_USAGE: "$weapon auction [ID] [low price] [high price] (quantity)",
            WEAPON_AUCTION_EXAMPLES: "$wp au 23 100 200\n$wp au 23 100 200 5",
            WEAPON_UPGRADE_DESCRIPTION: "Upgrade your weapon",
            WEAPON_UPGRADE_USAGE: "$weapon upgrade [weaponID] [gemID] [quantity]",
            WEAPON_UPGRADE_EXAMPLES: "$wp up offensive 3",
            WEAPON_MINE_DESCRIPTION: "Check your weapons",
            WEAPON_MINE_USAGE: "$weapon mine (ID/name)\n$weapon mine -el (element)",
            WEAPON_MINE_EXAMPLES: "$wp me\n$wp 110\n$wp sword\n$wp -el fire",
            WEAPON_INFO_DESCRIPTION: "Check a weapon's info",
            WEAPON_INFO_USAGE: "$weapon info [ID/name]",
            WEAPON_INFO_EXAMPLES: "$wp i Fire Sword",
            WEAPON_SEARCH_DESCRIPTION: "Search for weapons",
            WEAPON_SEARCH_USAGE: "$weapon search [name]\n$weapon search -el [element]",
            WEAPON_SEARCH_EXAMPLES: "$wp ls swo\n$wp ls -el earth",
            WEAPON_CREATE_DESCRIPTION: "Create a weapon",
            WEAPON_CREATE_USAGE: "$weapon create [name]",
            WEAPON_CREATE_EXAMPLES: "$wp add Fire Sword",
            WEAPON_DELETE_DESCRIPTION: "Delete a weapon",
            WEAPON_DELETE_USAGE: "$weapon delete [ID]",
            WEAPON_DELETE_EXAMPLES: "$wp del 1eeeeeeeeeeeeee0",
            WEAPON_EDIT_DESCRIPTION: "Edit a weapon",
            WEAPON_EDIT_USAGE: "$wp edit [ID] [field] [value]",
            WEAPON_EDIT_EXAMPLES: "$c edit 1eeeeeeeeeeeeeee0 element fi",
            WEAPON_EQUIP_DESCRIPTION: "Equip a weapon",
            WEAPON_EQUIP_USAGE: "$weapon equip [ID]",
            WEAPON_EQUIP_EXAMPLES: "$wp use 20",
            WEAPON_RENAME_DESCRIPTION: "Rename a weapon",
            WEAPON_RENAME_USAGE: "$weapon rename [ID] [name]",
            WEAPON_RENAME_EXAMPLES: "$wp rn 20 a cute spoon",

            WEAPON_CREATE_ERR_EXIST: (name) => `${e.error} | Weapon **${name}** already exists!`,
            WEAPON_CREATE_SUCCESS: (name, id) => `${e.success} | Added new weapon **${name}**, ID: **${id}**`,
            WEAPON_ERR_INVALID_NAME: (name) => `${e.error} | Invalid weapon name: ${name}`,
            WEAPON_ERR_NOT_FOUND: `${e.error} | Weapon not found`,
            WEAPON_DELETE_SUCCESS: (name) => `${e.success} | Deleted weapon **${name}**`,
            WEAPON_NOT_FOUND: `Weapon not found`,
            WEAPON_LIST_TITLE: `BATTLE WEAPONS`,
            WEAPON_DETAIL_TITLE: `BATTLE WEAPON`,
            WEAPON_INFO_SELL_PRICE: "Sell",
            WEAPON_INFO_TYPE: "Element(s)",
            WEAPON_INFO_SPAWN_RATE: "Spawn rate",
            WEAPON_INFO_SKILL_RATE: "Skill rate",
            WEAPON_INFO_PUBLIC: "Public",
            WEAPON_SEARCH_TITLE: (key) => `Searching weapons for: ${key}`,
            WEAPON_USER_LIST: (user) => `${user}'s Weapons`,
            WEAPON_SELL_ERR_INVALID_ID: `${e.error} | Invalid weapon ID(s)`,
            WEAPON_SELL_ERR_NOT_ENOUGH: `${e.error} | Not enough weapons to sell`,
            WEAPON_SELL_ERR_TYPE_INVALID: `${e.error} | Invalid gadget type(s)`,
            WEAPON_SELL_TYPE_SUCCESS: (user, sells, total) => `${e.success} | **${user}** sold ${Object.keys(sells).map((type) => e.weaponType[type] + "**x" + clearifyNumber(sells[type]) + "**").join(", ")} for total of **${clearifyNumber(total)}** ${e.dorayaki}`,
            WEAPON_SELL_ID_SUCCESS: (user, uWeapon, quantity, price) => `${e.success} | **${user}** sold **${clearifyNumber(quantity)}** x ${e.weaponType[uWeapon.weapon.type]} **${uWeapon.weapon.name}** ${e.weaponLevel[uWeapon.level]} for **${clearifyNumber(price)}** ${e.dorayaki}`,
            WEAPON_UNIFY_ERR_NOT_ENOUGH: `${e.error} | Not enough weapons to unify`,
            WEAPON_UNIFY_ERR_ELEMENT: (weapon) => `${e.error} | Your **${weapon}** has no new elements to unify`,
            WEAPON_UNIFY_SUCCESS: (user, newWeapon, quantity) => `${e.success} | **${user}** has unified sucessfully **${clearifyNumber(quantity)}** ${e.weaponType[newWeapon.el]} **${newWeapon.name}** ${e.weaponLevel["1"]}}`,
            WEAPON_INFO_EXTEND_INDEX: "Extend",
            WEAPON_INFO_BASIC_INDEX: "Basic",

            WEAPON_ID_ERR_NOT_FOUND: (ID) => `${e.error} | Weapon ID ${ID} not found or not enough stock`,
            WEAPON_EQUIP_SUCCESS: (weapon) => `${e.success} | **${weapon}** has been equiped`,
            WEAPON_EQUIP_ALREADY: (weapon) => `${e.error} | **${weapon}** has already equiped`,
            WEAPON_UNEQUIP_NOT_EQUIP: (weapon) => `${e.error} | **${weapon}** hasn't equiped yet`,
            WEAPON_UNEQUIP_SUCCESS: (weapon) => `${e.success} | **${weapon}** has been unequiped`,
            WEAPON_RENAME_ERR_TOO_LONG: (max) => `${e.error} | Weapon's nickname can not be longer than **${max}** characters`,
            WEAPON_RENAME_SUCCESS: (nickname, name) => `${e.success} | Your **${name}** has been named **${nickname}**`,
            UPGRADE_WEAPON_LEVEL_SUCCESS: (weapon, level, gem, quantity, rate) => `${e.success} | Congratz!!! Your **${weapon}** has been upgraded successfully to ${e.weaponLevel[level]} by ${gem}**x${clearifyNumber(quantity)}** at rate \`${Math.floor(rate*10000)/100}%\``,
            WEAPON_UPGRADE_MAX: (weapon, max) => `Your **${weapon}** has reached the maximum level ${e.weaponLevel[max]}`,

            /** BATTEL PROFILE */
            ME_DESCRIPTION: "Show your battle equipments",
            ME_USAGE: "$me",
            ME_EXAMPLES: "$me",
            RANK_POINT: (point) => `Rank point: __**${clearifyNumber(point)}**__`,
            
            /** FIGHT */
            FIGHT_DESCRIPTION: "Fight with bosses and other users",
            FIGHT_USAGE: "$fight",
            FIGHT_EXAMPLES: "$fight",
            FIGHT_START_TITLE: (user, type) => `${user} started a ${type} fight`,
            FIGHT_ERR_NOT_EQUIP: `${e.error} | You haven't chosen a character or equiped weapon yet`,
            FIGHT_ERR_ALREADY: (username) => `${e.error} | **${username}**, you can not using this command while in fight`,
            FIGHT_RANK_MATCH_NOT_FOUND: (username) => `${e.error} | **${username}**, couldn't find you a suitable rank match right now, try again later`,

            /** WORK */
            WORK_DESCRIPTION: "Get some materials for testing",
            WORK_USAGE: "$work",
            WORK_EXAMPLES: "$w",

            /** STATS */
            STAT_DESCRIPTION: "Show stats",
            STAT_USAGE: "$stat",
            STAT_EXAMPLES: "$stat",

            /** INFO */
            INFO_DESCRIPTION: "Show bot information",
            INFO_USAGE: "$info",
            INFO_EXAMPLES: "$info",

            /** GIFs */
            GIF_DESCRIPTION: "Cute gifs to delivery your emotions",
            GIF_USAGE: "$pat [content]",
            GIF_EXAMPLES: "$pat a cute cat",
            GIF_CONTENT: (type, user, targets) => {
                let keyword = ''
                let target = false
                switch(type) {
                    case 'pat':
                        keyword = 'pats'
                        target = true
                        break
                    case 'awoo':
                        keyword = 'awoos'
                        break
                    case 'blush':
                        keyword = 'blushes'
                        break
                    case 'clagwimoth':
                        keyword = '?.?'
                        break
                    case 'bang':
                        keyword = 'bangchiu'
                        target = true
                        break
                    case 'cry':
                        keyword = 'crys a river'
                        break
                    case 'cuddle':
                        keyword = 'cuddles'
                        target = true
                        break
                    case 'dance':
                        keyword = 'is dancing'
                        break
                    case 'hug':
                        keyword = 'hugs'
                        target = true
                        break
                    case 'kiss':
                        keyword = 'kissed'
                        target = true
                        break
                    case 'lick':
                        keyword = 'licked'
                        target = true
                        break
                    case 'nom':
                        keyword = 'nom...nom'
                        break
                    case 'pout':
                        keyword = 'pouts'
                        break
                    case 'slap':
                        keyword = 'slaps'
                        target = true
                        break
                    case 'punch':
                        keyword = 'punched'
                        break
                    case 'smile':
                        keyword = 'smiles'
                        break
                    case 'smug':
                        keyword = 'smugs'
                        break
                    case 'baka':
                        keyword = 'is baka'
                        break
                    case 'stare':
                        keyword = 'is staring at'
                        target = true
                        break
                    case 'thinking':
                        keyword = 'is thinking'
                        break
                }
                return `**${user}** ${keyword} ${targets ? targets : (target ? 'someone' : '')}`
            },
            GIF_ERR_NOT_FOUND: `${e.error} | Couldn't find you that gif now, try again later...`,

            /* COMMON WORDS */
            ID_NOT_FOUND: (id) => `ID **${id}** not found`,
            USER_NOT_FOUND: "User not found",
            ROLE_NOT_FOUND: "Role not found",
            GUILD_NOT_FOUND: "Guild not found",
            CHANNEL_NOT_FOUND: "Channel not found",
            CHANNEL_NOT_VIEWABLE: "Channel not viewable",
            MESSAGE_NOT_FOUND: "Message not found",
            FEATURE: "Feature",
            CREATED_AT: "Created at",
            COOLDOWN: "Cooldown",
            COUNT: "Count",
            REWARD: "Reward",
            FINE: "Fine",
            LANGUAGES: "Languages",
            KEY: "Key",
            DISABLED: "Disabled",
            DESCRIPTION: "Description",
            CHANNEL: "Channel",
            NOTHING_TO_SHOW: "Nothing to show",
            RESULT: "Result",
            NO_WINNERS: "No winners",
            BET: "Bet",
            PLAYERS: "Players",
            POINTS: "Points",
            WON: "won",
            UP: "Up",
            HOST: "Host",
            PRICE: "Price",
            QUANTITY: "Quantity",
            REWARD: "Reward",
            ENDED: "Ended",
            TYPE: "Type",
            STOCK: "Stock",
            LEVEL: "Level",
            EXPIRATION: "Expiration",
            EXPIRYTIME: "Expiry time",
            STAR: "Star",
            FOREVER: "Forever",
            INFINITY: "Infinity",
            OPEN_AT: "Open at",
            CLOSE_AT: "Close at",
            SPAWN_RATE: "Spawn rate",
            SKILL_RATE: "Skill rate",
            BASIC: "Basic",
            EXTEND: "Extend",
            EQUIPMENTS: "Equipments",
            GEN: "Gen",
            CHARACTER: "Character",
            WEAPON: "Weapon",
            GADGET: "Gadget",
            BATTLE_EQUIPMENTS: "Battle Equipments",
            WEAPON_LEVEL: "WLevel",
            WEAPON_COLOR: "WColor",
            ELEMENTS: "Elements",
            NICKNAME: "Nickname",
            SOMEONE: "Someone",
            ENEMY: "Enemy",
            SKILL: "Skill",
            
            /** CONVERT MS */
            convertMs: (ms) => this.convertMs(ms)
        }
    }

    /**
       * The method to get language strings
       * @param {string} term The string or function to look up
       * @param {...*} args Any arguments to pass to the lookup
       * @returns {string|Function}
       */
    get(term, ...args) {
        const value = this.language[term];
        switch (typeof value) {
            case "function": return value(...args);
            default: return value;
        }
    }

    getLang() {
        return currentLanguage;
    }

    getLangCode() {
        return langCode;
    }

    printDate(pdate, isLongDate) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let day = pdate.getDate(),
            monthIndex = pdate.getMonth(),
            year = pdate.getFullYear(),
            hour = pdate.getHours() < 10 ? "0" + pdate.getHours() : pdate.getHours(),
            minute = pdate.getMinutes() < 10 ? "0" + pdate.getMinutes() : pdate.getMinutes();

        let thedate = (isLongDate) ? day + " " + monthNames[monthIndex] + " " + year + " at " + hour + "h" + minute
            : day + " " + monthNames[monthIndex] + " " + year
        return thedate;
    }

    /**
     * Parse ms and returns a string
     * @param {number} milliseconds The amount of milliseconds
     * @returns The parsed milliseconds
     */
    convertMs(milliseconds) {
        let roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;
        let days = roundTowardsZero(milliseconds / 86400000),
            hours = roundTowardsZero(milliseconds / 3600000) % 24,
            minutes = roundTowardsZero(milliseconds / 60000) % 60,
            seconds = roundTowardsZero(milliseconds / 1000) % 60;
        // if(seconds === 0 && !allowZero) seconds++;
        let isDays = days > 0,
            isHours = hours > 0,
            isMinutes = minutes > 0,
            isSeconds = seconds > 0;
        let pattern =
            (!isDays ? "" : "{days}D ") +
            (!isHours ? "" : "{hours}H ") +
            (!isMinutes ? "" : "{minutes}M ") +
            (!isSeconds ? "" : (!isDays && !isHours && !isMinutes ? "{seconds}s" : "{seconds}S"))

        let sentence = pattern
            .replace("{duration}", pattern)
            .replace("{days}", days)
            .replace("{hours}", hours)
            .replace("{minutes}", minutes)
            .replace("{seconds}", seconds);
        return sentence.trim();
    }

}
