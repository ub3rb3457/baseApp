import React, { Component } from 'react';
// Take in a component as argument WrappedComponent
const higherOrderComponent = (WrappedComponent) => {
  class HOC extends Component {
    render() {
      return <WrappedComponent />; 
    }
  }
  return HOC;
};