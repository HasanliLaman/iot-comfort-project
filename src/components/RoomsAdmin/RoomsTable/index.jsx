import Zoom from "react-medium-image-zoom";
import StyleRoomsTable from "./style";
import roomImg from "../../../assets/images/room-template.jpg";
import iconEdit from "../../../assets/images/icon-edit.svg";
import "react-medium-image-zoom/dist/styles.css";

const RoomsTable = () => {
  return (
    <StyleRoomsTable>
      <header>
        <h2>Rooms</h2>
        <button>Add New</button>
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
                <img alt="edit" src={iconEdit} />
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
                <img alt="edit" src={iconEdit} />
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
                <img alt="edit" src={iconEdit} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyleRoomsTable>
  );
};

export default RoomsTable;
