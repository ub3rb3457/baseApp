import React, {Component} from 'react'
import PropTypes from 'prop-types'
/**** Mounting the Component ****** 
 * Methods are called in the following 
 * order once the component is loaded
* constructor()
* static getDerivedStateFromProps()
* render()
* componentDidMount()
************************************/
/**** Updating the Component ******
 * Methods are called in the following 
 * order when updating the component
* static getDerivedStateFromProps()
* shouldComponentUpdate()
* render()
* getSnapshotBeforeUpdate()
* componentDidUpdate()
***** Un-Mounting *****************
* componentWillUnmount()
**********************************/

class ClassComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {}
		this.testMethod = this.testMethod.bind(this);
	}
	static defaultProps = {
		name: 'b3457m0d3'
	}
	static getDerivedStateFromProps(props, state){ // always invoked prior to render()

	}
	static getDerivedStateFromError(error){

	} 
	testMethod() {
		//binding the method gives you access to the instance keyword *this*
	}
	//Life-Cycle Methods
	componentDidMount() {
		
	}
	shouldComponentUpdate(nextProps, nextState){
		//defaults to true, returning false will stop the update
	}
	getSnapshotBeforeUpdate(prevProps, prevState){

	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		
	}
	componentWillUnmount(){//perform any necessary clean up before the component is removed
		//!!! do not call setState() in this method !!!!

	}
	componentDidCatch(error, info){

	}


	
	render() {
		const options = { }
		return (
		<div>
			
		</div>
		);
	}
}

ClassComponent.defaultProps = {
	name: 'b3457m0d3'
}
ClassComponent.propTypes = {
	name: PropTypes.string 
	/*******Valid PropType values***************
	* any, array, bool, func, number, object, symbol
	* node, element, elementType, instanceOf(ClassName)
	* oneOf(arrayOfItems), oneOfType(arrayOfPropTypes)
	* arrayOf(PropType), objectOf(PropType)
	* adding '.isRequired' to the end of the PropType makes it required
	*********************************************/
  }

export default ClassComponent;