import styled from "styled-components";

const StyleDataCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    text-transform: uppercase;
    font-size: 1.5rem;
    line-height: 2rem;
    opacity: 0.8;
  }

  span {
    font-size: 2.3rem;
    line-height: 3rem;
  }

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export default StyleDataCard;
