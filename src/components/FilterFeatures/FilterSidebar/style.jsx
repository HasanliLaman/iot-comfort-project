import styled from "styled-components";

const StyleFilterSidebar = styled.div`
  position: fixed;
  background-color: var(--color-grey-0);
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  padding: 2.2rem 3rem 2rem 2.5rem;
  z-index: 2;
  transition: all 0.5s;
  transform: translateX(-100%);
  display: flex;
  flex-direction: column;

  &.open-slider {
    transform: translateX(0%);
  }

  .btn-close {
    position: absolute;
    top: 3rem;
    right: 2.5rem;
    cursor: pointer;

    img {
      width: 2rem;
      height: 2rem;
    }
  }

  form {
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    flex-grow: 1;

    label {
      color: var(--color-grey-800);
      opacity: 0.85;
    }

    button {
      color: var(--color-grey-0);
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2rem;
      border: 0;
      outline: 0;
      border-radius: 1.4rem;
      background: var(--color-bg);
      padding: 1.3rem;
      cursor: pointer;
      transition: 0.5s;

      &:hover {
        background: var(--color-grey-800);
      }
    }

    .buttons {
      margin-top: auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .reset-btn {
      background: var(--color-grey-0);
      color: var(--color-bg);
      border: 1px solid var(--color-bg);

      &:hover {
        background: var(--color-grey-150);
      }
    }
  }

  .form-group {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    justify-content: space-between;
    font-size: 1.8rem;
    line-height: 2.2rem;
    row-gap: 1.5rem;

    .rs-slider {
      grid-column: 1/3;
    }

    .rs-slider-progress-bar {
      background-color: var(--color-grey-600);
    }

    .rs-slider-handle:before {
      border: 2px solid var(--color-grey-700);
    }
  }

  span {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 576px) {
    max-width: 380px;

    form {
      .buttons {
        flex-direction: row;

        button {
          flex: 1 1 0;
        }
      }
    }
  }
`;

export default StyleFilterSidebar;
