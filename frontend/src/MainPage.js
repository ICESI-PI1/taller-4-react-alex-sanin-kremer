import React from 'react';
import { Link } from 'react-router-dom';

//let { state } = useLocation();

function MainPage({ user }) {
  return (
    <div className="main-page">
      <h2 className="display-4">Welcome, {user.displayName}!</h2>
      <Link to="/books">
        <button className='btn btn-primary'>View Books</button>
      </Link>
      <Link to="/authors">
        <button className='btn btn-primary'>View Authors</button>
      </Link>
    </div>
  );
}

export default MainPage;
