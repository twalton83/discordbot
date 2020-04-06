module.exports = {
    name: 'time',
    description: 'Current Time',
    execute(message, args){
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        const timeOptions = { hour : 'numeric', minute : 'numeric' }
        let currentDate = new Date(Date.now());
        let current = currentDate.toLocaleString('en-US', dateOptions)
        let currentTime = new Date(currentDate.getTime())
        let time = currentTime.toLocaleString('en-US', timeOptions)
        message.channel.send(`Today is ${current} and it is ${time}.`) 
    }
};