import React from "react";
import { useLocation, Link } from "react-router-dom";

const ViewAuthorDetails = (_) => {
  const { state } = useLocation();

  return (
    <div>
      <div>
        <div>
          <strong>Author Id:</strong> {state.author.id}{" "}
        </div>
        <div>
          <strong>Name:</strong> {state.author.name}{" "}
        </div>
        <div>
          <strong>Nationality:</strong> {state.author.nationality}{" "}
        </div>
      </div>
      <Link to="/authors">
      <button className='btn btn-primary'>Back</button>
      </Link>
      <Link to={{
                pathname: `/authors/${state.author.id}/books`,
                state: { state }
              }}>
            <button className='btn btn-primary'>View Author's Books</button>
            </Link>
    </div>
  );
};

export default ViewAuthorDetails;