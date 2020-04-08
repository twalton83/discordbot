const Discord = require('discord.js');
const cron = require('cron');
const {prefix, token, channelId} = require('../config.json');
const client = new Discord.Client();
const {currentTemp} = require('./weather')
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
let current = new Date(Date.now());
let currentDate = current.toLocaleString('en-US', dateOptions)


let goodMorning = new cron.CronJob('0 * 8 * * * ', () =>{
    myChannel.send(`Good morning! It is 8:00am, currently ${currentTemp} degrees Farenheit. Happy ${currentDate}!`)
});

let goodNoon = new cron.CronJob('0 * 12 * * * ', () =>{
    myChannel.send(`It's noon! It is currently ${currentTemp}. Time to have lunch!`)
});

let goodNight = new cron.CronJob('0 * 20 * * * ', () =>{
    myChannel.send(`Good night! It is currently ${currentTemp}. Get a lot of sleep!`)
});

module.exports = {
    goodMorning,
    goodNoon,
    goodNight,
    currentTemp
}