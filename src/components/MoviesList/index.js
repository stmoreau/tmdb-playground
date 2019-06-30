import React, { useContext } from "react";
import { StoreContext } from "../../Store/Context";
import MovieCard from "../MovieCard";
import "./MoviesList.css";

const MoviesList = () => {
  const { state } = useContext(StoreContext);
  const { movies } = state;

  return (
    <div className="MoviesList">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
