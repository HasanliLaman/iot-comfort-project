import Zoom from "react-medium-image-zoom";
import StyleUsersTable from "./style";
import avatar from "../../../assets/images/aipl.jpg";
import "react-medium-image-zoom/dist/styles.css";
import UsersCreate from "../UsersCreate";
import UsersEdit from "../UsersEdit";

const UsersTable = () => {
  return (
    <StyleUsersTable>
      <header>
        <h2>Users</h2>
        <UsersCreate />
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
                <UsersEdit />
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
                <UsersEdit />
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
                <UsersEdit />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyleUsersTable>
  );
};

export default UsersTable;
