import './App.css';
import {
  Routes, Route, Outlet, Link,
} from 'react-router-dom';

import Categories from './components/Categories';
import Books from './components/Books';

function App() {
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
          <Route path="/books" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<Books />} />
        </Routes>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
