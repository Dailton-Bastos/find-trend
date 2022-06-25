import { LogoProps } from '~/@types/logo';
import { ReactComponent as LogoBlack } from '~/assets/images/Logo-black.svg';
import { ReactComponent as LogoMobile } from '~/assets/images/Logo-mobile.svg';
import { ReactComponent as LogoDefault } from '~/assets/images/Logo.svg';

import * as Styles from './styles';

export const Logo = ({ isBlack = false, isMobile = false }: LogoProps) => {
  return (
    <Styles.Wrapper>
      <a href="/">
        {isMobile ? <LogoMobile /> : isBlack ? <LogoBlack /> : <LogoDefault />}
      </a>
    </Styles.Wrapper>
  );
};
