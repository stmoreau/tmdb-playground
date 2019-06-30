import React, { useState, useEffect } from "react";
import axios from "axios";
import MoviesList from "../MoviesList";
import "./Content.css";

const Content = () => {
  const [movies, setMovies] = useState([]);

  async function fetchData() {
    await axios("/.netlify/functions/getMovies")
      .then(res => setMovies(res.data.movies))
      .catch(error => console.error(error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Content">
      <MoviesList movies={movies} />
    </div>
  );
};

export default Content;
