import React from "react";
import { useLocation, Link } from "react-router-dom";

const ViewBookDetails = (_) => {
  const { state } = useLocation();

  return (
    <div>
      <div>
        <div>
          <strong>Id:</strong> {state.book.id}{" "}
        </div>
        <div>
          <strong>Title:</strong> {state.book.title}{" "}
        </div>
        <div>
          <strong>Publish Date:</strong> {state.book.date}{" "}
        </div>
        <div>
          <strong>Author Id:</strong> {state.book.author}{" "}
        </div>
      </div>

      <Link to="/books">
      <button className='btn btn-primary'>Back</button>
      </Link>
    </div>
  );
};

export default ViewBookDetails;