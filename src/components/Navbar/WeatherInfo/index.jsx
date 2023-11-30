import axios from "axios";
import { useQuery } from "@tanstack/react-query";
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

  const fetchWeatherData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=48.6637576&lon=6.1569145&appid=131db94e7bda55b6d4b4ac04ccdefb49`;
    const response = await axios.get(url);
    return response.data;
  };

  const { data } = useQuery(["weatherData"], fetchWeatherData);

  console.log(data);

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
      {data && (
        <ul>
          <li>
            <div className="card-image">
              <img src={iconTermometer} alt="temperature icon" />
            </div>
            <article>
              <p>{data.weather[0].description}</p>
              <span>{Math.round(data.main.temp - 272.15)} °</span>
            </article>
          </li>
          <li>
            <div className="card-image">
              <img src={iconHumidity} alt="humidity icon" />
            </div>
            <article>
              <p>Humidity</p>
              <span>{data.main.humidity} %</span>
            </article>
          </li>
        </ul>
      )}
    </StyleWeatherInfo>
  );
};

export default WeatherInfo;
