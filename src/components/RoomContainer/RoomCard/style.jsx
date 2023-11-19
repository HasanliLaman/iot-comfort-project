import styled from "styled-components";

const StyleRoomCard = styled.div`
  border-radius: 1.4rem;
  cursor: pointer;
  /* border: 1px solid #dde1e5; */
  background: var(--color-grey-0);
  box-shadow: 0px 3px 15px -1.5px rgba(50, 50, 71, 0.02),
    0px 0px 3.75px 0px rgba(12, 26, 75, 0.05);
  padding: 1.6rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  min-height: 11rem;
  overflow: hidden;
  transition: 0.5s;

  &:hover {
    transform: scale(1.025);
  }

  & > img {
    position: absolute;
    height: 15rem;
    width: 15rem;
    right: -4rem;
    top: -3rem;
    border-radius: 50%;
  }

  & article > p {
    font-weight: 600;
    font-size: 1.8rem;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .device-tag {
    color: var(--color-grey-700);
    font-size: 1.2rem;
    line-height: 1.6rem;
    padding: 0.2rem 0.7rem;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid var(--color-grey-150);
  }

  .device-tag img {
    width: 1.4rem;
    height: 1.4rem;
    margin-right: 0.6rem;
  }

  @media (min-width: 768px) {
    border-radius: 2rem;
    padding: 3rem;
    min-height: 24rem;
    align-items: flex-end;

    & > img {
      height: 27rem;
      width: 25rem;
      right: -5rem;
      top: -8rem;
      object-fit: cover;
    }

    & article > p {
      font-size: 2.2rem;
      line-height: 3.3rem;
    }

    .device-tag {
      font-size: 1.6rem;
      padding: 0.3rem 0.8rem;
      line-height: 2.4rem;
    }
  }

  @media (min-width: 1200px) {
    & > img {
      height: 32rem;
      width: 30rem;
      right: -9rem;
      top: -12rem;
    }
  }
`;

export default StyleRoomCard;
