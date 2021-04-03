import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:1337/api/materials/';

function DataSource(props){
    const [selected,setSelected] = useState('dash')
    useEffect(() => {
    
    },[])
    return ''; 
}
DataSource.propTypes = { //assurance that data passed in is the correct type
    index: PropTypes.any.isRequired,
};