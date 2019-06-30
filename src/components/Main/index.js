import React from "react";
import FilterMenu from "../FilterMenu";
import Content from "../Content";
import "./Main.css";

const Main = () => (
  <div className="Main">
    <FilterMenu />
    <Content />
  </div>
);

export default Main;
