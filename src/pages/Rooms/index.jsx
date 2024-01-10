import { useEffect } from "react";
import RoomsTable from "../../components/RoomsAdmin/RoomsTable";
import StyleRooms from "./style";

const Rooms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ComfortPie | Rooms";
  }, []);

  return (
    <StyleRooms>
      <RoomsTable />
    </StyleRooms>
  );
};

export default Rooms;
