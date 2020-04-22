const request = require('postman-request')
//const {weatherKey} = require('../config.json');

const myChannel = process.env.channelId;
function checkWeather(){
  request(`https://api.openweathermap.org/data/2.5/weather?q=Irvine,California&appid=${process.env.weatherKey}&units=imperial`, {json: true}, (err, res, body) => {
    if (err) { return }
    let today = new Date();
    let temp = Math.round(body.main.temp)
    console.log(temp)
    if (today.getHours() === 8){
      message.channel.send(`Hi! It is currently 8:00 am and it is ${temp} degrees.`)
    } else if (today.getHours() === 12){
      myChannel.send(`Hi! It is currently 12:00 pm and it is ${temp} degrees.`)
    } else if (today.getHours() === 20){
        message.channel.send(`Hi! It is currently 8:00 pm and it is ${temp} degrees.`)
    }
  
  });

}




module.exports = {
    name: 'temp',
    description: 'Current temperature',
    execute(message, args){
      request(`https://api.openweathermap.org/data/2.5/weather?q=Irvine,California&appid=${process.env.weatherKey}&units=imperial`, {json: true}, (err, res, body) => {
        if (err) { return console.log(err); }
        currentTemp = Math.round(body.main.temp)
        console.log(`It is ${currentTemp}`)
        message.channel.send(`It is currently ${currentTemp} degrees Farenheit.`)
    });
  },
  checkWeather
}



