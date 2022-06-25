import React from 'react';

import { Container } from '~/components/Container';
import { Logo } from '~/components/Logo';
import { useMediaQuery } from '~/hooks/useMediaQuery';

import { AuthButtons } from './AuthButtons';
import { ButtonMenu } from './ButtonMenu';
import { Menu } from './Menu';
import * as Styled from './styles';

export const Header = () => {
  const [isHovering, setIsHovering] = React.useState(false);
  const [isSticky, setIsSticky] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const handleMouseOver = React.useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseOut = React.useCallback(() => {
    setIsHovering(false);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
        setIsHovering(true);
      } else {
        setIsSticky(false);
        setIsHovering(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Styled.Wrapper
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={`${isHovering ? 'focused' : ''} ${
        isSticky || isMenuOpen ? 'sticky' : ''
      }`}
    >
      <Container>
        <Styled.Content>
          <Logo isBlack={isHovering || isSticky} isMobile={isMobile} />

          <Menu isMenuOpen={isMenuOpen} />

          {isMobile && (
            <ButtonMenu
              isOpen={isMenuOpen}
              onClickButton={() => setIsMenuOpen((prev) => !prev)}
            />
          )}

          {!isMobile && (
            <AuthButtons isHovering={isHovering} isSticky={isSticky} />
          )}
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};
