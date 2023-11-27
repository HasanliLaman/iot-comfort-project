import StyleRoomDetails from "./style";
import iconSocket from "../../../assets/images/icon-socket.svg";
import iconActiveSocket from "../../../assets/images/icon-socket-active.svg";
import iconPC from "../../../assets/images/icon-pc.svg";
import iconChair from "../../../assets/images/icon-chair.svg";
import iconAdditional from "../../../assets/images/icon-additional.svg";
import iconMarker from "../../../assets/images/icon-marker.svg";

const RoomDetails = () => {
  return (
    <StyleRoomDetails>
      <h3>Room facilities</h3>
      <div className="details">
        <div>
          <p>
            <img src={iconSocket} alt="icon" />
            Total sockets:
          </p>
          <span>12</span>
        </div>
        <div>
          <p>
            <img src={iconPC} alt="icon" />
            Computers:
          </p>
          <span>38</span>
        </div>
        <div>
          <p>
            <img src={iconActiveSocket} alt="icon" />
            Active sockets:
          </p>
          <span>7</span>
        </div>
        <div>
          <p>
            <img src={iconChair} alt="icon" />
            Chairs:
          </p>
          <span>56</span>
        </div>
        <div>
          <p>
            <img src={iconMarker} alt="icon" />
            Markers:
          </p>
          <span>3</span>
        </div>
        <div>
          <p>
            <img src={iconAdditional} alt="icon" />
            Additional:
          </p>
          <span>13</span>
        </div>
      </div>
    </StyleRoomDetails>
  );
};

export default RoomDetails;
