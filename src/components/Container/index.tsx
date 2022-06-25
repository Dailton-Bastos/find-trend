import { ContainerProps } from '~/@types/container';

import * as Styled from './styles';

export const Container = ({ children }: ContainerProps) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
