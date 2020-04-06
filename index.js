
const fs = require('fs');
const cron = require('cron')
// require the discord.js module
const Discord = require('discord.js');
const {prefix, token, channelId} = require('./config.json')
// create a new Discord client
const client = new Discord.Client();
client.commands = new Discord.Collection();
//returns an array of all file names
//reads files from directory using fs 
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.login(token);
// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');
    let myChannel = client.channels.cache.get(channelId);
    // About the 0 0 8 * * * pattern: its format is second minute hour month-day month week-day every ten seconds
    let timeEmbed = new cron.CronJob('*/2 * * * * * ', () =>{
        myChannel.send(`Good morning! It is 8:00am, today is`)
    });
    timeEmbed.start();
});


//this takes a message in, and logs the message content
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return; 
    //this slices the prefix out, returning an argument and splitting it at each space
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }



    });

 
