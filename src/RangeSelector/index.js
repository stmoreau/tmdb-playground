import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import "./RangeSelector.css";

const STEP = 0.5;
const MIN = 0;
const MAX = 10;

const RangeSelector = () => {
  const [values, setValues] = useState([3, 10]);

  return (
    <div className="RangeSelector">
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={values => setValues(values)}
        renderTrack={({ props, children }) => (
          <div className="RangeSelector__container">
            <div
              className="RangeSelector__track"
              ref={props.ref}
              style={{
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#548BF4", "#ccc"],
                  min: MIN,
                  max: MAX
                })
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <div className="RangeSelector__thumb-container" {...props}>
            <div className="RangeSelector__thumb-content">
              {values[index].toFixed(1)}
            </div>
            <div
              className="RangeSelector__thumb-i"
              style={{
                backgroundColor: isDragged ? "#548BF4" : "#CCC"
              }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default RangeSelector;
