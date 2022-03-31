import React from 'react';
import './App.css';
import {
  Routes, Route, Outlet, Link,
} from 'react-router-dom';

import Categories from './components/Categories';
import Books from './components/Books';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      status: false,
    };
  }

  render() {
    const { books, categories, status } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <ul className="d-flex">
              <Link className="App-link" to="/books">
                Books
              </Link>
              <Link className="App-link" to="/categories">
                Categories
              </Link>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/books" element={<Books books={books} />} />
            <Route
              path="/categories"
              element={<Categories categories={categories} status={status} />}
            />
            <Route path="*" element={<Books books={books} />} />
          </Routes>
          <Outlet />
        </main>
      </div>
    );
  }
}

export default App;
