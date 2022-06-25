import React from 'react';

import { Container } from '~/components/Container';
import { Logo } from '~/components/Logo';

import * as Styled from './styles';

export const Header = () => {
  const [isHovering, setIsHovering] = React.useState(false);
  const [isSticky, setIsSticky] = React.useState(false);

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
      className={`${isHovering ? 'focused' : ''} ${isSticky ? 'sticky' : ''}`}
    >
      <Container>
        <Styled.Content>
          <Logo isBlack={isHovering || isSticky} />

          <nav>
            <ul>
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
            </ul>
          </nav>

          <Styled.Buttons>
            <a href="#">Login</a>
            <a href="#" className={isHovering || isSticky ? 'focused' : ''}>
              Register
            </a>
          </Styled.Buttons>
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};
