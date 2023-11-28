import styled from "styled-components";
import bgImg from "../../../assets/images/home-bg.svg";

const StyleBanner = styled.div`
  & > div {
    border-radius: 0px 0px 24px 24px;
    background-color: var(--color-bg);
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    color: var(--color-grey-0);
    background-position: 200px 20px;
  }

  .btn-back {
    display: flex;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.2);
    transition: all 0.5s;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  h3 {
    font-size: 2.3rem;
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 2.6rem;
    }

    .btn-back {
      width: 46px;
      height: 46px;
    }

    & > div {
      gap: 2.4rem;
      padding: 3rem;
      background-position: 200px -50px;
    }
  }
`;

export default StyleBanner;
