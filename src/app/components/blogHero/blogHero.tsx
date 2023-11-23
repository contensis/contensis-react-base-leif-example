import React from 'react';
import styled, { css } from 'styled-components';

export interface BlogHeroProps {
  title: string;
  image: {
    src: string;
    alt: string;
  };
}

const BlogHero = ({ title, image }: BlogHeroProps) => {
  return (
    <BlogHeroStyled>
      <h1 className="blog-hero__title">{title}</h1>
      {image && (
        <img className="blog-hero__image" src={image.src} alt={image.alt} />
      )}
    </BlogHeroStyled>
  );
};

export default BlogHero;

const BlogHeroStyled = styled.div`
  ${() => {
    return css`
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 24px;
      margin: 40px 0;
      padding: 0 16px;
      @media only screen and (min-width: 1024px) {
        text-align: left;
        flex-direction: row;
        margin: 0 auto 40px;
        gap: 40px;
      }
      .blog-hero__title {
        margin: 0;
        font-size: 2.5rem;
        font-weight: 600;
        line-height: 3rem;
        color: #2b2f51;
        @media only screen and (min-width: 1024px) {
          font-size: 4rem;
          line-height: 5rem;
        }
      }
      .blog-hero__image {
        max-width: 288px;
        width: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
        @media only screen and (min-width: 1024px) {
          max-width: 480px;
        }
      }
    `;
  }}
`;
