import StyleRoomCard from "./style";
import roomImage from "../../../assets/images/room-template.jpg";
import bulletBlue from "../../../assets/images/bullet-blue.svg";
import { Link } from "react-router-dom";

const RoomCard = () => {
  return (
    <Link to={`rooms/${1}`}>
      <StyleRoomCard>
        <article>
          <p>Living Room</p>
          <div className="device-tag">
            <img src={bulletBlue} alt="Bullet" />
            <p>3 devices</p>
          </div>
        </article>
        <img src={roomImage} alt="Room" />
      </StyleRoomCard>
    </Link>
  );
};

export default RoomCard;
