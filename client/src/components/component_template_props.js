import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'

function ChangeMe(props) {
  const { index, ...other } = props
  const [val,setVal] = useState('')

  useEffect(() => {
    
  },[])//adding the array as a 2nd parameter ensures the effect is applied once per rendernpm run dev
  
  return ('')
  
}
ChangeMe.propTypes = {
  index: PropTypes.any.isRequired,
};

export default ChangeMe
