import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookView from './BookView'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDY1NDVlZGIxN2NkMTJkYzUwODU2YjUiLCJmaXJzdE5hbWUiOiJKZXNzaWUiLCJsYXN0TmFtZSI6IlRheWxvciIsImVtYWlsIjoicGVyY2hhbmNlMmRyZWFtODZAZ21haWwuY29tIiwiaWF0IjoxNjE3MjY2ODUyLCJleHAiOjE2MTcyNzQwNTJ9.a1OsJ3I71sF4Z8T4UJby7HzihbYOQfs3Tv9clCxIwWI'

class BookComponent extends Component {
	constructor(props) {
		super(props); //always call 1st
		this.state = { books: []} 
	}
	
	//Life-Cycle Methods
	componentDidMount() { // called after the initial render
    fetch("http://localhost:1337/api/book", {// read all entries
        "method": "GET",
        "headers": {
          "Authorization": "Bearer "+ token,
        }
      }).then(response => response.json()).then(response => {
        let books = response.data
        this.setState({ books: books }) //add the response to the state
      }).catch(err => { console.log(err); 
    });
	}
	
	render() {
		return ( <BookView books={this.state.books}/> );
	}
}

BookComponent.propTypes = {
	title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isbn: PropTypes.string.isRequired 
}


export default BookComponent
