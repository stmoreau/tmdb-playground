import React from "react";
import RangeSelector from "../RangeSelector";
import CheckboxList from "../CheckboxList";
import "./SideMenu.css";

const SideMenu = () => (
  <div className="SideMenu">
    <div className="SideMenu__title">Filters</div>
    <div className="SideMenu__subtitle">Rating</div>
    <RangeSelector />
    <div className="SideMenu__subtitle">Genres</div>
    <CheckboxList />
  </div>
);

export default SideMenu;
