import React from 'react';
import loadable from '@loadable/component';
import { CardProps } from '~/components/blogCard/blogCard';
import styled, { css } from 'styled-components';
const Card = loadable(() => import('~/components/blogCard/blogCard'));

interface BlogListingProps {
  blogs: CardProps[];
}

const BlogListing = ({ blogs }: BlogListingProps) => {
  if (!blogs || blogs.length <= 0) return null;
  return (
    <BlogListingStyled>
      {blogs?.map((blog, i: number) => {
        return (
          <li key={`${blog.id}_${i}`}>
            <Card
              image={blog.image}
              title={blog.title}
              description={blog.description}
              category={blog.category}
              path={blog.path}
            />
          </li>
        );
      })}
    </BlogListingStyled>
  );
};

export default BlogListing;

const BlogListingStyled = styled.ul`
  ${() => {
    return css`
      list-style: none;
      padding: 0 16px;
      margin: 0;
    `;
  }}
`;
