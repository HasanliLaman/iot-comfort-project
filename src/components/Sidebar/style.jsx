import styled from "styled-components";

const StyleSidebar = styled.div`
  aside {
    position: fixed;
    background-color: var(--color-grey-0);
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    z-index: 2;
    transition: all 0.5s;
    transform: translateX(-100%);
    padding: 3.5rem 3rem;

    &.open-slider {
      transform: translateX(0%);
    }

    .logo {
      padding-bottom: 3rem;
      display: flex;
      justify-content: center;

      img {
        height: 4.25rem;
      }
    }

    .btn-close {
      position: absolute;
      top: 2.5rem;
      right: 2rem;
      cursor: pointer;
      filter: invert(39%) sepia(4%) saturate(1371%) hue-rotate(175deg)
        brightness(98%) contrast(87%);

      img {
        width: 2rem;
        height: 2rem;
      }
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 1.2rem;
      padding: 2.4rem 0 6rem;
      border-top: 1.5px solid var(--color-grey-150);

      img {
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
      }

      p {
        color: var(--color-grey-600);
        font-size: 1.4rem;
        line-height: 2.2rem;
      }

      span {
        color: var(--color-grey-800);
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 2.6rem;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      color: var(--color-grey-600);
      font-weight: 500;
      line-height: 2.2rem;

      li {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        cursor: pointer;
        padding: 1.2rem;
        border-radius: 1.4rem;
        transition: all 0.5s;
      }

      li:hover {
        background: rgba(209, 230, 255, 0.3);
      }

      .nav-active {
        background: rgba(209, 230, 255, 0.6);
        box-shadow: 0px 4px 20px -2px rgba(50, 50, 71, 0.02),
          0px 0px 2px 0px rgba(12, 26, 75, 0.05);
        color: var(--color-blue-500);

        img {
          filter: brightness(0) saturate(100%) invert(40%) sepia(91%)
            saturate(2002%) hue-rotate(193deg) brightness(96%) contrast(98%);
        }
      }
    }
  }

  .btn-hamburger {
    position: fixed;
    top: 2rem;
    left: 1.5rem;
    cursor: pointer;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  @media (min-width: 576px) {
    aside {
      max-width: 380px;
      border-right: 1.5px solid var(--color-grey-150);
    }
  }

  @media (min-width: 768px) {
    .btn-hamburger {
      display: none;
    }

    aside {
      transform: translateX(0%);
      max-width: 280px;

      &.open-slider {
        transform: translateX(0%);
      }

      .btn-close {
        display: none;
      }
    }
  }
`;

export default StyleSidebar;
