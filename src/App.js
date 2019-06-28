import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [movies, setMovies] = useState([]);

  async function fetchData() {
    await axios("/.netlify/functions/getMovies")
      .then(res => setMovies(res.data.movies))
      .catch(error => console.error(error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(movies);

  return (
    <div>
      {movies.map(movie => (
        <div>{movie.title}</div>
      ))}
    </div>
  );
};

export default App;
