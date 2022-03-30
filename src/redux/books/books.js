const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';

export const bookAdded = (newBook) => ({
  type: BOOK_ADDED,
  book: newBook,
});
export const bookRemoved = (id) => ({
  type: BOOK_REMOVED,
  id,
});

export default function books(prevState = [], action) {
  const index = prevState.indexOf(action.book);
  switch (action.type) {
    case BOOK_ADDED:
      return [...prevState, action.book];
    case BOOK_REMOVED:
      return prevState
        .slice(0, index)
        .concat(prevState.slice(index + 1, prevState.length));

    default:
      return prevState;
  }
}
