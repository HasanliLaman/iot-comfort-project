/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import StyleBanner from "./style";
import Container from "../Container";
import iconBack from "../../../assets/images/icon-back.svg";

const Banner = ({ name }) => {
  return (
    <StyleBanner>
      <Container>
        <Link to="/" className="btn-back">
          <img src={iconBack} alt="go back" />
        </Link>
        <h3>{name}</h3>
      </Container>
    </StyleBanner>
  );
};

export default Banner;
