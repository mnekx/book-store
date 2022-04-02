import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookAdded } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [state, setstate] = useState({ author: '', title: '' });

  const onAddBook = (e) => {
    e.preventDefault();
    dispatch(bookAdded(state));
    setstate(() => ({ author: '', title: '' }));
  };

  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <form className="add-book-form" onSubmit={(e) => onAddBook(e)}>
      <fieldset>
        <legend>Add new Book</legend>
        <div className="d-flex labels-container">
          <label htmlFor="title">
            <input
              type="text"
              id="title"
              onChange={handleChange}
              name="title"
              placeholder="Book Title"
              value={state.title}
            />
          </label>
          <label htmlFor="author">
            <input
              type="text"
              id="author"
              name="author"
              onChange={handleChange}
              placeholder="Author"
              value={state.author}
            />
          </label>
          <button className="btn" type="submit">
            Add Book
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default AddBook;
