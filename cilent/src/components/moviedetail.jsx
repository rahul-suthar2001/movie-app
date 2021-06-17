import React, { useState, useEffect } from "react";
import { show ,deletemovie} from "../services/api";
import { useHistory,useParams } from "react-router-dom";

const Movie = () => {


  const [Movie, setMovie] = useState([]);
  const { id } = useParams();
  let history = useHistory();
  console.log(id);
  
  useEffect(() => {
    loadMovieDetails();
  }, []);

  const loadMovieDetails = async () => {
    const response = await show(id);
    setMovie(response.data);
  };
 
  const deleteMovieData = async (id) => {
    await deletemovie(id);
    history.push(`/movies`);
  
}


  return (
    <div>
      <div className="container col-8 mt-5 ">
        <div className="row">
          <div className="col-md-10 col-md-offset-6  ">
            <div className="card text-center" key={Movie._id}>
              <div className="card-header">Information About Movie</div>
              <img src="https://images.unsplash.com/photo-1561722798-9a732d141027?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" className="card-img-top" alt="..."/>
              <div className="card-body">
                <div className="card">
                  <h3 className="card-title">Movie Name : {Movie.MovieName}</h3>
                  <ul className="list-group list-group-flush">
                  <li className="list-group-item">Language : {Movie.Language}</li>
                  <li className="list-group-item">Release Date: {Movie.RDate}</li>
                    <li className="list-group-item">Budget : {Movie.Budget}</li>
                    <li className="list-group-item">
                      Movie Collection : {Movie.Collection}
                    </li>
                    <li className="list-group-item">
                        <p className='card-text'>
                      Movie Review : {Movie.Review}
                      </p>
                    </li>
                  </ul>
                </div>

                <a href={`/movies/${Movie._id}/edit`} className="btn btn-info mt-5">
                  Edit
                </a>
               <button className='btn btn-danger mt-5 mx-3' onClick={() => deleteMovieData(id)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
