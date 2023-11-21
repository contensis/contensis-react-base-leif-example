import React from 'react';
import loadable from '@loadable/component';
import { MappedBlogPage, PageProps } from './blog.d';
import { Link } from 'react-router-dom';
import './blog.module.css';

const Header = loadable(() => import('~/components/header/header'));
const BlogHero = loadable(() => import('~/components/blogHero/blogHero'));
const Avatar = loadable(() => import('~/components/avatar/avatar'));
const Lead = loadable(() => import('~/components/leadParagraph/leadParagraph'));
const Composer = loadable(() => import('~/components/composer/blog.composer'));
const Footer = loadable(() => import('~/components/footer/footer'));

const Blogpage = ({ mappedEntry }: PageProps) => {
  const { heroProps, avatarProps, leadParagraphProps, composerProps } =
    mappedEntry || ({} as MappedBlogPage);

  console.log({ mappedEntry });

  return (
    <>
      <Header />
      <BlogHero {...heroProps} />
      <Avatar {...avatarProps} />
      <Lead {...leadParagraphProps} />
      <Composer {...composerProps} />
      <Link className="btn" to={`/`}>
        View all blogs
      </Link>
      <Footer />
    </>
  );
};

export default Blogpage;
