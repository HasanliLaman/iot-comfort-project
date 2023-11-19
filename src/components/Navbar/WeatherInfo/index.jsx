import StyleWeatherInfo from "./style";
import iconTermometer from "../../../assets/images/icon-termometer.svg";
import iconHumidity from "../../../assets/images/icon-humidity.svg";
import iconCalendar from "../../../assets/images/icon-calendar.svg";

const WeatherInfo = () => {
  const dateOptions = {
    month: "long",
    day: "numeric",
  };

  const weekdayOptions = {
    weekday: "long",
  };

  return (
    <StyleWeatherInfo>
      <ul>
        <li>
          <div className="card-image">
            <img src={iconCalendar} alt="temperature icon" />
          </div>
          <article>
            <p>{new Date().toLocaleDateString("en-us", weekdayOptions)}</p>
            <span>{new Date().toLocaleDateString("en-us", dateOptions)}</span>
          </article>
        </li>
      </ul>
      <ul>
        <li>
          <div className="card-image">
            <img src={iconTermometer} alt="temperature icon" />
          </div>
          <article>
            <p>Partly Cloudy</p>
            <span>23 °</span>
          </article>
        </li>
        <li>
          <div className="card-image">
            <img src={iconHumidity} alt="humidity icon" />
          </div>
          <article>
            <p>Humidity</p>
            <span>66 °</span>
          </article>
        </li>
      </ul>
    </StyleWeatherInfo>
  );
};

export default WeatherInfo;
