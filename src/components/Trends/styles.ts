import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: var(--gray-100);
  padding: 14rem 5rem;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 1.8rem 0;
  }
`;

export const Content = styled.div`
  h2 {
    font-size: 6.4rem;
    line-height: 76px;
    text-align: center;
    margin-bottom: 8rem;

    @media only screen and (max-width: 1024px) {
      font-size: 3.6rem;
      line-height: 42px;
      margin-bottom: 3.2rem;
    }
  }
`;

export const Slider = styled.div`
  padding: 10px 0;
  white-space: nowrap;
  overflow-y: scroll;
`;

export const Posts = styled.div`
  margin: 50px 0 30px;
  padding: 0 15px;

  @media only screen and (max-width: 1024px) {
    margin: 10px 0 20px;
    padding: 0;
  }
`;
