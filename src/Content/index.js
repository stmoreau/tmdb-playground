import React from "react";
import MoviesList from "../MoviesList";
import "./Content.css";

const Content = ({ movies, genres }) => (
  <div className="Content">
    <MoviesList movies={movies} genres={genres} />
  </div>
);

export default Content;
