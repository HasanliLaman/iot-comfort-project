import { useEffect } from "react";
import FilterFeatures from "../../components/FilterFeatures";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import RoomContainer from "../../components/RoomContainer";
import StyleHomePage from "./style";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ComfortPie";
  }, []);

  return (
    <StyleHomePage>
      <Navbar />
      <FilterFeatures />
      <RoomContainer />
      <Footer />
    </StyleHomePage>
  );
};

export default HomePage;
