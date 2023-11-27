import styled from "styled-components";

const StyleStatisticsGraph = styled.div`
  height: 300px;
  padding: 2rem;
  background: var(--color-grey-0);
  padding: 0 1rem 1rem;
  box-shadow: 0px 4px 20px -2px rgba(50, 50, 71, 0.02),
    0px 0px 5px 0px rgba(12, 26, 75, 0.04);

  @media (min-width: 576px) {
    height: 400px;
  }

  @media (min-width: 768px) {
    height: 450px;
    padding: 0 2rem 2rem;
  }
`;

export default StyleStatisticsGraph;
