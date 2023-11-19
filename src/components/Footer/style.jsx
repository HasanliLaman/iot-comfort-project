import styled from "styled-components";
import bgImg180 from "../../assets/images/home-bg180.svg";

const StyleFooter = styled.footer`
  & > div {
    border-radius: 24px 24px 0 0;
    background-image: url(${bgImg180});
    background-repeat: no-repeat;
    padding: 3rem 0 2.5rem;
    background-color: var(--color-bg);
    color: var(--color-grey-0);
    font-weight: var(--fw-semibold);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-position-y: -40px;
  }

  @media (min-width: 768px) {
    & > div {
      background-position-y: 0;
      font-size: 1.8rem;
    }
  }
`;

export default StyleFooter;
