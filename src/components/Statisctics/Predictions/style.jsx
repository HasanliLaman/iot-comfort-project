import styled from "styled-components";

const StylePredictions = styled.section`
  padding: 0 0 6rem;

  & > div {
    display: grid;
    gap: 3rem;
  }

  @media (min-width: 768px) {
    & > div > div {
      height: 600px;
    }
  }

  @media (min-width: 992px) {
    padding: 0 0 10rem;
  }
`;

export default StylePredictions;
