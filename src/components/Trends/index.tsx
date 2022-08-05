import React from 'react';

import { Container } from '~/components/Container';
import { Slider, Slide, SliderProps } from '~/components/Slider';
import { useMediaQuery } from '~/hooks/useMediaQuery';

import { Button } from './Button';
import { platforms } from './Button/platforms';
import * as Styled from './styles';

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
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};
