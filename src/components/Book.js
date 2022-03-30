/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { bookRemoved } from '../redux/books/books';

function mapDispatchToProps(dispatch) {
  return {
    onRemove: (book) => {
      dispatch(bookRemoved(book));
    },
  };
}

const Book = ({ book }) => (
  <li key={book.id}>
    <section>
      <hgroup>
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
      </hgroup>
      <button type="button">Remove</button>
    </section>
  </li>
);

export default connect(null, mapDispatchToProps)(Book);
