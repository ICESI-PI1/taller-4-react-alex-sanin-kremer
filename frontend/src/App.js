import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import MainPage from './MainPage';
import Books from './Books';
import Auth from './Authors';
import 'bootstrap/dist/css/bootstrap.min.css';
import Authors from './Authors';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<MainPage user={{displayName: 'John'}} />} />
        <Route path="/" element={<Login />} />
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
      </Routes>
    </Router>
  );
}

export default App;
