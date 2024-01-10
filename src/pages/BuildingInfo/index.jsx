import { useEffect } from "react";
import AboutTable from "../../components/AboutAdmin/AboutTable";
import StyleBuildingInfo from "./style";

const BuildingInfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ComfortPie | About";
  }, []);

  return (
    <StyleBuildingInfo>
      <AboutTable />
    </StyleBuildingInfo>
  );
};

export default BuildingInfo;
