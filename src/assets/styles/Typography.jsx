import { css } from "styled-components";

const Typography = css`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: var(--font-body);
    font-size: 1.6rem;
    font-weight: var(--fw-regular);
    line-height: 2.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-title);
    font-weight: var(--fw-bold);
  }

  h2 {
    font-size: 3.4rem;
    line-height: 4.2rem;
  }

  h3 {
    font-size: 2.6rem;
    line-height: 3.4rem;
  }

  h4 {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }

  h5 {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }

  @media (min-width: 768px) {
    h2 {
      font-weight: var(--fw-semibold);
      font-size: 3.6rem;
      line-height: 4.2rem;
    }
  }
`;

export default Typography;
