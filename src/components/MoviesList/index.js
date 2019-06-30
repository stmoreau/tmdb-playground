import React, { useContext } from "react";
import { StoreContext } from "../../Store/Context";
import MovieCard from "../MovieCard";
import "./MoviesList.css";

const MoviesList = () => {
  const { state } = useContext(StoreContext);
  const { displayedMovies } = state;

  return (
    <div className="MoviesList">
      {displayedMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
