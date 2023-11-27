import React from 'react';
import loadable from '@loadable/component';
import { MappedBlogPage, BlogPageProps } from './blog';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Header = loadable(() => import(/* webpackChunkName: "header-component" */'~/components/header/header'));
const BlogHero = loadable(() => import(/* webpackChunkName: "hero-component" */'~/components/blogHero/blogHero'));
const Avatar = loadable(() => import(/* webpackChunkName: "avatar-component" */'~/components/avatar/avatar'));
const Lead = loadable(() => import(/* webpackChunkName: "lead-component" */'~/components/leadParagraph/leadParagraph'));
const Composer = loadable(() => import(/* webpackChunkName: "blog-composer" */'~/components/composer/blog.composer'));
const Footer = loadable(() => import(/* webpackChunkName: "footer-component" */'~/components/footer/footer'));

const Blogpage = ({ mappedEntry }: BlogPageProps) => {
  const { heroProps, avatarProps, leadParagraphProps, composerProps } =
    mappedEntry || ({} as MappedBlogPage);

  return (
    <>
      <Header />
      <BlogpageStyled>
        <BlogHero {...heroProps} />
        <Avatar {...avatarProps} />
        <Lead {...leadParagraphProps} />
        <Composer {...composerProps} />
        <Link className="btn" to={`/`}>
          View all blogs
        </Link>
      </BlogpageStyled>
      <Footer />
    </>
  );
};

export default Blogpage;

const BlogpageStyled = styled.main`
  ${() => {
    return css`
      .composer__blog {
        max-width: 720px;
        width: 100%;
        margin: 0 auto 40px;
      }
      .composer__blog > *:not(:last-child) {
        margin-bottom: 40px;
      }
      .btn {
        border: 1px solid #2b2f51;
        border-radius: 4px;
        color: #2b2f51;
        display: block;
        font-family: 'Source Serif 4', serif;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 2rem;
        margin: 0 auto;
        max-width: 288px;
        padding: 16px;
        text-align: center;
        text-decoration: none;
        width: 100%;
      }
      .btn:hover {
        background-color: rgba(195, 198, 222, 0.2);
      }
    `;
  }}
`;
