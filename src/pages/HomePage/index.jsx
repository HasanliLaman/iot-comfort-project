import FilterFeatures from "../../components/FilterFeatures";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import RoomContainer from "../../components/RoomContainer";
import StyleHomePage from "./style";

const HomePage = () => {
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
