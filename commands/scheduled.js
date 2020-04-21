const cron = require('cron');
const {checkWeather} = require('./weather')

let goodMorning = new cron.CronJob('0 * 8 * * * ', () =>{
    myChannel.send(`Good morning! It is 8:00am, currently ${currentTemp} degrees Farenheit. Happy ${currentDate}!`)
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