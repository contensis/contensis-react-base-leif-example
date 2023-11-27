import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export interface CardProps {
  title: string;
  description: string;
  category: string;
  image: { src: string; alt: string };
  path: string;
}

const Card = ({ title, description, category, image, path }: CardProps) => {
  if (!path) return null;
  return (
    <CardStyled>
      <h2 className="title__mobile">
        <Link to={path}>{title}</Link>
      </h2>
      {image && (
        <img
          className="image"
          width={200}
          height={200}
          src={image?.src}
          alt={image?.alt}
          loading="lazy"
        />
      )}
      <div className="content">
        <h2 className="title__desktop">
          <Link to={path}>{title}</Link>
        </h2>
        <p className="description">{description}</p>
        <span className="category">{category}</span>
      </div>
    </CardStyled>
  );
};

export default Card;

const CardStyled = styled.div`
  ${() => {
    return css`
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 40px;
      padding: 62px 16px;
      width: 100%;
      margin: 0 auto;
      position: relative;
      max-width: 700px;
      @media only screen and (min-width: 1024px) {
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        padding: 62px;
        max-width: 1000px;
      }
      &:hover {
        box-shadow: 0px 16px 24px rgba(56, 33, 146, 0.07);
        cursor: pointer;
      }
      &:focus-within {
        outline: transparent;
        box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 5px #4c9aff;
      }
      a {
        text-decoration: none;
        color: #2b2f51;
      }
      a:after {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 9;
      }
      .container:hover {
        box-shadow: 0px 16px 24px rgba(56, 33, 146, 0.07);
        cursor: pointer;
      }
      .content {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
      }
      .title__desktop,
      .title__mobile,
      .description,
      .category {
        margin: 0;
      }
      .title__mobile {
        margin-bottom: 16px;
        color: #2b2f51;
        @media only screen and (min-width: 1024px) {
          display: none;
        }
      }
      .title__desktop {
        display: none;
        margin-bottom: 16px;
        color: #2b2f51;
        @media only screen and (min-width: 1024px) {
          display: block;
        }
      }
      .description {
        font-size: 1rem;
        line-height: 1.5;
      }
      .category {
        color: #6a6c8a;
        margin-top: 24px;
        font-size: 1rem;
      }
      .image {
        height: 320px;
        width: 100%;
        object-fit: cover;
        aspect-ratio: 1/1;
        @media only screen and (min-width: 1024px) {
          flex-basis: 180px;
          width: 180px;
          height: 180px;
        }
      }
    `;
  }}
`;
