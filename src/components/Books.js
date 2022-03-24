import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => (
  <div>
    <ul>
      <Book title="Hunger Games" author="Suzanne Collins" />
      <Book title="Dune" author="Frank Hubbert" />
      <Book
        title="Capital in the twenty-first century"
        author="Suzanne Collins"
      />
    </ul>
    <AddBook />
  </div>
);

export default Books;
