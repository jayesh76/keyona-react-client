import React from "react";
import { Link } from "react-router-dom";

const CreateBookButton = (data) => {
  return (
    <React.Fragment>
      <Link to="/addBook" className="btn btn-lg btn-info">
      {data.name}
      </Link>
    </React.Fragment>
  );
};

export default CreateBookButton;
