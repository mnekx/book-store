/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { bookRemoved } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <li key={book.id}>
      <section>
        <hgroup>
          <h1>{book.title}</h1>
          <h2>{book.author}</h2>
        </hgroup>
        <button type="button" onClick={() => dispatch(bookRemoved(book.id))}>
          Remove
        </button>
      </section>
    </li>
  );
};
export default Book;
