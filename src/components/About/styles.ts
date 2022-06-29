import styled from 'styled-components';

import AboutBg from '~/assets/images/about-bg.png';
import GetStartButtonAfter from '~/assets/images/get-start-button.png';

export const Wrapper = styled.section`
  background: var(--black) url(${AboutBg}) no-repeat top center;
  padding: 9rem 5rem;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    padding-bottom: 4.3rem;
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 10rem;
  min-height: calc(100vh - 100px);

  @media only screen and (max-width: 1024px) {
    padding-top: 5.6rem;
  }

  h1 {
    color: var(--white);
    font-size: 7.2rem;
    font-weight: 900;
    line-height: 8rem;
    text-align: center;
    margin-bottom: 2.4rem;

    @media only screen and (max-width: 1024px) {
      font-size: 3.6rem;
      line-height: 4rem;
      margin-bottom: 1.6rem;
    }
  }

  p {
    color: var(--gray-500);
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.7rem;
    text-align: center;

    @media only screen and (max-width: 1024px) {
      font-size: 1.4rem;
      line-height: 2.1rem;
    }
  }

  a {
    align-items: center;
    background-color: var(--green-300);
    border-radius: 40px;
    display: flex;
    font-size: 1.8rem;
    font-weight: 700;
    height: 57px;
    justify-content: center;
    margin-top: 5.6rem;
    position: relative;
    transition: background-color 0.3s;
    width: 180px;

    @media only screen and (max-width: 1024px) {
      font-size: 1.4rem;
      height: 44px;
      margin-top: 3.2rem;
      width: 139px;
    }

    &:hover {
      background-color: var(--green-500);
    }

    &::after {
      content: '';
      background: url(${GetStartButtonAfter}) no-repeat top center;
      display: block;
      position: absolute;
      height: 69px;
      right: -120px;
      top: -15px;
      width: 99px;

      @media only screen and (max-width: 1024px) {
        display: none;
      }
    }

    span {
      bottom: 3px;
      padding-left: 5px;
      position: relative;
    }
  }

  img {
    display: block;
    margin-top: 9.4rem;
    max-width: 100%;

    @media only screen and (max-width: 1024px) {
      margin-top: 6rem;
    }
  }
`;
