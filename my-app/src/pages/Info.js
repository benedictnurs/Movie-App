import React from 'react';
import {Link, useParams} from "react-router-dom";
import { Header } from '../components/Header.js';
import {API_Movie} from '../components/Api.js';

export const Info = () => {
  const {id} = useParams()
  const movie_details = API_Movie(id)
  const movie = movie_details.movie_id
  
  if (movie === "undefined") {
    console.log("Error")
  }
  console.log(movie)


  return (
    <>
      <Header/>
      <p>Movie ID {id}</p>

    </>
  );
};
