import React from 'react';

import * as Styled from './styles';

type Props = {
  isFetching: boolean;
  onClick: () => void;
};

export const ViewMore = ({ isFetching = false, onClick }: Props) => {
  return (
    <Styled.Wrapper onClick={onClick} disabled={isFetching}>
      {isFetching ? 'Loading...' : 'View More Trend'}
    </Styled.Wrapper>
  );
};
