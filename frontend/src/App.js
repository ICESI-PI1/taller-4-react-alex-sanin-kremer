import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import MainPage from './MainPage';
import Books from './Books';
import Auth from './Authors';
import 'bootstrap/dist/css/bootstrap.min.css';
import Authors from './Authors';
import ViewBookDetails from './ViewBookDetails';
import ViewAuthorDetails from './ViewAuthorDetails';
import ViewAuthorBooks from './ViewAuthorBooks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<MainPage user={{displayName: 'John'}} />} />
        <Route path="/" element={<Login />} />
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
        <Route
              exact
              path="/books/:id"
              component={ViewBookDetails}
            />
        <Route
              exact
              path="/authors/:id"
              component={ViewAuthorDetails}
            />
        <Route
              exact
              path="/authors/:id/books"
              component={ViewAuthorBooks}
            />
      </Routes>
    </Router>
  );
}

export default App;
