const Discord = require('discord.js');
const cron = require('cron');
const {prefix, token, channelId} = require('../config.json');
const client = new Discord.Client();

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
let currentDate = new Date(Date.now());
let current = currentDate.toLocaleString('en-US', dateOptions)
let goodMorning = new cron.CronJob('0 * 8 * * * ', () =>{
    myChannel.send(`Good morning! It is 8:00am, happy ${current}!`)
});

let goodNoon = new cron.CronJob('0 * 12 * * * ', () =>{
    myChannel.send(`It's noon! Time to have lunch!`)
});

let goodNight = new cron.CronJob('0 * 20 * * * ', () =>{
    myChannel.send(`Good night! Get a lot of sleep!`)
});

module.exports = {
    goodMorning,
    goodNoon,
    goodNight
}