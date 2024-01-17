import { useState, useEffect } from 'react';

const URL = "https://api.themoviedb.org/3";
const API_KEY = "api_key=222a22720c2f89ae5997bf196aa0e85d";

export const API = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("popularity");

  const getMoviesFromAPI = async () => {
    let API_URL = "";

    if (search === "") {
      API_URL = `${URL}/discover/movie?sort_by=${searchTerm}.desc&${API_KEY}`;
    } else {
      API_URL = `${URL}/search/movie?query=${encodeURIComponent(search)}&${API_KEY}`;
    }

    

    try {
      const response = await fetch(API_URL);
      const responseJson = await response.json();

      setMovies(responseJson.results);

    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getMoviesFromAPI();
  }, [search, searchTerm]);

  return {
    movies,
    search,
    setSearch,
    searchTerm,
    setSearchTerm
  };
};

export const API_Movie = (id) =>{
  const [movie_id, setMovie_id] = useState();
  let MOVIE_URL = `${URL}/movie/${id}?append_to_response=videos,credits&${API_KEY}`;
  
  
  const API_get = async() => {
    try{
    const responseMovie = await fetch(MOVIE_URL)
    const responseJsonMovie = await responseMovie.json();

    setMovie_id(responseJsonMovie);

  } catch (error) {
    console.error("Error fetching movies:", error);
  };

}
  useEffect(() => {
    API_get();
  }, []);

  return{
    movie_id
  }

};