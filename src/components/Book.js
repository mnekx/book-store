import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { bookRemoved } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <li className="book-li" key={book.id}>
      <section className="book d-flex">
        <div className="info">
          <span className="text category">Action</span>
          <hgroup>
            <h2 className="title text">{book.title}</h2>
            <h3 className="author text">{book.author}</h3>
          </hgroup>
          <div className="button-grp">
            <button type="button" className="comments">
              Comments
            </button>
            <button
              type="button"
              className="remove"
              onClick={() => dispatch(bookRemoved(book.id))}
            >
              Remove
            </button>
            <button type="button" className="edit">
              Edit
            </button>
          </div>
        </div>
        <div className="d-flex progress-bar align-center">
          <CircularProgressbar
            value={90}
            styles={buildStyles({
              pathColor: '#0290ff',
              rotation: 90,
            })}
          />
          <div className="d-flex flex-col just-center align-center ml-1rem">
            <span className="percentage">64%</span>
            <span className="status">Completed</span>
          </div>
        </div>
        <div className="vert-devider" />
        <section className="progress-update">
          <hgroup>
            <h4 className="current-chapter">Current Chapter</h4>
            <h5 className="current-lesson">Chapter 17</h5>
          </hgroup>
          <button type="button" className="btn update-progress-btn">
            update progress
          </button>
        </section>
      </section>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
export default Book;
