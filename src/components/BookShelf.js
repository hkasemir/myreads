import React, {PureComponent} from 'react'
import Book from './Book'
import './BookShelf.css'

export default class BookShelf extends PureComponent {
  static defaultProps = {
    shelf: 'Read',
    books: []
  }

  render() {
    const {
      shelf,
      books
    } = this.props
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{shelf}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
          {
            books.map(book => (
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


