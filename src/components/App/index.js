import React, { useContext } from "react";
import { StoreContext } from "../../Store/Context";
import Header from "../Header";
import Main from "../Main";
import Loading from "../Loading";
import "normalize.css";
import "./App.css";

const App = () => {
  const { state } = useContext(StoreContext);
  const { isLoading, movies, genres } = state;

  return isLoading ? (
    <Loading />
  ) : (
    <div className="App">
      <Header />
      <Main movies={movies} genres={genres} />
    </div>
  );
};

export default App;
