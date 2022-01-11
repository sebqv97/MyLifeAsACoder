//require module
const net = require('net')
//create server
const server = net.createServer()
//listen
server.listen({
  host:'localhost',
  port:8080
})

server.on('connection',(client)=>{
  console.log("Welcome")
  client.write(`Successfully connected to PORT: ${8080}`)
})
//on new connection -> display message