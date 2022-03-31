const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';

const defaultState = [
  {
    title: 'power book ii',
    author: '50 cent',
    id: 0,
  },
  {
    title: 'ghost',
    author: '50 cent',
    id: 1,
  },
  {
    title: 'the last kingdom',
    author: 'Keanu Reeves',
    id: 2,
  },
];

export const bookAdded = (newBook) => ({
  type: BOOK_ADDED,
  book: newBook,
});
export const bookRemoved = (id) => ({
  type: BOOK_REMOVED,
  id,
});

export default function books(prevState = defaultState, action) {
  switch (action.type) {
    case BOOK_ADDED:
      return [...prevState, action.book];
    case BOOK_REMOVED:
      return prevState.filter((book) => book.id !== action.id);

    default:
      return prevState;
  }
}
