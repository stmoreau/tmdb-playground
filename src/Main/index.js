import React, { useState, useEffect } from "react";
import axios from "axios";
import SideMenu from "../SideMenu";
import Content from "../Content";
import Loading from "../Loading";
import "./Main.css";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    await setIsLoading(true);
    await axios("/.netlify/functions/getMovies")
      .then(res => {
        setMovies(res.data.movies);
        setGenres(res.data.genres);
      })
      .catch(error => console.error(error));
    await setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="Main">
      <>
        <SideMenu genres={genres} />
        <Content movies={movies} genres={genres} />
      </>
    </div>
  );
};

export default Main;
