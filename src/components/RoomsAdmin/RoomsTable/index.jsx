import Zoom from "react-medium-image-zoom";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { api } from "../../../server";
import RoomsEdit from "../RoomsEdit";
import StyleRoomsTable from "./style";
import roomImg from "../../../assets/images/room-template.jpg";
import "react-medium-image-zoom/dist/styles.css";
import RoomsCreate from "../RoomsCreate";

library.add(faSpinner);

const RoomsTable = () => {
  const fetchData = async () => {
    const response = await api.get("/room-info");
    return response.data;
  };

  const { data, isLoading, refetch } = useQuery(["roomsData"], fetchData);
  console.log(data);
  return (
    <StyleRoomsTable>
      <header>
        <h2>Rooms</h2>
        <RoomsCreate refetch={refetch} />
      </header>
      {isLoading ? (
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
              {/* {data.data.map(room=>)} */}
              <tr>
                <td>
                  <Zoom>
                    <img alt="room" src={roomImg} />
                  </Zoom>
                </td>
                <td>Room 5</td>
                <td>78</td>
                <td>67</td>
                <td>09</td>
                <td>56</td>
                <td>45</td>
                <td>7</td>
                <td>
                  <RoomsEdit />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </StyleRoomsTable>
  );
};

export default RoomsTable;
