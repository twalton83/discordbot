const cron = require('cron');
const {checkWeather} = require('./weather')

let goodMorning = new cron.CronJob('0 * 8 * * * ', () =>{
   checkWeather()
}, 'America/Los_Angeles');

let goodNoon = new cron.CronJob('0 * 12 * * * ', () =>{
    checkWeather()
}, 'America/Los_Angeles');

let goodNight = new cron.CronJob('0 * 20 * * * ', () =>{
    checkWeather()
}, 'America/Los_Angeles');



module.exports = {
    goodMorning,
    goodNoon,
    goodNight,
      
}