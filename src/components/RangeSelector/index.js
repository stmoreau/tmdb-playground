import React, { useContext } from "react";
import { StoreContext } from "../../Store/Context";
import { types } from "../../Store/Reducer";
import { Range, getTrackBackground } from "react-range";
import "./RangeSelector.css";

const STEP = 0.5;
const MIN = 0;
const MAX = 10;

const RangeSelector = () => {
  const { state, dispatch } = useContext(StoreContext);
  const { ratingRange } = state;

  return (
    <div className="RangeSelector">
      <Range
        values={ratingRange}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={newRatingRange => {
          dispatch({
            type: types.CHANGE_RATING_RANGE,
            payload: newRatingRange
          });
          dispatch({
            type: types.SHOW_MOVIES
          });
        }}
        renderTrack={({ props, children }) => (
          <div className="RangeSelector__container">
            <div
              className="RangeSelector__track"
              ref={props.ref}
              style={{
                background: getTrackBackground({
                  values: ratingRange,
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
              {ratingRange[index]}
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
