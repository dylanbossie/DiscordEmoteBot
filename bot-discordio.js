var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
`bot.on('message', function (user, userID, channelID, message, evt) {
    if (userID != bot.id) {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        firstSpace = message.indexOf(' ')
        userMessage = message.slice(firstSpace+1)

        message.react('😄')

        bot.sendMessage({
            to: channelID,
            message: 'Losers say ' + userMessage
        });
    }
});`
bot.on('message', function (user, userID, channelID, message, evt) {
    console.log('Message metadata:')
    console.log(user)
    console.log(userID)
    console.log(channelID)
    console.log(message)
    console.log(evt)
});