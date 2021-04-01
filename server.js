require("dotenv").config();
const http_port = process.env.HTTP_PORT
const serial_port = process.env.SERIAL_PORT
const baud_rate = process.env.BAUD_RATE

const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const serialport = require('serialport')
const sp_readline = serialport.parsers.Readline
const parser = new sp_readline()
const sPort = new serialport(serial_port, { baudRate: baud_rate })
sPort.pipe(parser);
const app = express()

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)
sPort.on('open', () => {

  console.log('Serial Port Opened')
  // This is what the socket.io syntax is like, we will work this later
  io.on('connection', socket => {
    console.log('New client connected')
    let lastValue 
  
    parser.on('data', data => { 
      if (lastValue !== data) { socket.emit('data', data) }
      lastValue = data  
    })

    // disconnect is fired when a client leaves the server
    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  })
})

server.listen(http_port, () => console.log(`Listening on port ${http_port}`))
