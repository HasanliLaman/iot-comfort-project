import styled from "styled-components";

const StyleDataContainer = styled.section`
  border-radius: 20px;
  background: var(--color-grey-0);
  box-shadow: 0px 4px 20px -2px rgba(50, 50, 71, 0.02),
    0px 0px 5px 0px rgba(12, 26, 75, 0.04);
  padding: 3rem 2rem;
  display: grid;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 3.5rem 2.5rem;
    gap: 3rem 2rem;
  }
`;

export default StyleDataContainer;
