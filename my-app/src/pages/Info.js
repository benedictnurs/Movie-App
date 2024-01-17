import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../components/Header.js';
import { API_Movie } from '../components/Api.js';
import { MapData } from '../components/MappedData.js';

export const Info = () => {
  const { id } = useParams();
  const movie_details = API_Movie(id);
  const movie = movie_details.movie_id;
  


  if (typeof movie === 'undefined') {
    console.log('Error');

    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  } else {
  
    console.log(movie);
    return (
      <>
        <Header />


        <div className="d-flex justify-content-center">


          <div className="movie-size ">
          <h1 className="py-3">{movie.original_title}</h1>

          
          <iframe
            scrolling="no"
            src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}>
          </iframe>


          <h6 className="pt-2 ">{movie.overview}</h6>


          <div className="pt-4 ">
            <div className="row col-12">
              <div className="col"><span className="bold">Release Date: </span>{movie.release_date}</div>
              <div className="col"><span className="bold">Duration: </span>{movie.runtime} min</div>
                  <div className="w-100"></div>
              <div className="col"><MapData data={movie.genres} name = "Genres"/></div>
              <div className="col"><span className="bold">Revenue: </span>${movie.revenue.toLocaleString()}</div>
                  <div className="w-100"></div>
              <div className="col"><MapData data={movie.production_companies} name = "Production Companies  "/></div>
              <div className="col pb-5"><MapData data={movie.credits.cast} name = "Actors"/></div>

                       
            </div>
          </div>
        </div>
        
        </div>
        
      </>
    );
  }
};
