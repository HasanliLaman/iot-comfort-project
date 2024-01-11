/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import StyleRoomDetails from "./style";
import iconSocket from "../../../assets/images/icon-socket.svg";
import iconActiveSocket from "../../../assets/images/icon-socket-active.svg";
import iconPC from "../../../assets/images/icon-pc.svg";
import iconChair from "../../../assets/images/icon-chair.svg";
import iconAdditional from "../../../assets/images/icon-additional.svg";
import iconMarker from "../../../assets/images/icon-marker.svg";

library.add(faSpinner);

const RoomDetails = ({ isLoading, isRefetching, data }) => {
  return (
    <StyleRoomDetails>
      <h3>Room facilities</h3>
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
        <div className="details">
          <div>
            <p>
              <img src={iconSocket} alt="icon" />
              Total sockets:
            </p>
            <span>{data.data.roomInfo.nSockets}</span>
          </div>
          <div>
            <p>
              <img src={iconPC} alt="icon" />
              Computers:
            </p>
            <span>{data.data.roomInfo.nComputers}</span>
          </div>
          <div>
            <p>
              <img src={iconActiveSocket} alt="icon" />
              Active sockets:
            </p>
            <span>{data.data.roomInfo.nAvailableSockets}</span>
          </div>
          <div>
            <p>
              <img src={iconChair} alt="icon" />
              Chairs:
            </p>
            <span>{data.data.roomInfo.nChairs}</span>
          </div>
          <div>
            <p>
              <img src={iconMarker} alt="icon" />
              Markers:
            </p>
            <span>{data.data.roomInfo.nMarkerPens}</span>
          </div>
          <div>
            <p>
              <img src={iconAdditional} alt="icon" />
              Additional:
            </p>
            <span>{data.data.roomInfo.additionalFacilities}</span>
          </div>
        </div>
      )}
    </StyleRoomDetails>
  );
};

export default RoomDetails;
