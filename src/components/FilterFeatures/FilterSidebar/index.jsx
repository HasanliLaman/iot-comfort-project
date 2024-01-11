/* eslint-disable react/prop-types */
import { RangeSlider } from "rsuite";
import StyleFilterSidebar from "./style";
import iconClose from "../../../assets/images/icon-close.svg";
import { useEffect, useState } from "react";

const FilterSidebar = ({
  closeFilter,
  isOpen,
  setFilterValues,
  filterValues,
}) => {
  const [temperatureRange, setTemperatureRange] = useState(
    filterValues.temperature
  );
  const [soundRange, setSoundRange] = useState(filterValues.sound);
  const [humidityRange, setHumidityRange] = useState(filterValues.humidity);
  const [lightRange, setLightRange] = useState(filterValues.light);

  useEffect(() => {
    setHumidityRange(filterValues.humidity);
    setLightRange(filterValues.light);
    setSoundRange(filterValues.sound);
    setTemperatureRange(filterValues.temperature);
  }, [
    filterValues.humidity,
    filterValues.light,
    filterValues.sound,
    filterValues.temperature,
    isOpen,
  ]);

  const onSubmitFilter = () => {
    setFilterValues({
      temperature: temperatureRange,
      sound: soundRange,
      humidity: humidityRange,
      light: lightRange,
    });
    closeFilter();
  };

  const onReset = () => {
    setFilterValues({
      temperature: [0, 50],
      sound: [0, 100],
      humidity: [0, 100],
      light: [0, 100],
    });
  };

  return (
    <StyleFilterSidebar className={isOpen ? "open-slider" : ""}>
      <h3>Filter</h3>
      <div onClick={closeFilter} className="btn-close">
        <img alt="close" src={iconClose} />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitFilter();
        }}
      >
        <div className="form-group">
          <label htmlFor="temperature">Temperature</label>
          <span>
            {temperatureRange[0]}-{temperatureRange[1]}
          </span>
          <RangeSlider
            onChange={(range) => setTemperatureRange(range)}
            value={temperatureRange}
            id="temperature"
            name="temperature"
            min={0}
            max={50}
          />
        </div>
        <div className="form-group">
          <label htmlFor="humidity">Humidity</label>
          <span>
            {humidityRange[0]}-{humidityRange[1]}
          </span>
          <RangeSlider
            onChange={(range) => setHumidityRange(range)}
            value={humidityRange}
            id="humidity"
            name="humidity"
            min={0}
            max={100}
          />
        </div>
        <div className="form-group">
          <label htmlFor="light">Light intensity</label>
          <span>
            {lightRange[0]}-{lightRange[1]}
          </span>
          <RangeSlider
            onChange={(range) => setLightRange(range)}
            value={lightRange}
            id="light"
            name="light"
            min={0}
            max={100}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sound">Sound</label>
          <span>
            {soundRange[0]}-{soundRange[1]}
          </span>
          <RangeSlider
            onChange={(range) => setSoundRange(range)}
            value={soundRange}
            id="sound"
            name="sound"
            min={0}
            max={100}
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
          <button type="submit">Filter</button>
        </div>
      </form>
    </StyleFilterSidebar>
  );
};

export default FilterSidebar;
