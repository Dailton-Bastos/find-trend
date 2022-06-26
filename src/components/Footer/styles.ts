import styled from 'styled-components';

export const Wrapper = styled.footer`
  background: var(--white);
  padding: 2.8rem 5rem;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 1.5rem 6rem;
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
  }

  ul {
    align-items: center;
    display: flex;
    justify-content: space-between;
    list-style: none;

    @media only screen and (max-width: 1024px) {
      flex-direction: column;
      margin-top: 6rem;
      width: 100%;
    }

    li {
      @media only screen and (max-width: 1024px) {
        width: 100%;
      }

      a {
        font-size: 1.8rem;
        padding: 2rem;
        line-height: 1.8rem;

        @media only screen and (max-width: 1024px) {
          display: block;
          text-align: center;
          width: 100%;
        }
      }
    }
  }
`;
