const cron = require('cron');
const {checkWeather} = require('./weather')

let goodMorning = new cron.CronJob('0 0 8 * * * ', () =>{
    console.log("Good morning queued.")
   checkWeather(myChannel)
}, 'America/Los_Angeles');

let goodNoon = new cron.CronJob('0 0 12 * * * ', () =>{
    console.log("Noon queued.")
    checkWeather(myChannel)
}, 'America/Los_Angeles');

let goodNight = new cron.CronJob('0 0 20 * * * ', () =>{
    console.log("Good night queued.")
    checkWeather(myChannel)
}, 'America/Los_Angeles');

let testCron = new cron.CronJob('15 * * * * * ', () =>{
    console.log("Testing")
    checkWeather(myChannel)
}, 'America/Los_Angeles');


module.exports = {
    goodMorning,
    goodNoon,
    goodNight,
    testCron
      
}