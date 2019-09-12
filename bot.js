// require the discord.js module
const Discord = require('discord.js');
// require auth.json - config file containing authentication token for bot
var auth = require('./auth.json');
// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');
    console.log('Bot metadata:')
    console.log(client.user)
});

// login to Discord with your app's token
client.login(auth.token);

// listen for a message
client.on('message', message => {
    console.log('New message! Message metadata:')
    console.log(message.author.id)
    console.log(message.content)

    console.log('Reacting to message.')
    message.react('🤔')
});