import Container from "../ui/Container";
import RoomCard from "./RoomCard";
import StyleRoomContainer from "./style";

const RoomContainer = () => {
  return (
    <StyleRoomContainer>
      <Container>
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </Container>
    </StyleRoomContainer>
  );
};

export default RoomContainer;
