/* eslint-disable react/prop-types */
import StyleSortingSidebar from "./style";
import iconClose from "../../../assets/images/icon-close.svg";
import { Slider } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const SortingSidebar = ({ closeSorting, isOpen }) => {
  return (
    <StyleSortingSidebar className={isOpen ? "open-slider" : ""}>
      <h3>Sorting</h3>
      <div onClick={closeSorting} className="btn-close">
        <img alt="close" src={iconClose} />
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="temperatureS">Temperature</label>
          <Slider
            id="temperatureS"
            name="temperatureS"
            defaultValue={9}
            min={0}
            step={1}
            max={9}
            graduated
            progress
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
            defaultValue={9}
            min={0}
            step={1}
            max={9}
            graduated
            progress
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
            defaultValue={9}
            min={0}
            step={1}
            max={9}
            graduated
            progress
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
            defaultValue={9}
            min={0}
            step={1}
            max={9}
            graduated
            progress
            renderMark={(mark) => {
              return mark;
            }}
          />
        </div>
        <button type="submit">Done</button>
      </form>
    </StyleSortingSidebar>
  );
};

export default SortingSidebar;
