import styled from "styled-components";

const StyleFilterFeatures = styled.section`
  padding: 9rem 0 3.2rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      border: 0;
      outline: 0;
      background: var(--color-grey-0);
      width: 100%;
      height: 5.4rem;
      border-radius: 1.4rem;
      border: 1px solid var(--color-grey-200);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.5s;
    }

    button:hover,
    button:focus {
      background: var(--color-grey-100);
    }
  }

  .search {
    display: flex;
    background: var(--color-grey-0);
    width: 100%;
    height: 5.4rem;
    border-radius: 1.4rem;
    border: 1px solid var(--color-grey-200);
    padding: 1.2rem 1.6rem;

    input {
      border: 0;
      outline: 0;
      flex: 1;
      color: var(--color-grey-600);
      font-size: 1.6rem;
    }

    input::placeholder {
      font-size: 1.6rem;
    }

    button {
      border: 0;
      outline: 0;
      background: var(--color-grey-0);
    }
  }

  img {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media (min-width: 768px) {
    padding: 11rem 0 3.2rem;

    & > div {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .search {
      max-width: 450px;
    }

    .buttons {
      button {
        width: 5.4rem;
      }
    }
  }
`;

export default StyleFilterFeatures;
