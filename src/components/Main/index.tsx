import { About } from '~/components/About';
import { Brands } from '~/components/Brands';
import { HowItWork } from '~/components/HowItWork';
import { Trends } from '~/components/Trends';

import * as Styled from './styles';

export const Main = () => {
  return (
    <Styled.Wrapper>
      <About />
      <HowItWork />
      <Brands />
      <Trends />
    </Styled.Wrapper>
  );
};
