import React from 'react';

import type { Article } from '~/@types/trend';

import * as Styled from './styles';

export const Trend = ({
  urlToImage,
  author,
  title,
  url,
  description,
  publishedAt,
  source,
}: Article) => {
  return (
    <>
      <Styled.Wrapper>
        {urlToImage && <img src={urlToImage} alt={title} title={title} />}

        <Styled.Content>
          {author && <span>{author}</span>}

          <h2>
            <a href={url} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h2>

          <p>{description}</p>

          <time>
            {publishedAt} - {source?.name}
          </time>
        </Styled.Content>
      </Styled.Wrapper>
    </>
  );
};
