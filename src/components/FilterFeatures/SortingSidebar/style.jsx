import styled from "styled-components";

const StyleSortingSidebar = styled.div`
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
    padding-top: 5rem;
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
      margin-top: auto;

      &:hover {
        background: var(--color-grey-800);
      }
    }
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 1.8rem;
    line-height: 2.2rem;

    .rs-slider-progress-bar {
      background-color: var(--color-grey-600);
    }

    .rs-slider-mark-content {
      font-weight: var(--fw-medium);
    }

    .rs-slider-handle:before {
      border: 2px solid var(--color-grey-700);
    }

    .rs-slider-graduator > ol > li.rs-slider-pass:before {
      border: 2px solid var(--color-grey-700);
    }
  }

  span {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 576px) {
    max-width: 380px;
  }
`;

export default StyleSortingSidebar;
