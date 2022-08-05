import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Wrapper = styled.button`
  background: var(--white);
  border: none;
  border-radius: 8px;
  height: 124px;
  transition: all 0.3s;
  width: 124px;

  @media only screen and (max-width: 1024px) {
    height: 64px;
    width: 64px;
    margin: 0 10px;

    img {
      max-height: 30px;
    }
  }

  &:hover {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  &.isActive {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);

    img {
      animation: ${fadeIn} ease 1.5s;
    }
  }
`;
