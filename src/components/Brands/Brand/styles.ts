import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: var(--gray-300);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  padding: 4rem 3.8rem;

  img {
    max-width: 190 px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 2.3rem;

    img {
      max-width: 115px;
    }
  }
`;
