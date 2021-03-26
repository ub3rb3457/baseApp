import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'

function CoverFlowItems(props) {
  const { index, ...other } = props //access the prop values 
  const [val,setVal] = useState('')

  useEffect(() => {
    
  },[])//adding the array as a 2nd parameter ensures the effect is applied once per render
  return (
    <div>
      <div role="menuitem" tabIndex="0">
        <img
          src=''
          alt=''
          style={{ display: 'block', width: '100%' }}
        />
      </div>
      <img src='' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
      <img src='' alt='' data-action="http://andyyou.github.io/react-coverflow/"/>
    </div>
  )
  
}
CoverFlowItems.propTypes = { //assurance that data passed in is the correct type
  index: PropTypes.any.isRequired,
};

export default CoverFlowItems