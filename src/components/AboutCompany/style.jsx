import styled from "styled-components";

const StyleAboutCompany = styled.section`
  padding: 5rem 0 7rem;

  & > div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 100%;
    border-radius: 2rem;
  }

  .info-block {
    display: grid;
    flex-direction: column;
  }

  article {
    text-align: center;
    box-shadow: var(--box-shadow-card);
    border-radius: 2rem;
    padding: 2.5rem 2.5rem 3.5rem;
    transform: translateY(-70px);
    background: var(--color-grey-0);
    margin: 0 2.5rem;

    h2 {
      font-size: 2.4rem;
      margin-bottom: 0.6rem;
    }
  }

  .building-map {
    display: flex;
    align-items: center;
    gap: 4rem;
    text-align: center;
    flex-direction: column;

    h2 {
      font-size: 3rem;
    }
  }

  @media (min-width: 768px) {
    .building-map {
      gap: 5rem;

      img {
        max-width: 80rem;
      }

      h2 {
        font-size: 3.5rem;
      }
    }
  }

  @media (min-width: 992px) {
    padding: 9rem 0 14rem;

    & > div {
      gap: 11rem;
    }

    .info-block {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

    .info-block:first-of-type {
      article {
        margin-left: -60px;
      }
    }

    .info-block:nth-of-type(2) {
      article {
        grid-column: 1/2;
        grid-row: 1/2;
        margin-right: -60px;
      }

      img {
        grid-column: 2/3;
      }
    }

    article {
      transform: translateY(0);
      font-size: 1.8rem;

      h2 {
        font-size: 2.8rem;
        margin-bottom: 0.8rem;
      }
    }
  }
`;

export default StyleAboutCompany;
