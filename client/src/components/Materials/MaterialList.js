import React, { Component, Fragment } from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:1337/api/materials/';

class MaterialList extends Component {
    constructor(props) {
      super(props);
      this.state = { materials: [] }
    }
    
    componentDidMount() {
        axios.get('listAll').then(function (response) {
            console.log(response.data.data);
        });
    }
    
    render() {
      return (
        <Fragment>
          {
            this.state.materials.forEach((item, index) => {
              <div
                index={item.id}
                role="menuitem"
                tabIndex={index}
              >
                <img
                  src='https://via.placeholder.com/150'
                  alt={ item.label }
                  style={{ display: 'block', width: '100%' }}
                />
              </div>
            })
          }
        </Fragment> 
    );
  }
}