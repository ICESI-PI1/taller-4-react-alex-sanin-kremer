import React from 'react';

function Authors() {
  // Replace this with actual author data or fetching logic
  const authors = [
    { id: 1, name: 'Author 1', country: 'Country 1' },
    { id: 2, name: 'Author 2', country: 'Country 2' },
    { id: 3, name: 'Author 3', country: 'Country 3' },
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Authors</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id}>
              <th scope="row">{author.id}</th>
              <td>{author.name}</td>
              <td>{author.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Authors;
