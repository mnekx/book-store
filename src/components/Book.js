import React from 'react';

/* eslint-disable react/prop-types */
const Book = (props) => {
  const { title, author } = props;
  return (
    <li>
      <section>
        <hgroup>
          <h1>{title}</h1>
          <h2>{author}</h2>
        </hgroup>
        <button type="button">Remove</button>
      </section>
    </li>
  );
};

export default Book;
