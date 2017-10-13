import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import BookShelf from '../components/BookShelf'
import './BooksList.css'

const shelves = [{
  title: 'Currently Reading',
  id: 'currentlyReading'
}, {
  title: 'Want To Read',
  id: 'wantToRead'
}, {
  title: 'Already Read',
  id: 'read'
}]

export default class BooksList extends Component {
  static defaultProps = {
    books: [],
    bookIdsPerShelf: {}
  }

  render() {
    const {bookIdsPerShelf, books} = this.props
    return (
      <section className='list-books'>
        <header className='list-books-title'>
          <h1>MyReads</h1>
        </header>
        <div className='list-books-content'>
          {
            shelves.map(shelf => {
              const shelfBooks = bookIdsPerShelf[shelf.id].map(bookId => _.find(books, {id: bookId}))
              return (
                <BookShelf
                  key={shelf.id}
                  shelf={shelf}
                  books={shelfBooks}
                  onAssignShelf={this.props.onAssignShelf}
                />
              )
            })
          }
        </div>
        <div className='open-search'>
          <Link to='/search'>Add a book</Link>
        </div>
      </section>
    );
  }
}


