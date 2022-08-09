import React from 'react';

import * as Styled from './styles';

type TrendProps = {
  urlToImage?: string;
  subtitle?: string;
  title: string;
  url: string;
  description: string;
  publishedAt: string;
  source: string;
};

export const Trend = ({
  urlToImage,
  subtitle,
  title,
  url,
  description,
  publishedAt,
  source,
}: TrendProps) => {
  return (
    <Styled.Wrapper>
      {urlToImage && <img src={urlToImage} alt={title} title={title} />}

      <Styled.Content>
        {subtitle && <span>{subtitle}</span>}

        <h2>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h2>

        <p>{description}</p>

        <time>
          {' '}
          {publishedAt} - {source}
        </time>
      </Styled.Content>
    </Styled.Wrapper>
  );
};
