import React, { useState, useEffect } from 'react'
import Coverflow from 'react-coverflow'


function MaterialsCoverFlow(props) {
  const [val,setVal] = useState('')

  useEffect(() => {
    
  },[])//adding the array as a 2nd parameter ensures the effect is applied once per render
  
  return (
    <Coverflow
      width={600}
      height={280}
      displayQuantityOfSide={2}
      navigation={false}
      enableHeading={false}
    >
      <div
        role="menuitem"
        tabIndex="0"
      >
        <img
          src='https://via.placeholder.com/150'
          alt='#'
          style={{ display: 'block', width: '100%' }}
        />
      </div>
      <img src='https://via.placeholder.com/150' alt='#' data-action="http://andyyou.github.io/react-coverflow/"/>
      <img src='https://via.placeholder.com/150' alt='#' data-action="http://andyyou.github.io/react-coverflow/"/>
    </Coverflow>
  )
  
}


export default MaterialsCoverFlow
