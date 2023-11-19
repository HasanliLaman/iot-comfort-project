import StyleRoomCard from "./style";
import roomImage from "../../../assets/images/room-template.jpg";
import bulletBlue from "../../../assets/images/bullet-blue.svg";

const RoomCard = () => {
  return (
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
  );
};

export default RoomCard;
