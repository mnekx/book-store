/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { bookAdded } from '../redux/books/books';

function mapStateToProps(state) {
  return {
    nextID: state.books.length,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddBook: (e) => {
      e.preventDefault();
      let arr = Array.from(e.target.elements);
      arr = arr.filter((el) => el.name !== '');
      arr = arr.map((el) => [el.name, el.value]);
      const map = new Map(arr);
      dispatch(bookAdded(Object.fromEntries(map)));
    },
  };
}

const AddBook = ({ onAddBook, nextID }) => (
  <form action="" onSubmit={onAddBook}>
    <fieldset>
      <legend>Add new Book</legend>
      <label htmlFor="title">
        <input type="text" id="title" name="title" placeholder="Book Title" />
      </label>
      <input type="hidden" value={nextID} name="id" />
      <label htmlFor="author">
        <input type="text" id="author" name="author" placeholder="Author" />
      </label>
      <button type="submit">Add Book</button>
    </fieldset>
  </form>
);

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
