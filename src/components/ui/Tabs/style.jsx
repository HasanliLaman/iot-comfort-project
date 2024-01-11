import styled from "styled-components";

const StyleTabs = styled.ul`
  margin-bottom: 4rem;
  font-weight: var(--fw-semibold);
  font-size: 1.8rem;

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  li {
    text-align: center;
    cursor: pointer;
    padding-bottom: 1.5rem;
  }

  .active-tab {
    border-bottom: 3px solid var(--color-blue-500);
    color: var(--color-blue-500);
  }

  @media (min-width: 768px) {
    margin-bottom: 5rem;
    & > div {
      width: 45rem;
    }
  }
`;

export default StyleTabs;
