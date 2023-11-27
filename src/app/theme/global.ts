import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  /* Normalize/reset css */
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }




  /* Resets the z-index stacking order */
  #root {
    isolation: isolate;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  html, body {
    font-family: 'Inter', sans-serif;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Sets base font to 16px */
  body {
    min-height: 100vh;
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 1.5;
    text-rendering: optimizeSpeed;
    background-color: #ffffff;
    color: #333333;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Source Serif 4', serif;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 3rem;
  }
  h2 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.5rem;
  }
  h3 {
    font-size: 1.625rem;
    font-weight: 600;
    line-height: 2.5rem;
  }
  h4 {
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 2rem;
  }
  h5 {
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.5rem;
  }
  h6 {
    font-size: 1rem;
    font-size: 600;
    line-height: 1.5rem;
  }
  p {
    font-size: 1rem;
    line-height: 2rem;
    margin: 16px 0;
  }
  ol,
  ul {
    padding: 0 0 0 16px;
  }
  ol li:not(:last-child),
  ul li:not(:last-child) {
    margin-bottom: 16px;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* https://www.a11yproject.com/posts/how-to-hide-content/ */
  .sr-only {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

export default GlobalStyle;
