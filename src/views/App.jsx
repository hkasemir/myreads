import React from 'react'
import {Route} from 'react-router-dom'
import Search from './Search'
import BooksList from './BooksList'
import * as BooksAPI from '../services/BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  async componentDidMount() {

    try {
      const books = await BooksAPI.getAll()
      console.log(books)
      this.setState({books});
    } catch (err) {
      console.error('something went wrong fetching books: ', err)
    }
  }

  render() {
    return (
      <main className='app'>
        <Route path='/search' component={Search} />
        <Route exact path='/' render={() => (
          <BooksList books={this.state.books} />
        )} />
      </main>
    )
  }
}

export default BooksApp
