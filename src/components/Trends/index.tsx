import React from 'react';

import { Container } from '~/components/Container';
import { Skeleton } from '~/components/Skeleton';
import { Slider, Slide, SliderProps } from '~/components/Slider';
import { useMediaQuery } from '~/hooks/useMediaQuery';
import { useTrend } from '~/hooks/useTrend';

import { Button } from './Button';
import { platforms } from './Button/platforms';
import * as Styled from './styles';
import { Trend } from './Trend';
import { ViewMore } from './ViewMore';

export const Trends = () => {
  const [platformId, setPlatformId] = React.useState('facebook');
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const [page, setPage] = React.useState(1);

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

  const { data, isLoading, isError, isFetching } = useTrend(platformId, page);

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
            {isLoading ? (
              <Skeleton />
            ) : isError ? (
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

            {data && data?.length >= 1 && (
              <ViewMore
                isFetching={isFetching}
                onClick={() => setPage((prev) => prev + 1)}
              />
            )}
          </Styled.Posts>
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};
