import { ButtonMenuProps } from '~/@types/buttonMenu';

import * as Styled from './styles';

export const ButtonMenu = ({
  isOpen = false,
  onClickButton,
}: ButtonMenuProps) => {
  return (
    <Styled.Menu
      aria-label="Menu"
      className={isOpen ? 'isOpen' : ''}
      onClick={onClickButton}
    >
      <div />
      <div />
      <div />
    </Styled.Menu>
  );
};
