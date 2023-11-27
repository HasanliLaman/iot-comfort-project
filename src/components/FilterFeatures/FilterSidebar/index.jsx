/* eslint-disable react/prop-types */
import StyleFilterSidebar from "./style";
import iconClose from "../../../assets/images/icon-close.svg";
import { RangeSlider } from "rsuite";

const FilterSidebar = ({ closeFilter, isOpen }) => {
  return (
    <StyleFilterSidebar className={isOpen ? "open-slider" : ""}>
      <h3>Filter</h3>
      <div onClick={closeFilter} className="btn-close">
        <img alt="close" src={iconClose} />
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="temperature">Temperature</label>
          <span>6</span>
          <RangeSlider id="temperature" name="temperature" min={0} max={50} />
        </div>
        <div className="form-group">
          <label htmlFor="humidity">Humidity</label>
          <span>6</span>
          <RangeSlider id="humidity" name="humidity" min={0} max={50} />
        </div>
        <div className="form-group">
          <label htmlFor="light">Light intensity</label>
          <span>6</span>
          <RangeSlider id="light" name="light" min={0} max={50} />
        </div>
        <div className="form-group">
          <label htmlFor="sound">Sound</label>
          <span>6</span>
          <RangeSlider id="sound" name="sound" min={0} max={50} />
        </div>
        <button type="submit">Done</button>
      </form>
    </StyleFilterSidebar>
  );
};

export default FilterSidebar;
