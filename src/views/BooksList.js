import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'
import BookShelf from '../components/BookShelf'
import './BooksList.css'

const books = [{
  shelf: 'currentlyReading',
  title: "Ender's Game",
  author: 'Orston Scott Card',
  backgroundImage: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'
}]

const shelves = [{
  title: 'Currently Reading',
  books
}, {
  title: 'Want To Read',
  books
}, {
  title: 'Already Read',
  books
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
                key={shelf.title}
                shelf={shelf.title}
                books={shelf.books}
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


