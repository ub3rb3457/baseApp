import React, { useState, useEffect } from "react"
import Coverflow from 'react-coverflow'
import CoverFlowItems from './CoverFlowItems'

function MaterialsCoverFlow(props) {
  const [val,setVal] = useState('')

  useEffect(() => {
    
  },[])//adding the array as a 2nd parameter ensures the effect is applied once per rendernpm run dev
  
  return (
    <Coverflow
      width={600}
      height={280}
      displayQuantityOfSide={2}
      navigation={false}
      enableHeading={false}
    >
      <CoverFlowItems />
      <img src='' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
      <img src='' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
    </Coverflow>
  )
  
}


export default MaterialsCoverFlow
