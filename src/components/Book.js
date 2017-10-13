import React, {Component} from 'react'
import * as BooksApi from '../services/BooksAPI'
import './Book.css'

export default class Book extends Component {
  static defaultProps = {
    book: {
      authors: [],
      imageLinks: {}
    },
    onAssignShelf: () => true
  }

  handleAssignShelf = async (evt) => {
    const shelf = evt.target.value
    const bookIdsPerShelf = await BooksApi.update(this.props.book, shelf)
    const book = {
      ...this.props.book,
      shelf
    }
    this.props.onAssignShelf(book, bookIdsPerShelf)
  }

  render() {
    const {
      book: {shelf, imageLinks, title, authors}
    } = this.props
    return (
      <article className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks && imageLinks.smallThumbnail})` }}></div>
          <div className='book-shelf-changer'>
            <select onChange={this.handleAssignShelf} defaultValue={shelf || 'none'}>
              <option value='move' disabled>Move to...</option>
              <option value='currentlyReading' disabled={shelf === 'currentlyReading'}>Currently Reading</option>
              <option value='wantToRead' disabled={shelf === 'wantToRead'}>Want to Read</option>
              <option value='read' disabled={shelf === 'read'}>Read</option>
              <option value='none' disabled={shelf === 'none'}>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{title}</div>
        { authors && <div className='book-authors'>{authors.join(', ')}</div> }
      </article>
    );
  }
}

