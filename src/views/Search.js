import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'
import BookShelf from '../components/BookShelf'
import * as BooksApi from '../services/BooksAPI'
import './Search.css'

export default class Search extends PureComponent {
  state = {
    query: '',
    results: []
  }

  static defaultProps = {
  }

  searchBooks = async (evt) => {
    const query = evt.target.value;
    this.setState({query})
    if (query) {
      try {
        const results = await BooksApi.search(query, 20)
        return this.setState({results})
      } catch (err) {
        return console.error('searching didn\'t work ;\'( ', err)
      }
    }
    return this.setState({results: []})
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
            shelf={{title: 'Search Results', id: 'search'}}
            books={results}
          />
        }
        </div>
      </section>
    )
  }
}



