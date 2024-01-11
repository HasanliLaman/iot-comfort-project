import { Link } from "react-router-dom";
import StyleBuildingInfo from "./style";
import buildingImg from "../../../assets/images/aipl.jpg";
import bulletGreen from "../../../assets/images/bullet-green.svg";
import bulletYellow from "../../../assets/images/bullet-yellow.svg";

const BuildingInfo = () => {
  return (
    <StyleBuildingInfo>
      <Link to="/about">
        <img src={buildingImg} alt="Main building" />
      </Link>
      <article>
        <Link to="/about">
          <h1>AIP Primeca Lorraine</h1>
        </Link>
        <p>745 Rue du Jardin-Botanique, 54600 Villers-lès-Nancy</p>
      </article>
      <ul>
        <li>
          <img src={bulletGreen} alt="Bullet" />
          <span>12</span>
          <p>Rooms</p>
        </li>
        <li>
          <img src={bulletYellow} alt="Bullet" />
          <span>6</span>
          <p>Staff Members</p>
        </li>
      </ul>
    </StyleBuildingInfo>
  );
};

export default BuildingInfo;
