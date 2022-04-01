import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import AddBook from './AddBook';
import { booksRetieved } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(booksRetieved());
  }, [dispatch]);
  const { list, loading, failed } = useSelector(
    (state) => state.books,
    shallowEqual,
  );

  if (loading) {
    return <span>...Loading</span>;
  }
  if (failed) {
    return <span>There is an error</span>;
  }
  return (
    <div>
      <ul>
        {list.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>

      <AddBook />
    </div>
  );
};

export default Books;
