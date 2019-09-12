const Discord = require('discord.js');
var auth = require('./config/auth.json');
var serverParams = require('./config/serverParameters.json')
var tools = require('./lib/command-bot.js')

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

// listen for a message
client.on('message', message => {
    if (channels.validChannels.includes(message.channel.name)) {
        msg = message.content
        // TODO: implement check for a user command (prefix: !)
        // add switch case with all desired commands, which then
        // references command-bot to corresponding function
        if (msg[0] == '!') {
            args = msg.substring
            switch
        }
        console.log('New message! Message metadata:')
        console.log(message.author.id)
        console.log(msg)

        console.log('Reacting to message.')
        message.react('🤔')
    }
});