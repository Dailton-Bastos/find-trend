import React from 'react';

import * as Styled from './styles';

export const Skeleton = () => {
  return (
    <Styled.Wrapper>
      <Styled.Img />

      <Styled.Content>
        <Styled.Author />
        <Styled.Title />
        <Styled.Description />
        <Styled.Time />
      </Styled.Content>
    </Styled.Wrapper>
  );
};
