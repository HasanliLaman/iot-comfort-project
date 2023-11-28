import styled from "styled-components";

const StyleBuildingInfo = styled.section`
  display: flex;
  align-items: center;
  padding: 0.8rem;
  border-radius: 2rem;
  background: var(--color-grey-0);
  box-shadow: var(--box-shadow);
  gap: 1.8rem;
  color: var(--color-grey-600);

  h1 {
    text-transform: capitalize;
    font-size: 2rem;
    line-height: 3rem;
    color: var(--color-grey-800);
  }

  p {
    font-size: 1.4rem;
    line-height: 2rem;
  }

  article {
    padding: 0.8rem;
    display: flex;
    flex-direction: column;
  }

  img {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 1.6rem;
  }

  ul {
    display: none;
  }

  li {
    line-height: 2.4rem;
    font-weight: var(--fw-medium);
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 1.2rem 1.8rem;
    border-radius: 14px;
    border: 1.5px solid var(--color-grey-150);
  }

  li span {
    color: var(--color-grey-700);
    font-weight: var(--fw-bold);
  }

  li img {
    width: 1.4rem;
    height: 1.4rem;
    margin-right: 0.6rem;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    gap: 1.6rem;
    padding: 1.2rem 2.4rem 1.2rem 1.2rem;

    article {
      padding: 0rem;
    }

    h1 {
      font-size: 2.2rem;
      line-height: 3.3rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 2.8rem;
    }

    article {
      gap: 0.6rem;
    }

    img {
      width: 13rem;
      height: 10rem;
    }

    ul {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      justify-self: end;
    }
  }
`;

export default StyleBuildingInfo;
