import React from 'react'
import {Route, Link} from 'react-router-dom'
import BookShelf from '../components/BookShelf'
// import * as BooksAPI from './BooksAPI'
//
import './App.css'

const books = [{
  shelf: 'currentlyReading',
  title: "Ender's Game",
  author: 'Orston Scott Card',
  backgroundImage: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'
}]

const shelves = [{
  title: 'currentlyReading',
  books
}, {
  title: 'wantToRead',
  books
}, {
  title: 'read',
  books
}]

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <main className='app'>
        <Route path='/search' render={() => (
          <section className='search-books'>
            <div className='search-books-bar'>
              <Link className='close-search' to='/'>Close</Link>
              <div className='search-books-input-wrapper'>
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                  */}
                  <input type='text' placeholder='Search by title or author'/>
                </div>
              </div>
              <div className='search-books-results'>
          <ol className='books-grid'></ol>
        </div>
      </section>
      )} />
    <Route exact path='/' render={() => (
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
      )} />
      </main>
      )
    }
  }

  export default BooksApp
