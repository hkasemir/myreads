import React, {PureComponent} from 'react'
import './Book.css'

export default class Book extends PureComponent {
  render() {
    const {
      book: {backgroundImage, title, author},
      currentShelf
    } = this.props
    return (
      <article className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${backgroundImage})` }}></div>
          <div className='book-shelf-changer'>
            <select>
              <option value='none' disabled>Move to...</option>
              <option value='currentlyReading' disabled={currentShelf === 'currentlyReading'}>Currently Reading</option>
              <option value='wantToRead' disabled={currentShelf === 'wantToRead'}>Want to Read</option>
              <option value='read' disabled={currentShelf === 'read'}>Read</option>
              <option value='none' disabled={currentShelf === 'none'}>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{title}</div>
        <div className='book-authors'>{author}</div>
      </article>
    );
  }
}

