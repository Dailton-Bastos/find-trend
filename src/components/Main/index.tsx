import { About } from '~/components/About';
import { HowItWork } from '~/components/HowItWork';

import * as Styled from './styles';

export const Main = () => {
  return (
    <Styled.Wrapper>
      <About />
      <HowItWork />
    </Styled.Wrapper>
  );
};
