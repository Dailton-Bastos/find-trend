import styled from 'styled-components';

export const Menu = styled.div`
  cursor: pointer;

  div {
    background: var(--white);
    margin: 8px;
    height: 2px;
    transition: 0.3s;
    width: 18px;

    &:nth-child(2) {
      display: none;
    }
  }

  &.isOpen {
    > div {
      transform: rotate(-45deg) translate(-2px, 2px);

      &:nth-child(2) {
       opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -5px);
      }
    }
  }
`;
