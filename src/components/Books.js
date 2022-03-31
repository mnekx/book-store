/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const mapStateToProps = (state) => ({ books: state.books });

const Books = ({ books }) => (
  <div>
    <ul>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </ul>
    <AddBook />
  </div>
);

export default connect(mapStateToProps, null)(Books);
