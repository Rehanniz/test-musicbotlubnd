const { PlayerManager } = require("discord.js-lavalink");

module.exports = bot => {
    console.log(`${bot.user.username} is online`);

    // global.lavalink = new PlayerManager(bot, nodes, {
    //     user: bot.user.id,
    //     shards: 0
    // });

    let activities = [ `${bot.guilds.size} servers!`, `${bot.channels.size} channels!`, `${bot.users.size} users!` ], i = 0;
    setInterval(() => bot.user.setActivity(`${bot.prefix}help || ↬ Leaders l Rehan ᴰᵉʳᵃ ツ#5402 ${activities[i++ % activities.length]}`, { type: "WATCHING" }), 5000)

};