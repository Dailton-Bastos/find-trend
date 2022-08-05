import React from 'react';

import * as Styled from './styles';

type Event = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export type Props = {
  id: string;
  logo: string;
  logoDark: string;
  platformId: string;
  setPlatformId: () => void;
  centerOnScrollTab: (evt: Event) => void;
};

export const Button = ({
  id,
  logo,
  logoDark,
  platformId,
  setPlatformId,
  centerOnScrollTab,
}: Props) => {
  const logoImg = platformId === id ? logoDark : logo;

  return (
    <Styled.Wrapper
      onClick={(e) => {
        setPlatformId();
        centerOnScrollTab(e);
      }}
      className={`${platformId === id ? 'isActive' : ''}`}
    >
      <img src={logoImg} alt="Facebook" />
    </Styled.Wrapper>
  );
};
