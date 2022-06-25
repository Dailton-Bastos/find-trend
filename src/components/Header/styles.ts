import styled from 'styled-components';

export const Wrapper = styled.header`
  background: transparent;
  color: var(--white);
  left: 0;
  padding: 2.6rem 5rem;
  position: fixed;
  top: 0;
  width: 100%;

  &.focused,
  &.sticky {
    background: var(--white);
    color: var(--black);
    transition: background 0.5s ease-in;
  }

  &.sticky {
    padding: 1.5rem 5rem;
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  nav {
    ul {
      align-items: center;
      display: flex;
      gap: 4rem;
      list-style: none;

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
  }
`;

export const Buttons = styled.div`
  align-items: center;
  display: flex;
  gap: 40px;
  justify-content: center;

  a {
    font-size: 1.8rem;
    line-height: 1.8rem;

    &:last-of-type {
      align-items: center;
      background: var(--white);
      border-radius: 4rem;
      color: var(--black);
      display: flex;
      height: 4.2rem;
      justify-content: center;
      transition: background 0.3s;
      width: 12.9rem;

      &.focused {
        background: var(--black);
        color: var(--white);
      }
    }
  }
`;
