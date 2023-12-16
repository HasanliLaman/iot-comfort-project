import styled from "styled-components";

const StyleUsersCreate = styled.div`
  .error-message {
    color: var(--color-red-500);
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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

  .rs-modal-body {
    padding: 1rem 0 4rem;
    display: grid;
    gap: 1.5rem;
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

    .rs-modal-body {
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem 3rem;
    }

    .error-message {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }
`;

export default StyleUsersCreate;
