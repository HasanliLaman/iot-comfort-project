import Zoom from "react-medium-image-zoom";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getUsers } from "../../../server";
import StyleUsersTable from "./style";
import "react-medium-image-zoom/dist/styles.css";

library.add(faSpinner);

const UsersTable = () => {
  const { data, isLoading, isRefetching } = useQuery(["roomsData"], getUsers);

  return (
    <StyleUsersTable>
      <header>
        <h2>Users</h2>
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
                <th>Avatar</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Added at</th>
              </tr>
            </thead>
            <tbody>
              {data.data.data.map((user) => (
                <tr key={user._id}>
                  <td>
                    <Zoom>
                      <img
                        className="avatar"
                        alt="room"
                        src={`http://192.168.43.159:8081/${user.profileImage}`}
                      />
                    </Zoom>
                  </td>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.email}</td>
                  <td>{new Date(user.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </StyleUsersTable>
  );
};

export default UsersTable;
