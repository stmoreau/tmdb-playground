import React from "react";
import MovieCard from "../MovieCard";
import "./MoviesList.css";

const MoviesList = ({ movies, genres }) => (
  <div className="MoviesList">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} genres={genres} />
    ))}
  </div>
);

export default MoviesList;
