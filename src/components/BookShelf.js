import React, {Component} from 'react'
import _ from 'lodash'
import Book from './Book'
import './BookShelf.css'

export default class BookShelf extends Component {
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
      books,
      onAssignShelf
    } = this.props
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{shelf.title}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
          {
            books.map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                  onAssignShelf={onAssignShelf}
                  shelf={shelf.id}
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


