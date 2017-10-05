import React from 'react'
import {Route} from 'react-router-dom'
import Search from './Search'
import BooksList from './BooksList'
// import * as BooksAPI from './BooksAPI'
//
import './App.css'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <main className='app'>
        <Route path='/search' component={Search} />
        <Route exact path='/' render={() => (
          <BooksList />
        )} />
      </main>
    )
  }
}

export default BooksApp
