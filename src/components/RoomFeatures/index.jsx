/* eslint-disable react/prop-types */
import StyleRoomFeatures from "./style";
import Container from "../ui/Container";
import RoomDetails from "./RoomDetails";
import DataContainer from "./RoomData/DataContainer";

const RoomFeatures = ({ data, isLoading, isRefetching }) => {
  return (
    <StyleRoomFeatures>
      <Container>
        <DataContainer
          data={data}
          isLoading={isLoading}
          isRefetching={isRefetching}
        />
        <RoomDetails
          data={data}
          isLoading={isLoading}
          isRefetching={isRefetching}
        />
      </Container>
    </StyleRoomFeatures>
  );
};

export default RoomFeatures;
