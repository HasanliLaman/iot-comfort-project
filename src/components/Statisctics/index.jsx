/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import {
  getTemperatureReport,
  getHumidityReport,
  getLightReport,
  getSoundReport,
} from "../../server";
import StatisticsGraph from "./StatisticsGraph";
import StyleStatistics from "./style";
import Container from "../ui/Container";
import { getLast24Hours } from "../../utils/timeUtils";

library.add(faSpinner);

const Statistics = ({ roomNumber }) => {
  const labels = getLast24Hours();

  const {
    data: dataTemperature,
    isLoading: isLoadingTemperature,
    isRefetching: isRefetchingTemperature,
  } = useQuery(["temperatureReportData"], () =>
    getTemperatureReport(roomNumber)
  );

  const {
    data: dataHumidity,
    isLoading: isLoadingHumidity,
    isRefetching: isRefetchingHumidity,
  } = useQuery(["humidityReportData"], () => getHumidityReport(roomNumber));

  const {
    data: dataLight,
    isLoading: isLoadingLight,
    isRefetching: isRefetchingLight,
  } = useQuery(["lightReportData"], () => getLightReport(roomNumber));

  const {
    data: dataSound,
    isLoading: isLoadingSound,
    isRefetching: isRefetchingSound,
  } = useQuery(["soundReportData"], () => getSoundReport(roomNumber));

  return (
    <StyleStatistics>
      <Container>
        {isLoadingTemperature || isRefetchingTemperature ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FontAwesomeIcon
              icon="fa-spinner"
              spin
              style={{
                margin: "5rem 0",
                color: "#ccc",
                fontSize: "5rem",
              }}
            />
          </div>
        ) : (
          <StatisticsGraph
            labels={labels}
            name="Temperature"
            dataset={dataTemperature.data.map((el) => el.averageTemperature)}
            color="#F5BA41"
          />
        )}
        {isLoadingHumidity || isRefetchingHumidity ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FontAwesomeIcon
              icon="fa-spinner"
              spin
              style={{
                margin: "5rem 0",
                color: "#ccc",
                fontSize: "5rem",
              }}
            />
          </div>
        ) : (
          <StatisticsGraph
            labels={labels}
            name="Humidity"
            dataset={dataHumidity.data.map((el) => el.averageHumidity)}
            color="#1B85F3"
          />
        )}
        {isLoadingLight || isRefetchingLight ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FontAwesomeIcon
              icon="fa-spinner"
              spin
              style={{
                margin: "5rem 0",
                color: "#ccc",
                fontSize: "5rem",
              }}
            />
          </div>
        ) : (
          <StatisticsGraph
            labels={labels}
            name="Light Intensity"
            dataset={dataLight.data.map((el) => el.averageLightIntensity)}
            color="#FC5A5A"
          />
        )}
        {isLoadingSound || isRefetchingSound ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FontAwesomeIcon
              icon="fa-spinner"
              spin
              style={{
                margin: "5rem 0",
                color: "#ccc",
                fontSize: "5rem",
              }}
            />
          </div>
        ) : (
          <StatisticsGraph
            labels={labels}
            name="Sound"
            dataset={dataSound.data.map((el) => el.averageSoundSensor)}
            color="#82C43C"
          />
        )}
      </Container>
    </StyleStatistics>
  );
};

export default Statistics;
