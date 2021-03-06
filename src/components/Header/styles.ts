import styled from 'styled-components';

export const Wrapper = styled.header`
  background: transparent;
  color: var(--white);
  left: 0;
  padding: 2.6rem 5rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

  &.focused,
  &.sticky {
    color: var(--black);
    transition: background 0.5s ease-in;

    @media only screen and (min-width: 1025px) {
      background: var(--white);
    }
  }

  &.sticky {
    padding: 1.5rem 5rem;
    position: fixed;

    @media only screen and (max-width: 1024px) {
      background: var(--black);
      color: var(--white);
      padding: 1.5rem 1.8rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 1.5rem 1.8rem;
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
