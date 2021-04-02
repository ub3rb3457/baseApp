// CommentListContainer.js
import React, { Component } from "react";
import MaterialList from "./MaterialList";
import PropTypes from 'prop-types'
import axios from 'axios'
export default class MaterialListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { materials: [] }
  }
  
  componentDidMount() {
    
  }
  
  render() {
    /**
     * <Coverflow
        width={600}
        height={280}
        displayQuantityOfSide={2}
        navigation={false}
        enableHeading={false}
      ></Coverflow>
     */
    return <MaterialList comments={this.state.materials} />;
  }
}

