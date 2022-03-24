const AddBook = () => (
  <form action="">
    <fieldset>
      <legend>Add new Book</legend>
      <label htmlFor="title">
        <input type="text" id="title" name="title" placeholder="Book Title" />
      </label>
      <label htmlFor="author">
        <input type="text" id="author" name="author" placeholder="Author" />
      </label>
      <button type="submit">Add Book</button>
    </fieldset>
  </form>
);

export default AddBook;
