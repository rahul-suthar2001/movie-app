import React, { useState, useEffect } from "react";
import { getmovie } from "../services/api";
import { Link } from "react-router-dom";

const AllMovie = () => {
  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    getAllMovie();
  }, []);

  const getAllMovie = async () => {
    let result = await getmovie();
    setMovie(result.data);
  };

  return (
    <div>
      {Movie.map((M) => (
        <div className="container col-4 mt-5">
          <div className="row">
            <div className="col-md-10 col-md-offset-6  ">
              <div className="card" key={M._id}>
                <img
                  src="https://images.unsplash.com/photo-1561722798-9a732d141027?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{M.MovieName}</h5>
                  <p className="card-text">{M.Budget}</p>
                  <p className="card-text">{M.Collection}</p>
                  <Link to={`/movies/${M._id}`} className="btn btn-primary">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllMovie;
