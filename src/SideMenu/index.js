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
    <CheckboxList
      checkboxes={[
        {
          id: 28,
          name: "Action"
        },
        {
          id: 12,
          name: "Adventure"
        },
        {
          id: 16,
          name: "Animation"
        }
      ]}
    />
  </div>
);

export default SideMenu;
