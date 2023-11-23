import React from 'react';
import styled, { css } from 'styled-components';

interface HeroProps {
  title: string;
}

const Hero = ({ title }: HeroProps) => {
  if (!title) return null;
  return (
    <HeroStyled>
      <h1 className="hero__title">{title}</h1>
    </HeroStyled>
  );
};

export default Hero;

const HeroStyled = styled.main`
  ${() => {
    return css`
      padding: 40px 16px;
      @media only screen and (min-width: 1024px) {
        padding: 80px 16px;
      }
      .hero__title {
        margin: 0;
        font-size: 2.5rem;
        font-weight: 600;
        line-height: 3rem;
        text-align: center;
        color: #2b2f51;
        @media only screen and (min-width: 1024px) {
          font-size: 4rem;
          line-height: 5rem;
        }
      }
    `;
  }}
`;
