import styled from "styled-components";

const StyleRoomsTable = styled.div`
  padding: 4rem 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;

    h2 {
      color: var(--color-grey-800);
    }

    button {
      color: var(--color-grey-0);
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2rem;
      border: 0;
      outline: 0;
      border-radius: 2rem;
      background: var(--color-blue-500);
      padding: 1rem 2.5rem;
      cursor: pointer;
      transition: 0.5s;
      margin-top: auto;

      &:hover {
        background: var(--color-blue-700);
      }
    }
  }

  .table-container {
    overflow-x: auto;
    padding: 1.7rem 2.5rem;
    background: var(--color-grey-0);
    box-shadow: var(--box-shadow-card);
    border-radius: 1.2rem;
  }

  .room-img {
    width: 3rem;
    object-fit: cover;
  }

  img {
    height: 1.9rem;
    border-radius: 2px;
    vertical-align: middle;
    margin-bottom: 1.5px;
    cursor: pointer;
  }

  table {
    width: 100%;
  }

  th,
  td {
    padding: 1.3rem 1rem;
    text-align: center;
    white-space: nowrap;
  }

  td {
    color: var(--color-grey-700);
  }

  th {
    font-weight: var(--fw-semibold);
    border-bottom: 2px solid var(--color-grey-150);
    padding-bottom: 1.7rem;
  }

  tr:first-of-type td {
    padding-top: 2.2rem;
  }

  @media (min-width: 768px) {
    padding: 5rem 3rem 4rem;
  }
`;

export default StyleRoomsTable;
