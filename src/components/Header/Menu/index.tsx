import { MenuProps } from '~/@types/menu';
import { useMediaQuery } from '~/hooks/useMediaQuery';

import { AuthButtons } from '../AuthButtons';
import * as Styled from './styles';

export const Menu = ({ isMenuOpen }: MenuProps) => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <Styled.Menu className={isMenuOpen ? 'isOpen' : ''}>
      <ul className={isMenuOpen ? 'isOpen' : ''}>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">How it work</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Solution</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>

        {isMobile && <AuthButtons isHovering={false} isSticky={false} />}
      </ul>
    </Styled.Menu>
  );
};
