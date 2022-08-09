import React from 'react';

import { Container } from '~/components/Container';
import { Slider, Slide, SliderProps } from '~/components/Slider';
import { useMediaQuery } from '~/hooks/useMediaQuery';

import { Button } from './Button';
import { platforms } from './Button/platforms';
import * as Styled from './styles';
import { Trend } from './Trend';

export const Trends = () => {
  const [platformId, setPlatformId] = React.useState('facebook');
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const ref = React.useRef<HTMLDivElement>(null);

  const centerOnScrollTab = React.useCallback(
    (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (ref.current) {
        const { left, width } = ref.current.getBoundingClientRect();
        const center = left + width / 2;
        const offsetElement = evt.currentTarget.offsetWidth / 2;

        ref.current.scrollLeft =
          evt.currentTarget.offsetLeft - center + offsetElement;
      }
    },
    [],
  );

  const settings: SliderProps = {
    slidesPerView: 8,
    spaceBetween: 24,
    navigation: true,
    allowTouchMove: true,
  };

  return (
    <Styled.Wrapper>
      <Container>
        <Styled.Content>
          <h2>All platform connect to Findtrend</h2>
          {isMobile ? (
            <Styled.Slider ref={ref}>
              {platforms.map((platform) => (
                <Button
                  key={platform.id}
                  id={platform.id}
                  logo={platform.logo}
                  logoDark={platform.logoDark}
                  platformId={platformId}
                  setPlatformId={() => setPlatformId(platform.id)}
                  centerOnScrollTab={centerOnScrollTab}
                />
              ))}
            </Styled.Slider>
          ) : (
            <Slider settings={settings}>
              {platforms.map((platform) => (
                <Slide key={platform.id}>
                  <Button
                    key={platform.id}
                    id={platform.id}
                    logo={platform.logo}
                    logoDark={platform.logoDark}
                    platformId={platformId}
                    setPlatformId={() => setPlatformId(platform.id)}
                    centerOnScrollTab={centerOnScrollTab}
                  />
                </Slide>
              ))}
            </Slider>
          )}

          <Styled.Posts>
            <Trend
              urlToImage="https://static.seekingalpha.com/assets/og_image_1200-29b2bfe1a595477db6826bd2126c63ac2091efb7ec76347a8e7f81ba17e3de6c.png"
              subtitle="Dailton Bastos"
              url="https://www.lanacion.com.ar/agencias/twitter-califica-la-contrademanda-de-musk-como-inexacta-e-insuficiente-legalmente-nid04082022/"
              title="Beyond Meat, Inc. (BYND) CEO Ethan Brown on Q2 2022 Results - Earnings Call Transcript"
              description="Beyond Meat, Inc. (NASDAQ:NASDAQ:BYND) Q2 2022 Earnings Conference Call August 4, 2022 5:00 PM ETCompany ParticipantsLubi Kutua - Vice President of Financial Planning & Analysis "
              publishedAt="2022-08-05T01:41:09Z"
              source="Seeking Alpha"
            />
            <Trend
              subtitle="Dailton Bastos"
              url="https://www.lanacion.com.ar/agencias/twitter-califica-la-contrademanda-de-musk-como-inexacta-e-insuficiente-legalmente-nid04082022/"
              title="Beyond Meat, Inc. (BYND) CEO Ethan Brown on Q2 2022 Results - Earnings Call Transcript"
              description="Beyond Meat, Inc. (NASDAQ:NASDAQ:BYND) Q2 2022 Earnings Conference Call August 4, 2022 5:00 PM ETCompany ParticipantsLubi Kutua - Vice President of Financial Planning & Analysis "
              publishedAt="2022-08-05T01:41:09Z"
              source="Seeking Alpha"
            />
            <Trend
              urlToImage="https://www.independent.ie/business/world/e3e9a/41890781.ece/AUTOCROP/w1240h700/CITADEL%20GRIFFIN"
              subtitle="Jef Feeley"
              url="https://www.lanacion.com.ar/agencias/twitter-califica-la-contrademanda-de-musk-como-inexacta-e-insuficiente-legalmente-nid04082022/"
              title="Solar Energy Market size in Ukraine to grow by 932.10 MW -- Driven by increasing developments in the implementation of renewable energy"
              description="Ken Griffin, the billionaire founder of hedge fund Citadel, was added to a sweeping list of those Twitter has subpoenaed in its effort to force Elon Musk to complete his $44bn (€43bn) purchase of the social media company."
              publishedAt="2022-08-05T01:41:09Z"
              source="Independent.ie"
            />
          </Styled.Posts>
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};
