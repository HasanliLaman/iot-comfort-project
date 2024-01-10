import { useEffect } from "react";
import UsersTable from "../../components/UsersAdmin/UsersTable";
import StyleUsers from "./style";

const Users = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ComfortPie | Users";
  }, []);

  return (
    <StyleUsers>
      <UsersTable />
    </StyleUsers>
  );
};

export default Users;
