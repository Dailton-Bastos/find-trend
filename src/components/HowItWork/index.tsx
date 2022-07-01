import TabElon from '~/assets/images/tab-elon.png';
import { Container } from '~/components/Container';

import * as Styled from './styles';

export const HowItWork = () => {
  return (
    <Styled.Wrapper id="howItWork">
      <Container>
        <Styled.Content>
          <h2>Open new tabs is sh*t</h2>

          <div>
            <img src={TabElon} alt="Tab" />
          </div>

          <p>
            A solution for your browser tabs and don’t make your device get
            slower over time. Get ease and faster to discover a trend with just
            one tab.
          </p>
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};
