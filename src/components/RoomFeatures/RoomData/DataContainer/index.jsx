import DataCard from "../DataCard";
import StyleDataContainer from "./style";
import iconTemperature from "../../../../assets/images/icon-termometer.svg";
import iconHumidity from "../../../../assets/images/icon-humidity.svg";
import iconLight from "../../../../assets/images/icon-light.svg";
import iconSound from "../../../../assets/images/icon-sound.svg";

const DataContainer = () => {
  return (
    <StyleDataContainer>
      <DataCard name="Temperature" icon={iconTemperature} value="34° C" />
      <DataCard name="Humidity" icon={iconHumidity} value="45%" />
      <DataCard name="Light intensity" icon={iconLight} value="76" />
      <DataCard name="Sound" icon={iconSound} value="56 dB" />
    </StyleDataContainer>
  );
};

export default DataContainer;
