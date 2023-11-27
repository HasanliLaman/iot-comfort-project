import styled from "styled-components";

const StyleRoomFeatures = styled.section`
  padding: 4rem 0 6rem;

  & > div {
    display: grid;
    gap: 3rem;
  }

  @media (min-width: 992px) {
    padding: 6rem 0;

    & > div {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default StyleRoomFeatures;
