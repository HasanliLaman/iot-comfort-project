import StyleBuildingInfo from "./style";
import buildingImg from "../../../assets/images/building.png";
import bulletGreen from "../../../assets/images/bullet-green.svg";
import bulletYellow from "../../../assets/images/bullet-yellow.svg";

const BuildingInfo = () => {
  return (
    <StyleBuildingInfo>
      <img src={buildingImg} alt="Main building" />
      <article>
        <h1>My home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      </article>
      <ul>
        <li>
          <img src={bulletGreen} alt="Bullet" />
          <span>3</span>
          <p>Rooms</p>
        </li>
        <li>
          <img src={bulletYellow} alt="Bullet" />
          <span>10</span>
          <p>Devices</p>
        </li>
      </ul>
    </StyleBuildingInfo>
  );
};

export default BuildingInfo;
