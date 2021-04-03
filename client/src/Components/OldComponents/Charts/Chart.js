import React, { useState, useEffect } from "react"

function Chart() {
  const [,setSerialData] = useState([])

  useEffect(() => {
    
  },[])
  
  return (
    <ReactSpeedometer
      width={200}
      maxValue={1024}
      value={serialData}
    />
  )
  
}
export default Chart