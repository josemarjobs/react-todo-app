var moment = require('moment');

console.log(moment().format())

var now = moment()

console.log('current timestamp: ', now.unix())
console.log('Timestamp: ', Date.now())
var timestamp = 1486804990;
var current = moment.unix(timestamp)
console.log('Current moment', current.format('MMM, ddd DD YY @ h:mm a'))
console.log('Current moment', current.format('MMMM do YYYY @ h:mm A'))
