import styled from "styled-components";

const StyleDataContainer = styled.section`
  border-radius: 20px;
  background: var(--color-grey-0);
  box-shadow: var(--box-shadow-card);
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
