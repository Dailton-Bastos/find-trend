import React from 'react';

import { Container } from '~/components/Container';
import { Slider, Slide, SliderProps } from '~/components/Slider';
import { useMediaQuery } from '~/hooks/useMediaQuery';
import { useTrend } from '~/hooks/useTrend';

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

  const { status, data } = useTrend(platformId);

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
            {status === 'loading' ? (
              <p>Loading...</p>
            ) : status === 'error' ? (
              <p>Error</p>
            ) : (
              <>
                {data?.map((trend) => (
                  <Trend
                    key={trend.id}
                    urlToImage={trend.urlToImage}
                    author={trend.author}
                    url={trend.url}
                    title={trend.title}
                    description={trend.description}
                    publishedAt={trend.publishedAt}
                    source={trend.source}
                  />
                ))}
              </>
            )}
          </Styled.Posts>
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};
