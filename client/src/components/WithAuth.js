import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

function WithAuth(MyComponent){
    return class extends Component(props) {
        isAuthenticated(){
            return this.props.isAuthenticated;
        }
        render(){
            const loginErrorMessage = ( <div>Login To Access</div> );
            return (
                <Fragment>
                    { (this.isAuthenticated === true) ? <MyComponent {...this.props}/> : loginErroMessage }
                </Fragment>
            )
        }
    }
}
export default WithAuth;    