import { BrandProps } from '~/@types/brand';

import * as Styled from './styles';

export const Brand = ({ logo, name }: BrandProps) => {
  return (
    <Styled.Wrapper>
      <img src={logo} alt={name} />
    </Styled.Wrapper>
  );
};
