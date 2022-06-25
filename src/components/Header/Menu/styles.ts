import styled from 'styled-components';

export const Menu = styled.nav`

  @media only screen and (max-width: 1024px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  ul {
    align-items: center;
    display: flex;
    gap: 4rem;
    list-style: none;

    @media only screen and (max-width: 1024px) {
      background: var(--black);
      flex-direction: column;
      justify-content: center;
      position: absolute;
      height: calc(100vh - 74px);
      top: 74px;
      transform: translateX(100%);
      transition: transform 0.3s ease-in;
      right: 0;
      width: 100%;

      &.isOpen {
        transform: translateX(0);
      }
    }

    li {
      font-size: 1.8rem;
      line-height: 1.8rem;

      a {
        padding: 1.2rem 0;
        position: relative;
        transition: hover 0.3s;

        &::after {
          content: '';
          position: absolute;
          background-color: var(--green-400);
          bottom: 0;
          height: 2px;
          left: 0;
          width: 0;
        }

        &:hover {
          color: var(--gray-700);

          &::after {
            transition: width 0.3s;
            width: 100%;
          }
        }
      }
    }
  }
`;
