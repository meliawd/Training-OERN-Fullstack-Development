import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="container d-flex justify-content-center flex-column align-items-center">
        <div className="col-md-5">
          <img
            src="images/not found.svg"
            alt="404 Not Found"
            className="img-fluid"
            style={{ width: "400px", height: "auto" }}
          />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center">
          <h1 className="text-center py-4">404 Not Found</h1>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
