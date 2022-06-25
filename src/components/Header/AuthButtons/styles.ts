import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 40px;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }

  a {
    font-size: 1.8rem;
    line-height: 1.8rem;

    &:last-of-type {
      align-items: center;
      background: var(--white);
      border-radius: 4rem;
      display: flex;
      height: 4.2rem;
      justify-content: center;
      transition: background 0.3s;
      width: 12.9rem;

      @media only screen and (max-width: 1024px) {
        color: var(--black);
      }

      &.focused {
        background: var(--black);
        color: var(--white);
      }
    }
  }
`;
