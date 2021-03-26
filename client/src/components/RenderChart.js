import React, { useState, useEffect } from "react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'


function RenderChart() {
  const [data,setData] = useState([{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page B', uv: 200, pv: 2400, amt: 2400}])

  useEffect(() => {
    
  },[])//adding the array as a 2nd parameter ensures the effect is applied once per rendernpm run dev
  
  return (
    <LineChart width={450} height={400} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  )
  
}
export default RenderChart
