import React from 'react'
import {Route} from 'react-router-dom'
import _ from 'lodash'
import Search from './Search'
import BooksList from './BooksList'
import * as BooksAPI from '../services/BooksAPI'
import './App.css'

const DEFAULT_BOOK_SHELVES = {
  currentlyReading: [],
  read: [],
  wantToRead: []
}

class BooksApp extends React.Component {
  state = {
    books: [],
    bookIdsPerShelf: DEFAULT_BOOK_SHELVES
  }

  componentDidMount() {
    this.fetchAllBooks();
  }

  fetchAllBooks = async () => {
    try {
      const books = await BooksAPI.getAll()
      const bookIdsPerShelf = books.reduce((idsPerShelf, book) => ({
        ...idsPerShelf,
        [book.shelf]: [...idsPerShelf[book.shelf], book.id]
      }), DEFAULT_BOOK_SHELVES)
      this.setState({books, bookIdsPerShelf});
    } catch (err) {
      console.error('something went wrong fetching books: ', err)
    }
  }

  handleAssignShelf = (book, bookIdsPerShelf) => {
    this.setState(prevState => {
      const books = _.some(prevState.books, {id: book.id})
        ? prevState.books.map(bk => bk.id === book.id ? book : bk)
        : [...prevState.books, book]
      return {
        books,
        bookIdsPerShelf
      }
    })
  }

  render() {
    return (
      <main className='app'>
        <Route path='/search' render={() => (
          <Search
            userBooks={this.state.books}
            onAssignShelf={this.handleAssignShelf}
          />
        )} />
        <Route exact path='/' render={() => (
          <BooksList
            books={this.state.books}
            bookIdsPerShelf={this.state.bookIdsPerShelf}
            onAssignShelf={this.handleAssignShelf}
          />
        )} />
      </main>
    )
  }
}

export default BooksApp
