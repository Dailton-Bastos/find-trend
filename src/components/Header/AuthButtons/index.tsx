import { AuthButtonsProps } from '~/@types/authButtons';

import * as Styled from './styles';

export const AuthButtons = ({ isHovering, isSticky }: AuthButtonsProps) => {
  return (
    <Styled.Wrapper>
      <a href="#">Login</a>

      <a href="#" className={isHovering || isSticky ? 'focused' : ''}>
        Register
      </a>
    </Styled.Wrapper>
  );
};
