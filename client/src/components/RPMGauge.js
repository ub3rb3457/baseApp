import React, { useState, useEffect } from "react"
import socketIOClient from "socket.io-client"
import ReactSpeedometer from "react-d3-speedometer"

function SerialSocket() {
  const ENDPOINT = "http://localhost:4001"
  const [serialData,setSerialData] = useState()

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT)
    socket.on('data', (data) => {
      setSerialData(data)
    })
  },[])
  
  return (
    <ReactSpeedometer
      width={200}
      maxValue={1024}
      value={serialData}
    />
  )
  
}
export default SerialSocket
