import styled from "styled-components";

const StyleLogIn = styled.section`
  background: #fafafa;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    transform: translateY(-15%);
    width: 100%;
    max-width: 500px;

    h2 {
      font-family: var(--font-title);
      font-size: 2.6rem;
      font-weight: 700;
      line-height: 3.4rem;
      margin-bottom: 1rem;
    }

    & > p {
      color: var(--color-grey-600);
      font-size: 1.4rem;
      line-height: 2rem;
      font-weight: 500;
    }

    & > p,
    h2 {
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    & > div {
      h2 {
        font-size: 3.4rem;
        line-height: 4.2rem;
        margin-bottom: 1.4rem;
      }

      & > p {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }
    }
  }
`;

export default StyleLogIn;
