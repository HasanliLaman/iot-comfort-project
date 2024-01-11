import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoomInfo } from "../../server";
import Banner from "../../components/ui/Banner";
import Footer from "../../components/Footer";
import RoomFeatures from "../../components/RoomFeatures";
import Statistics from "../../components/Statisctics";
import StyleRoomDetails from "./style";
import Predictions from "../../components/Statisctics/Predictions";
import Tabs from "../../components/ui/Tabs";

const RoomDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ComfortPie | Room Details";
  }, []);

  const { id } = useParams();
  const { data, isLoading, isRefetching } = useQuery(["roomInfo"], () =>
    getRoomInfo(id)
  );

  const [currentTab, setCurrentTab] = useState("statistics");

  return (
    <StyleRoomDetails>
      <Banner name={`Room ${data?.data?.roomInfo?.roomNumber || ""}`} />
      <RoomFeatures
        data={data}
        isLoading={isLoading}
        isRefetching={isRefetching}
      />
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === "prediction" && <Predictions />}
      {currentTab === "statistics" && data?.data && (
        <Statistics roomNumber={data?.data?.roomInfo?.roomNumber} />
      )}
      <Footer />
    </StyleRoomDetails>
  );
};

export default RoomDetails;
