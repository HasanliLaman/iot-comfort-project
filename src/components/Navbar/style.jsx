import styled from "styled-components";
import bgImg from "../../assets/images/home-bg.svg";

const StyleNavbar = styled.nav`
  & > div {
    border-radius: 0px 0px 24px 24px;
    background-color: var(--color-bg);
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 3rem 3rem 0 3rem;

    & > section:last-of-type {
      transform: translateY(50%);
      margin-top: -3rem;
    }
  }
`;

export default StyleNavbar;
