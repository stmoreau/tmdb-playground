import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { initialState, reducer, types } from "../../Store/Reducer";
import { StoreContext } from "../../Store/Context";
import Main from "../Main";
import Loading from "../Loading";
import "normalize.css";
import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function fetchData() {
    await dispatch({
      type: types.SET_LOADING,
      payload: true
    });
    await axios("/.netlify/functions/getMovies")
      .then(res => {
        dispatch({
          type: types.SET_ALL_MOVIES,
          payload: res.data.movies
        });
        dispatch({
          type: types.SET_GENRES,
          payload: res.data.genres
        });
        dispatch({
          type: types.SHOW_MOVIES
        });
      })
      .catch(error => console.error(error));
    await dispatch({
      type: types.SET_LOADING,
      payload: false
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {state.isLoading ? (
        <Loading />
      ) : (
        <div className="App">
          <Main />
        </div>
      )}
    </StoreContext.Provider>
  );
};

export default App;
