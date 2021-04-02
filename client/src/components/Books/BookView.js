import React from "react"
import PropTypes from 'prop-types'

function BookView(props) {
  return (
    <div>
      {
        props.books.forEach(book => {
          console.log(book.title)
        })
      }
    </div>
  )
  
}
BookView.propTypes = { //assurance that data passed in is the correct type
  books: PropTypes.any.isRequired,
};

export default BookView
