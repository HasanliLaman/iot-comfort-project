import StyleRoomFeatures from "./style";
import Container from "../ui/Container";
import RoomDetails from "./RoomDetails";
import DataContainer from "./RoomData/DataContainer";

const RoomFeatures = () => {
  return (
    <StyleRoomFeatures>
      <Container>
        <DataContainer />
        <RoomDetails />
      </Container>
    </StyleRoomFeatures>
  );
};

export default RoomFeatures;
