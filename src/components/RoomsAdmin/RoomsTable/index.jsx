import Zoom from "react-medium-image-zoom";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getRoomsAdmin } from "../../../server";
import RoomsEdit from "../RoomsEdit";
import StyleRoomsTable from "./style";
import "react-medium-image-zoom/dist/styles.css";
import RoomsCreate from "../RoomsCreate";

library.add(faSpinner);

const RoomsTable = () => {
  const { data, isLoading, isRefetching, refetch } = useQuery(
    ["roomsData"],
    getRoomsAdmin
  );

  return (
    <StyleRoomsTable>
      <header>
        <h2>Rooms</h2>
        <RoomsCreate refetch={refetch} />
      </header>
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
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Sockets</th>
                <th>Active Sockets</th>
                <th>Computers</th>
                <th>Markers</th>
                <th>Chairs</th>
                <th>Additional</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((room) => (
                <tr key={room._id}>
                  <td>
                    <Zoom>
                      <img
                        className="room-img"
                        alt="room"
                        src={`http://167.71.39.204:8081/${room.roomImage}`}
                      />
                    </Zoom>
                  </td>
                  <td>Room {room.roomNumber}</td>
                  <td>{room.nSockets}</td>
                  <td>{room.nAvailableSockets}</td>
                  <td>{room.nComputers}</td>
                  <td>{room.nMarkerPens}</td>
                  <td>{room.nChairs}</td>
                  <td>{room.additionalFacilities}</td>
                  <td>
                    <RoomsEdit room={room} id={room._id} refetch={refetch} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </StyleRoomsTable>
  );
};

export default RoomsTable;
