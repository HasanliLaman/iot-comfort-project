import styled from "styled-components";

const StyleStatistics = styled.section`
  padding: 0 0 6rem;

  & > div {
    display: grid;
    gap: 3rem;
  }

  @media (min-width: 992px) {
    padding: 0 0 10rem;

    & > div {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default StyleStatistics;
