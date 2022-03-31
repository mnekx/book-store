/* eslint-disable react/prop-types */
import { shallowEqual, useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const books = useSelector((state) => state.books, shallowEqual);
  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
