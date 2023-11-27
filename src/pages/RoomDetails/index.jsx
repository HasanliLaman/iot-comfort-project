import Banner from "../../components/ui/Banner";
import Footer from "../../components/Footer";
import RoomFeatures from "../../components/RoomFeatures";
import Statistics from "../../components/Statisctics";
import StyleRoomDetails from "./style";

const RoomDetails = () => {
  return (
    <StyleRoomDetails>
      <Banner name="Living room" />
      <RoomFeatures />
      <Statistics />
      <Footer />
    </StyleRoomDetails>
  );
};

export default RoomDetails;
