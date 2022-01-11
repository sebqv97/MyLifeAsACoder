const net = require('net')
// create connection
const client = net.createConnection({
  port:8080
})

client.on('data',(data)=>{
  console.log(data.toString())
})
