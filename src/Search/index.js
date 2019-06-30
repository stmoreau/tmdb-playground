import React from "react";
import "./Search.css";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

const Search = () => (
  <div className="Search">
    <form>
      <input
        className="Search__input"
        type="text"
        placeholder="Search movies..."
      />
      <SearchIcon className="Search__icon" />
    </form>
  </div>
);

export default Search;
