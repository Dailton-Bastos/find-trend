import { createGlobalStyle } from 'styled-components';

import EffraBold from '~/assets/fonts/Effra-Bold.ttf';
import EffraHeavy from '~/assets/fonts/Effra-Heavy.ttf';
import EffraLight from '~/assets/fonts/Effra-Light.ttf';
import EffraMedium from '~/assets/fonts/Effra-Medium.ttf';
import EffraRegular from '~/assets/fonts/Effra-Regular.ttf';

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Effra";
    src: url(${EffraLight}) format("truetype");
    font-weight: 300;
  }
  @font-face {
    font-family: "Effra";
    src: url(${EffraRegular}) format("truetype");
    font-weight: 400;
  }
  @font-face {
    font-family: "Effra";
    src: url(${EffraMedium}) format("truetype");
    font-weight: 500;
  }
  @font-face {
    font-family: "Effra";
    src: url(${EffraBold}) format("truetype");
    font-weight: 700;
  }
  @font-face {
    font-family: "Effra";
    src: url(${EffraHeavy}) format("truetype");
    font-weight: 900;
  }
`;
