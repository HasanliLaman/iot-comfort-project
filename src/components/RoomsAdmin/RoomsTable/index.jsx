import Zoom from "react-medium-image-zoom";
import RoomsEdit from "../RoomsEdit";
import StyleRoomsTable from "./style";
import roomImg from "../../../assets/images/room-template.jpg";
import "react-medium-image-zoom/dist/styles.css";
import RoomsCreate from "../RoomsCreate";

const RoomsTable = () => {
  return (
    <StyleRoomsTable>
      <header>
        <h2>Rooms</h2>
        <RoomsCreate />
      </header>
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
            <tr>
              <td>
                <Zoom>
                  <img alt="room" src={roomImg} />
                </Zoom>
              </td>
              <td>Room 5</td>
              <td>6</td>
              <td>78</td>
              <td>67</td>
              <td>09</td>
              <td>45</td>
              <td>7</td>
              <td>
                <RoomsEdit />
              </td>
            </tr>
            <tr>
              <td>
                <Zoom>
                  <img alt="room" src={roomImg} />
                </Zoom>
              </td>
              <td>Room 5</td>
              <td>6</td>
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
    </StyleRoomsTable>
  );
};

export default RoomsTable;
