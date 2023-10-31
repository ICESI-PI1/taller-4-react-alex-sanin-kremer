import React from 'react';

function Books() {
  // Replace this with actual book data or fetching logic
  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Books</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <th scope="row">{book.id}</th>
              <td>{book.title}</td>
              <td>{book.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Books;
