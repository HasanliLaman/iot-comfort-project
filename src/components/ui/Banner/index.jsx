/* eslint-disable react/prop-types */
import StyleBanner from "./style";
import Container from "../Container";
import iconBack from "../../../assets/images/icon-back.svg";

const Banner = ({ name }) => {
  return (
    <StyleBanner>
      <Container>
        <div className="btn-back">
          <img src={iconBack} alt="go back" />
        </div>
        <h3>{name}</h3>
      </Container>
    </StyleBanner>
  );
};

export default Banner;
