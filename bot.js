const Discord = require('discord.js');
var auth = require('./config/auth.json');
var serverParams = require('./config/serverParameters.json')
var BotTools = require('./lib/command-bot.js')

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');
    console.log('Bot user metadata:')
    console.log(client.user)
    console.log('Valid channels:')
    console.log(serverParams.validChannels)
});

// login to Discord with your app's token
client.login(auth.token);

// initialize values
isCustomEmoji = false
emoji = '🤔'

// listen for a message
client.on('message', message => {
    if (serverParams.validChannels.includes(message.channel.name)) {
        msg = message.content
        // TODO: implement check for a user command (prefix: !)
        // add switch case with all desired commands, which then
        // references command-bot to corresponding function
        if (msg[0] == '!') {
            args = msg.substring(1).split(' ')
            cmd = args[0]
            name = args[1]
            switch (cmd) {
                case 'selectemoji':
                    retvals = BotTools.switchEmoji(client,message,name)
                    emojiID = retvals[0]
                    isCustomEmoji = retvals[1]
                    emoji = retvals[2]
                    console.log(retvals)
            }
        }

        if (isCustomEmoji) {
            message.react(message.guild.emojis.get(emojiID))
        } else {
            message.react(emoji)
        }
        
    }
});