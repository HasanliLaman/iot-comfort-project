import { css } from "styled-components";

const Modal = css`
  .rs-modal-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rs-modal-content {
    padding: 3rem;
  }

  .rs-modal {
    margin: 0;
  }

  .rs-modal-header h4 {
    font-weight: 600;
    font-size: 2.6rem;
    line-height: 3.2rem;
    color: #40464d;
  }

  .rs-modal-footer button {
    font-size: 1.6rem;
    padding: 1rem;
    width: 100px;
  }

  .alarm-modal .rs-modal-content {
    background-color: red;
  }
`;

export default Modal;
