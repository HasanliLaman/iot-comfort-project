import styled from "styled-components";

const StyleStatisticsGraph = styled.div`
  height: 300px;
  padding: 2rem;
  background: var(--color-grey-0);
  padding: 0 1rem 1rem;
  box-shadow: var(--box-shadow-card);

  @media (min-width: 576px) {
    height: 400px;
  }

  @media (min-width: 768px) {
    height: 450px;
    padding: 0 2rem 2rem;
  }
`;

export default StyleStatisticsGraph;
