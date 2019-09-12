const Discord = require('discord.js');
var auth = require('./config/auth.json');
var channels = require('./config/channels.json')
// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');
    console.log('Bot user metadata:')
    console.log(client.user)
    console.log('Valid channels:')
    console.log(channels.validChannels)
});

// login to Discord with your app's token
client.login(auth.token);

// listen for a message
client.on('message', message => {
    if (channels.validChannels.includes(message.channel.name)) {
        console.log('New message! Message metadata:')
        console.log(message.author.id)
        console.log(message.content)

        console.log('Reacting to message.')
        message.react('🤔')
    }
});