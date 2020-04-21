const cron = require('cron');
const {checkWeather} = require('./weather')

let goodMorning = new cron.CronJob('0 * 8 * * * ', () =>{
   checkWeather()
});

let goodNoon = new cron.CronJob('0 * 12 * * * ', () =>{
    checkWeather()
});

let goodNight = new cron.CronJob('0 * 20 * * * ', () =>{
    checkWeather()
});



module.exports = {
    goodMorning,
    goodNoon,
    goodNight,
      
}