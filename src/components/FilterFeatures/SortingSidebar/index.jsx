/* eslint-disable react/prop-types */
import StyleSortingSidebar from "./style";
import iconClose from "../../../assets/images/icon-close.svg";
import { Slider } from "rsuite";
import { useState, useEffect } from "react";
import "rsuite/dist/rsuite.min.css";

const SortingSidebar = ({ closeSorting, isOpen, sortValue, setSortValue }) => {
  const [temperatureValue, setTemperatureValue] = useState(sortValue[0]);
  const [humidityValue, setHumidityValue] = useState(sortValue[1]);
  const [soundValue, setSoundValue] = useState(sortValue[2]);
  const [lightValue, setLightValue] = useState(sortValue[3]);

  useEffect(() => {
    setTemperatureValue(sortValue[0]);
    setHumidityValue(sortValue[1]);
    setSoundValue(sortValue[2]);
    setLightValue(sortValue[3]);
  }, [sortValue, isOpen]);

  const onReset = () => {
    setSortValue([9, 9, 9, 9]);
  };

  const onSubmitSort = () => {
    setSortValue([temperatureValue, humidityValue, soundValue, lightValue]);
    closeSorting();
  };

  return (
    <StyleSortingSidebar className={isOpen ? "open-slider" : ""}>
      <h3>Sorting</h3>
      <div onClick={closeSorting} className="btn-close">
        <img alt="close" src={iconClose} />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitSort();
        }}
      >
        <div className="form-group">
          <label htmlFor="temperatureS">Temperature</label>
          <Slider
            id="temperatureS"
            name="temperatureS"
            value={temperatureValue}
            min={0}
            step={1}
            max={9}
            graduated
            progress
            onChange={(val) => setTemperatureValue(val)}
            renderMark={(mark) => {
              return mark;
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="humidityS">Humidity</label>
          <Slider
            id="humidityS"
            name="humidityS"
            value={humidityValue}
            min={0}
            step={1}
            max={9}
            graduated
            progress
            onChange={(val) => setHumidityValue(val)}
            renderMark={(mark) => {
              return mark;
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lightS">Light intensity</label>
          <Slider
            id="lightS"
            name="lightS"
            value={lightValue}
            min={0}
            step={1}
            max={9}
            graduated
            progress
            onChange={(val) => setLightValue(val)}
            renderMark={(mark) => {
              return mark;
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="soundS">Sound</label>
          <Slider
            id="soundS"
            name="soundS"
            value={soundValue}
            min={0}
            step={1}
            max={9}
            graduated
            progress
            onChange={(val) => setSoundValue(val)}
            renderMark={(mark) => {
              return mark;
            }}
          />
        </div>
        <div className="buttons">
          <button
            onClick={(e) => {
              e.preventDefault();
              onReset();
            }}
            className="reset-btn"
          >
            Reset
          </button>
          <button type="submit">Sort</button>
        </div>
      </form>
    </StyleSortingSidebar>
  );
};

export default SortingSidebar;
