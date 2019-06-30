import React from "react";
import MovieCard from "../MovieCard";
import "./MoviesList.css";

const MoviesList = ({ movies }) => (
  <div className="MoviesList">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);

export default MoviesList;
