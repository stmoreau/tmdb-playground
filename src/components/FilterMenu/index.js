import React, { useState } from "react";
import RangeSelector from "../RangeSelector";
import CheckboxList from "../CheckboxList";
import "./FilterMenu.css";

const FilterMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className={`FilterMenu ${isExpanded ? "FilterMenu-expanded" : ""}`}
    >
      <div className="FilterMenu__title">Filters</div>
      <div className="FilterMenu__content">
        <div className="FilterMenu__subtitle">Rating</div>
        <RangeSelector />
        <div className="FilterMenu__subtitle">Genres</div>
        <CheckboxList />
      </div>
    </div>
  );
};

export default FilterMenu;
