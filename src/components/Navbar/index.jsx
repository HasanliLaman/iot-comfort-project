import Container from "../ui/Container";
import BuildingInfo from "./BuildingInfo";
import WeatherInfo from "./WeatherInfo";
import StyleNavbar from "./style";

const Navbar = () => {
  return (
    <StyleNavbar>
      <Container>
        <WeatherInfo />
        <BuildingInfo />
      </Container>
    </StyleNavbar>
  );
};

export default Navbar;
