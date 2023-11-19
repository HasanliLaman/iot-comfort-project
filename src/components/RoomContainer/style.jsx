import styled from "styled-components";

const StyleRoomContainer = styled.section`
  padding: 0 0 5rem;

  & > div {
    display: grid;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    padding: 0 0 9rem;

    & > div {
      grid-template-columns: repeat(2, 1fr);
      gap: 2.4rem;
    }
  }

  @media (min-width: 992px) {
    & > div {
      grid-template-columns: repeat(3, 1fr);
      gap: 2.4rem;
    }
  }
`;

export default StyleRoomContainer;
