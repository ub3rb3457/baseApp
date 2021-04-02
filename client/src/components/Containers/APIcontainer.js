import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:1337/';

class APIcontainer {
    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount() {
        /*/ METHODS: connect, delete, get, head, options, patch, post, put, trace
            ACTIONS
        axios.METHOD('ACTION').then(function (response) {
            console.log(response.data.data);
        });
        */
    }
    render (){

    }
}

export default APIcontainer