import Zoom from "react-medium-image-zoom";
import StyleUsersTable from "./style";
import avatar from "../../../assets/images/aipl.jpg";
import iconEdit from "../../../assets/images/icon-edit.svg";
import "react-medium-image-zoom/dist/styles.css";

const UsersTable = () => {
  return (
    <StyleUsersTable>
      <header>
        <h2>Users</h2>
        <button>Add New</button>
      </header>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Zoom>
                  <img className="avatar" alt="room" src={avatar} />
                </Zoom>
              </td>
              <td>Laman Hasanli</td>
              <td>hesenlileman2001@gmail.com</td>
              <td>+33745604541</td>

              <td>
                <img alt="edit" src={iconEdit} />
              </td>
            </tr>
            <tr>
              <td>
                <Zoom>
                  <img className="avatar" alt="room" src={avatar} />
                </Zoom>
              </td>
              <td>Laman Hasanli</td>
              <td>hesenlileman2001@gmail.com</td>
              <td>+33745604541</td>
              <td>
                <img alt="edit" src={iconEdit} />
              </td>
            </tr>
            <tr>
              <td>
                <Zoom>
                  <img className="avatar" alt="room" src={avatar} />
                </Zoom>
              </td>
              <td>Laman Hasanli</td>
              <td>hesenlileman2001@gmail.com</td>
              <td>+33745604541</td>

              <td>
                <img alt="edit" src={iconEdit} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyleUsersTable>
  );
};

export default UsersTable;
