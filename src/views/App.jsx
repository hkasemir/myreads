import React from 'react'
import {Route, Link} from 'react-router-dom'
import Book from '../components/Book'
// import * as BooksAPI from './BooksAPI'
//
import './App.css'

const books = [{
  shelf: 'currentlyReading',
  title: "Ender's Game",
  author: 'Orston Scott Card',
  backgroundImage: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'
}];

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className='app'>
        <Route path='/search' render={() => (
          <div className='search-books'>
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
      </div>
      )} />
    <Route exact path='/' render={() => (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Currently Reading</h2>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                  <li>
                    <Book
                      book={books[0]}
                    />
                  </li>
                </ol>
              </div>
            </div>
            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Want to Read</h2>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                  <li>
                    <Book
                      book={books[0]}
                    />
                  </li>
                </ol>
              </div>
            </div>
            <div className='bookshelf'>
              <h2 className='bookshelf-title'>Read</h2>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                  <li>
                    <Book
                      book={books[0]}
                    />
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className='open-search'>
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
      )} />
      </div>
      )
    }
  }

  export default BooksApp
