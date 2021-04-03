/** 
 * Top-Level Component to handle user sessions, tokens, etc
 */
import React, { Component } from 'react'

class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            token: null,
            OTPVerified: false,
            cached: false,
            firstName: '',
            lastName: '',
            email: '',
        }
        this.cacheUser = this.cacheUser.bind(this);
        this.restoreUser = this.restoreUser.bind(this);
    }
    componentDidMount(){
        window.localStorage.setItem(key, JSON.stringify(value));
        /*if(){
            axios.post('login', formData).then(function (response) {
                console.log(response.data.data);
            });
        }*/
    }
    componentWillUnmount(){}
    
    cacheUser(defaultValue, key) {
        const [value, setValue] = React.useState(() => {
          const stickyValue = window.localStorage.getItem(key);
          return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
        });
    }

    restoreUser(defaultValue, key) {
        const [value, setValue] = React.useState(() => {
          const stickyValue = window.localStorage.getItem(key);
          return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
        });
       
      }
    
    render (){
        return ('')
    }
}