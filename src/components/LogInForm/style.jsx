import styled from "styled-components";

const StyleLogInForm = styled.form`
  padding-top: 2.4rem;
  display: flex;
  flex-direction: column;

  .error-message {
    color: var(--color-red-500);
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2rem;
    margin-top: 1rem;
  }

  button {
    outline: 0;
    border: 0;
    color: var(--color-grey-0);
    padding: 1.3rem;
    border-radius: 1.4rem;
    background: var(--color-blue-500);
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2rem;
    margin-top: 2.4rem;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
  }

  input {
    outline: 0;
    border-radius: 1.4rem;
    border: 1px solid var(--color-grey-200);
    background: var(--color-grey-0);
    padding: 1.32rem 1.4rem;
    width: 100%;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }

  .password-field {
    border-radius: 1.4rem;
    border: 1px solid var(--color-grey-200);
    background: var(--color-grey-0);
    display: flex;
    margin-top: 2.4rem;

    img {
      margin-right: 1.4rem;
      cursor: pointer;
    }

    input {
      border: 0;
    }
  }

  button:hover {
    background: var(--color-blue-700);
  }

  @media (min-width: 768px) {
    input {
      font-size: 1.6rem;
      line-height: 2.4rem;
      padding: 1.41rem 1.7rem;

      &::placeholder {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }
    }

    .password-field {
      img {
        margin-right: 1.7rem;
      }
    }

    .error-message {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    button {
      padding: 1.7rem;
    }
  }
`;

export default StyleLogInForm;
