/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import DataCard from "../DataCard";
import StyleDataContainer from "./style";
import iconTemperature from "../../../../assets/images/icon-termometer.svg";
import iconHumidity from "../../../../assets/images/icon-humidity.svg";
import iconLight from "../../../../assets/images/icon-light.svg";
import iconSound from "../../../../assets/images/icon-sound.svg";

library.add(faSpinner);

const DataContainer = ({ data, isLoading, isRefetching }) => {
  return (
    <StyleDataContainer>
      {isLoading || isRefetching ? (
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
        <>
          <DataCard
            name="Temperature"
            icon={iconTemperature}
            value={`${data.data.sensorData.temperature}° C`}
          />
          <DataCard
            name="Humidity"
            icon={iconHumidity}
            value={`${data.data.sensorData.humidity} %`}
          />
          <DataCard
            name="Light intensity"
            icon={iconLight}
            value={`${data.data.sensorData.lightIntensity}/100`}
          />
          <DataCard
            name="Sound"
            icon={iconSound}
            value={`${data.data.sensorData.soundSensor} dB`}
          />
        </>
      )}
    </StyleDataContainer>
  );
};

export default DataContainer;
