const events = require('events')
let usersLoggingIn = 0
const EventoMeter = new events.EventEmitter()
EventoMeter.on('userLoggedIn',()=> {
  ++usersLoggingIn
  console.log(usersLoggingIn)
})

EventoMeter.emit('userLoggedIn')    
EventoMeter.emit('userLoggedIn')    
EventoMeter.emit('userLoggedIn')    
EventoMeter.emit('userLoggedIn')    

