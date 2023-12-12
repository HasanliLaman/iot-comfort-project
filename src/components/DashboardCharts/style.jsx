import styled from "styled-components";

const StyleDashboardCharts = styled.div`
  padding: 4rem 2rem;

  .card-container > div {
    display: grid;
    gap: 3rem;
  }

  .card {
    padding: 2rem 2.5rem;
    background: var(--color-grey-0);
    box-shadow: var(--box-shadow-card);
    border-radius: 1.2rem;
    width: 100%;

    canvas {
      width: 100% !important;
      height: 300px !important;
      margin-top: 2rem;
    }

    h3 {
      font-size: 1.7rem;
      line-height: 2.4rem;
    }
  }

  .doughnut canvas {
    max-width: 100%;
    width: auto !important;
    margin: 2rem auto 0;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;

    h2 {
      color: var(--color-grey-800);
      font-size: 3rem;
      line-height: 4rem;
    }
  }

  @media (min-width: 768px) {
    padding: 4rem 3rem 4rem;

    header {
      h2 {
        font-size: 3.6rem;
        line-height: 4.2rem;
      }
    }
  }

  @media (min-width: 995px) {
    padding: 4rem 3rem 4rem;

    .card-container > div {
      gap: 2.5rem;
    }

    .card-container > div:first-of-type {
      grid-template-columns: 1fr 1fr;

      canvas {
        height: 430px !important;
      }
    }

    .card-container > div:last-of-type {
      grid-template-columns: 1fr 1fr;
      margin-top: 3rem;

      canvas {
        height: 300px !important;
      }
    }
  }

  @media (min-width: 1200px) {
    .card-container > div:last-of-type {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default StyleDashboardCharts;
