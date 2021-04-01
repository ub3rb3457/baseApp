import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
require("dotenv").config({ path: '~/baseApp/' });
const token = process.env.JWT_TOKEN

function Auth(props) {
  const [val,setVal] = useState('')

  useEffect(() => {
    fetch("http://localhost:1337/api/auth", {// read all entries
        "method": "GET",
        "headers": {
          "Authorization": "Bearer "+ token,
        }
      }).then(response => response.json()).then(response => {
        let books = response.data
        this.setState({ books: books }) //add the response to the state
      }).catch(err => { console.log(err); 
    });
  },[])//adding the array as a 2nd parameter ensures the effect is applied once per render
  return ('')
  
}
Auth.propTypes = { //assurance that data passed in is the correct type
  index: PropTypes.any.isRequired,
};

export default Auth
