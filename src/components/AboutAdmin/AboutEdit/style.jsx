import styled from "styled-components";

const StyleUsersEdit = styled.div`
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

  input,
  textarea {
    outline: 0;
    border-radius: 1.4rem;
    border: 1px solid var(--color-grey-200);
    background: var(--color-grey-0);
    padding: 1.6rem;
    width: 100%;
    font-size: 1.4rem;
    line-height: 2rem;
  }

  textarea {
    resize: none;
  }

  .rs-modal-body {
    padding: 1rem 0 4rem;
    display: grid;
    gap: 2rem;
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

    .error-message {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }
`;

export default StyleUsersEdit;
