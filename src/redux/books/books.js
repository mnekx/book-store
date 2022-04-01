/* eslint-disable camelcase */
import { generate } from 'randomized-string';
import BooksService from '../../services/books-service';

const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';
const BOOKS_RETRIEVED = 'BOOKS_RETRIEVED';
const BOOKS_FETCH_STARTED = 'BOOKS_FETCH_STARTED';
const BOOKS_FETCH_FAILED = 'BOOKS_FETCH_FAILED';

const defaultState = {
  list: [],
  loading: true,
  failed: false,
};

export const bookAdded = (newBook) => async (dispatch) => {
  try {
    const item_id = generate({ charset: 'number', length: 5 });

    const { author, title } = newBook;
    const category = 'Fiction';
    await BooksService.create({
      item_id,
      author,
      title,
      category,
    });
    dispatch({
      type: BOOK_ADDED,
      book: newBook,
    });
    return Promise.resolve(newBook);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const bookRemoved = (id) => async (dispatch) => {
  try {
    await BooksService.remove(id);
    dispatch({ type: BOOK_REMOVED, id });
    return Promise.resolve(id);
  } catch (error) {
    return Promise.resolve(error);
  }
};

export const booksRetieved = () => async (dispatch) => {
  dispatch({ type: BOOKS_FETCH_STARTED });
  try {
    const res = await BooksService.getAll();
    const arr = Object.entries(res.data);

    const newArr = [];

    arr.forEach((book) => newArr.push({
      id: book[0],
      author: book[1][0].author,
      title: book[1][0].title,
    }));
    dispatch({
      type: BOOKS_RETRIEVED,
      books: newArr,
    });
    return Promise.resolve(newArr);
  } catch (error) {
    return Promise.resolve(error);
  }
};

export default function books(prevState = defaultState, action) {
  switch (action.type) {
    case BOOK_ADDED:
      return {
        list: [...prevState.list, action.book],
        failed: false,
        loading: false,
      };
    case BOOK_REMOVED:
      return {
        list: prevState.list.filter((book) => book.id !== action.id),
        failed: false,
        loading: false,
      };
    case BOOKS_FETCH_FAILED:
      return { ...prevState, failed: true, loading: false };
    case BOOKS_FETCH_STARTED:
      return { ...prevState, failed: false, loading: true };
    case BOOKS_RETRIEVED:
      return { list: action.books, failed: false, loading: false };

    default:
      return prevState;
  }
}
