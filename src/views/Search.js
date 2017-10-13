import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import _ from 'lodash'
import BookShelf from '../components/BookShelf'
import * as BooksApi from '../services/BooksAPI'
import './Search.css'

export default class Search extends Component {
  state = {
    query: '',
    results: []
  }

  searchBooks = async (evt) => {
    const query = evt.target.value;
    this.setState({query})
    if (query) {
      try {
        const results = await BooksApi.search(query, 20)
        const resultsWithExistingBookShelves = this.applyExistingShelves(results)
        return this.setState({results: resultsWithExistingBookShelves})
      } catch (err) {
        return console.error('searching didn\'t work ;\'( ', err)
      }
    }
    return this.setState({results: []})
  }

  applyExistingShelves(results) {
    return results.map(result => {
      const existingBook = _.find(this.props.userBooks, {id: result.id})
      if (existingBook) {
        return existingBook
      }
      return result
    })
  }

  handleAssignShelf = (book, bookIdsPerShelf) => {
    const newState = this.state.results.filter(result => result.id !== book.id)
    this.setState({results: newState})
    this.props.onAssignShelf(book, bookIdsPerShelf)
  }

  render() {
    const { query, results } = this.state

    return (
      <section className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>Close</Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              value={query}
              onChange={this.searchBooks}
            />
          </div>
        </div>
        <div className='search-books-results'>
        {
          results.error
          ?
          <h2>Sorry, that's not an acceptable search term!</h2>
          :
          <BookShelf
            shelf={{title: 'Search Results'}}
            books={results}
            onAssignShelf={this.handleAssignShelf}
          />
        }
        </div>
      </section>
    )
  }
}



