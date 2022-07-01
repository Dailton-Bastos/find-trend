import styled from 'styled-components';

import HowItWorkBottom from '~/assets/images/how-it-work-bottom.png';
import HowItWorkLeft from '~/assets/images/how-it-work-left.png';
import HowItWorkRight from '~/assets/images/how-it-work-right.png';
import HowItWorkTop from '~/assets/images/how-it-work-top.png';

export const Wrapper = styled.section`
  background-color: var(--green-300);
  padding: 14rem 5rem;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 1.4rem;
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 7.2rem;
    font-weight: 700;
    line-height: 85px;
    text-align: center;

    @media only screen and (max-width: 1024px) {
      font-size: 3.6rem;
      line-height: 40px;
    }
  }

  div {
    background-color: var(--gray-300);
    border-radius: 16px;
    padding: 6rem 8rem;
    position: relative;
    margin: 6rem 0;

    @media only screen and (max-width: 1024px) {
      padding: 2.4rem;
      margin: 8rem 0;

      img {
        max-height: 69px;
      }
    }

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
    }

    &::before {
      background: url(${HowItWorkLeft}) no-repeat top center;
      height: 72px;
      left: -120px;
      top: 72px;
      width: 95px;

      @media only screen and (max-width: 1024px) {
        background: url(${HowItWorkBottom}) no-repeat top center;
        bottom: -50px;
        top: initial;
        left: -10px;
      }
    }

    &::after {
      background: url(${HowItWorkRight}) no-repeat top center;
      height: 69px;
      right: -120px;
      top: 60px;
      width: 99px;

      @media only screen and (max-width: 1024px) {
        background: url(${HowItWorkTop}) no-repeat top center;
        top: -50px;
        right: 0;
      }
    }
  }

  p {
    font-size: 1.8rem;
    line-height: 27px;
    text-align: center;
    max-width: 666px;

    @media only screen and (max-width: 1024px) {
      font-size: 1.4rem;
      line-height: 21px;
      max-width: 290px;
    }
  }
`;
