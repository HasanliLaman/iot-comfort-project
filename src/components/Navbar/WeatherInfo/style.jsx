import styled from "styled-components";

const StyleWeatherInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ul {
    display: grid;
    padding: 2rem;
    border-radius: 1.4rem;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: var(--box-shadow);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
  }

  ul:last-child {
    grid-template-columns: repeat(2, 1fr);
  }

  li {
    display: flex;
    align-items: center;
    gap: 2rem;

    span {
      font-size: 1.8rem;
      line-height: 2.8rem;
      color: var(--color-grey-0);
      font-weight: var(--fw-bold);
    }

    p {
      font-size: 1.2rem;
      line-height: 1.6rem;
      color: var(--color-grey-300);
    }

    article {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;

      p {
        text-transform: capitalize;
      }
    }

    .card-image {
      width: 5rem;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1.6rem;
      background: rgba(255, 251, 246, 0.1);
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
    }

    img {
      width: 3rem;
      height: 3rem;
    }
  }

  @media (min-width: 768px) {
    gap: 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    ul:last-of-type {
      max-width: 460px;
      gap: 4rem;
    }

    ul:first-of-type li span {
      font-size: 2rem;
      line-height: 3rem;
    }

    li {
      p {
        font-size: 1.4rem;
        line-height: 2rem;
        color: var(--color-grey-150);
      }

      article {
        gap: 0.4rem;
      }

      span {
        font-size: 2.4rem;
        line-height: 3rem;
      }
    }
  }

  @media (min-width: 992px) {
    li {
      .card-image {
        width: 6rem;
        height: 6rem;
      }
      img {
        width: 4rem;
        height: 4rem;
      }
    }

    ul:first-of-type li span {
      font-size: 2.4rem;
      line-height: 3rem;
    }
  }
`;

export default StyleWeatherInfo;
