import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --black: #000000;
    --white: #ffffff;
    --green-300: #A8FF35;
    --green-400: #87D322;
    --green-500: #8CC83A;
    --gray-100: #FaFaFa;
    --gray-200: #F1F1F1;
    --gray-300: #F5F5F5;
    --gray-400: #ADADAD;
    --gray-500: #8B8B8B;
    --gray-700: #2B2B2B;

    --font-type-1-name: 'Effra';
    --font-type-1-fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
        Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  body,
  input,
  textarea,
  select,
  button {
    color: var(--black);
    font-family: var(--font-type-1-name), var(--font-type-1-fallback);
    font-size: 1.6rem;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  [data-js='root'] {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;
