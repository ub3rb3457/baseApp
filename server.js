const http_port = 4001
const serial_port = '/dev/ttyUSB0'
const baud_rate = 9600

const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const serialport = require('serialport')
const sp_readline = serialport.parsers.Readline 
const parser = new sp_readline()
const sPort = new serialport(serial_port, { baudRate: baud_rate })
sPort.pipe(parser);
const app = express()

const server = http.createServer(app) // grab a server instance
const io = socketIO(server) // This creates our socket using the server instance
io.on('connection', socket => { // once the socket has connected
  let lastValue // hold the previous value in this variable
  parser.on('data', data => { // when you receive serial data
    if (lastValue !== data) socket.emit('data', data) // if the data has changed since the last reading, emit the new data
    lastValue = data //set lastValue to the value we have now 
  })
  socket.on('disconnect', () => { }) // disconnect is fired when a client leaves the server
})

server.listen(http_port, () => console.log(`Serial Socket connected @ port ${http_port}`))
