import styled from "styled-components";

const StyleRoomDetails = styled.section`
  border-radius: 20px;
  background: var(--color-grey-0);
  box-shadow: 0px 4px 20px -2px rgba(50, 50, 71, 0.02),
    0px 0px 5px 0px rgba(12, 26, 75, 0.04);
  padding: 2.5rem;
  font-size: 1.9rem;
  line-height: 2.6rem;
  display: grid;

  h3 {
    font-weight: var(--fw-semibold);
    font-size: 2.4rem;
    line-height: 3.2rem;
    margin-bottom: 1.5rem;
  }

  .details {
    display: grid;
    gap: 1.5rem;

    span {
      font-weight: var(--fw-semibold);
      color: var(--color-grey-800);
    }

    p {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      color: var(--color-grey-700);

      img {
        width: 2.3rem;
        height: 2.3rem;
      }
    }
  }

  .details > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    padding: 2.5rem 3rem 3rem;

    .details {
      grid-template-columns: 1fr 1fr;
      gap: 1rem 6rem;
    }
  }
`;

export default StyleRoomDetails;
