import React, {PureComponent} from 'react'
import _ from 'lodash'
import Book from './Book'
import './BookShelf.css'

export default class BookShelf extends PureComponent {
  static defaultProps = {
    shelf: {
      id: 'none',
      title: 'None'
    },
    books: []
  }

  render() {
    const {
      shelf,
      books
    } = this.props
    let booksOnShelf = _.filter(books, {shelf: shelf.id}, books)
    if (shelf.id === 'search') {
      booksOnShelf = books
    }
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{shelf.title}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
          {
            booksOnShelf.map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                />
              </li>
            ))
          }
          </ol>
        </div>
      </div>
    );
  }
}


