// Poster.js
import { Link } from "react-router-dom";
import React from "react";

export const Poster = (props) => {    

  
  return (
    <>
      {props.movies.map((movie, index) => {
        // Check if the movie has a poster_path
        if (!movie.poster_path) {
          // If no poster_path, skip rendering this movie
          return null;
        }

        // Render the movie details
        return (
          <Link to={`/info/${movie.id}`} className="movie text-decoration-none text-reset" >
        
          <div className="" key={index}>

            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            ></img>
            <div className="movie-info overview">
              <h5 className="mx-2 mt-2 mr-auto ">{movie.title}</h5>

              {movie.vote_average >= 8 ? (
                <h6 className="font-weight-bold my-2 mx-2">
                  Average Rating:{" "}
                  <span className="text-success">{movie.vote_average}</span>
                </h6>
              ) : movie.vote_average >= 6 ? (
                <h6 className="font-weight-bold my-2 mx-2">
                  Average Rating:{" "}
                  <span className="text-warning">{movie.vote_average}</span>
                </h6>
              ) : (
                <h6 className="font-weight-bold my-2 mx-2">
                  Average Rating:{" "}
                  <span className="text-danger">{movie.vote_average}</span>
                </h6>
              )}
            </div>


              
            </div>
          </Link>
        );
      })}
    </>
  );
};
