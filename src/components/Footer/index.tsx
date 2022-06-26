import { Container } from '~/components/Container';
import { Logo } from '~/components/Logo';

import * as Styled from './styles';

export const Footer = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <Styled.Content>
          <Logo isBlack={true} />

          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </Styled.Content>
      </Container>
    </Styled.Wrapper>
  );
};
