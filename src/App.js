import React from 'react';
import './App.css';
import {
  Routes, Route, Outlet, Link,
} from 'react-router-dom';

import Categories from './components/Categories';
import Books from './components/Books';

import '@fortawesome/fontawesome-free/js/all';

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
          <nav className="container d-flex">
            <div className="logo">
              <h1>BookStore CMS</h1>
            </div>
            <ul className="d-flex App-Links">
              <Link className="App-link" to="/books">
                Books
              </Link>
              <Link className="App-link" to="/categories">
                Categories
              </Link>
            </ul>
            <div className="acc-container d-flex">
              <span className="Oval d-flex">
                <i className="fas fa-user fa-2x" />
              </span>
            </div>
          </nav>
        </header>
        <main className="container">
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
