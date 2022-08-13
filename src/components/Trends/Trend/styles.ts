import styled from 'styled-components';

export const Wrapper = styled.article`
  align-items: center;
  display: flex;
  gap: 20px;
  padding-top: 30px;
  margin-bottom: 30px;
  width: 80%;
  position: relative;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }

  img {
    max-width: 320px;

    @media only screen and (max-width: 1024px) {
      max-width: 220px;
    }
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  span {
    color: var(--gray-500);
    font-size: 18px;
    font-weight: 500;
  }

  h2 {
    color: var(--gray-700);
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 39px;
    text-align: left;
    margin: 10px 0;

    @media only screen and (max-width: 1024px) {
      font-size: 2.2rem;
      line-height: 29px;
    }
  }

  p {
    color: var(--gray-500);
    font-size: 16px;
    line-height: 22px;
  }

  time {
    color: var(--gray-500);
    display: block;
    font-size: 14px;
    margin-top: 10px;
  }
`;
