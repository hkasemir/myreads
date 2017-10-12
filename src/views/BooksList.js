import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'
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

export default class BooksList extends PureComponent {
  static defaultProps = {
    books: []
  }

  render() {
    return (
      <section className='list-books'>
        <header className='list-books-title'>
          <h1>MyReads</h1>
        </header>
        <div className='list-books-content'>
          {
            shelves.map(shelf => (
              <BookShelf
                key={shelf.id}
                shelf={shelf}
                books={this.props.books}
              />
            ))
          }
        </div>
        <div className='open-search'>
          <Link to='/search'>Add a book</Link>
        </div>
      </section>
    );
  }
}


