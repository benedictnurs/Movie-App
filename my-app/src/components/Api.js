import { useState, useEffect } from 'react';

export const API = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("popularity");

  const getMoviesFromAPI = async () => {
    const URL = "https://api.themoviedb.org/3";
    const API_KEY = "api_key=222a22720c2f89ae5997bf196aa0e85d";
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
    setSearchTerm,
  };
};

