/* eslint-disable react/prop-types */
import StyleRoomCard from "./style";
import bulletBlue from "../../../assets/images/bullet-blue.svg";
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  return (
    <Link to={`rooms/${room._id}`}>
      <StyleRoomCard>
        <article>
          <p>Room {room.roomNumber}</p>
          <div className="device-tag">
            <img src={bulletBlue} alt="Bullet" />
            <p>
              {+room.additionalFacilities +
                room.nChairs +
                room.nMarkerPens +
                room.nComputers +
                room.nSockets +
                room.nAvailableSockets}{" "}
              Facilities
            </p>
          </div>
        </article>
        <img src={`http://167.71.39.204:8081/${room.roomImage}`} alt="Room" />
      </StyleRoomCard>
    </Link>
  );
};

export default RoomCard;
