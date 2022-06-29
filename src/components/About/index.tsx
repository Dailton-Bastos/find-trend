import AboutTagsImgMob from '~/assets/images/btn-hero-socmed-mobile.png';
import AboutTagsImg from '~/assets/images/btn-hero-socmed.png';
import { Container } from '~/components/Container';
import { useMediaQuery } from '~/hooks/useMediaQuery';

import * as Styled from './styles';

export const About = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  return (
    <Styled.Wrapper>
      <Container>
        <Styled.Content>
          <h1>
            Minimize your tabs. <br />
            Find the trends!
          </h1>

          <p>
            Don’t let your computer memories consumes all of those browser tabs.
            <br />
            Findtrend let you gathers all of your favorite website into one
            place.
          </p>

          <a href="#">
            Get Started<span>🔥</span>
          </a>

          <img src={isMobile ? AboutTagsImgMob : AboutTagsImg} alt="Tags" />
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};
