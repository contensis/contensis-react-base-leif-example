import React from 'react';
import styles from './blogListing.module.css';
import loadable from '@loadable/component';
import { CardProps } from '~/components/blogCard/blogCard';
const Card = loadable(() => import('~/components/blogCard/blogCard'));

interface BlogListingProps {
  blogs: CardProps[];
}

const BlogListing = ({ blogs }: BlogListingProps) => {
  if (!blogs || blogs.length <= 0) return null;
  return (
    <ul className={styles.listing}>
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
    </ul>
  );
};

export default BlogListing;
