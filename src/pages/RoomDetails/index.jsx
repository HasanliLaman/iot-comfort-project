import { useEffect } from "react";
import Banner from "../../components/ui/Banner";
import Footer from "../../components/Footer";
import RoomFeatures from "../../components/RoomFeatures";
import Statistics from "../../components/Statisctics";
import StyleRoomDetails from "./style";

const RoomDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ComfortPie | Room Details";
  }, []);

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
