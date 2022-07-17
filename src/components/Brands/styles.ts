import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: var(--white);
`;

export const Content = styled.div`
  margin: 0 auto;
  padding: 14rem 12rem;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 1.4rem;
  }

  p {
    font-size: 6.4rem;
    font-weight: 700;
    line-height: 76px;

    @media only screen and (max-width: 1024px) {
      font-size: 3.6rem;
      line-height: 42px;
    }

    span {
      color: var(--gray-400);
    }
  }

  h2 {
    font-size: 6.4rem;
    line-height: 76px;
    text-align: center;
    margin-top: 28rem;

    @media only screen and (max-width: 1024px) {
      font-size: 3.6rem;
      line-height: 42px;
      margin-top: 16rem;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    margin-top: 8rem;

    @media only screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      margin-top: 3.2rem;
    }
  }
`;
