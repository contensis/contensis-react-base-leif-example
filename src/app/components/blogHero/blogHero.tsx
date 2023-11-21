import React from 'react';
import styles from './blogHero.module.css';

export interface BlogHeroProps {
  title: string;
  image: {
    src: string;
    alt: string;
  };
}

const BlogHero = ({ title, image }: BlogHeroProps) => {
  return (
    <div className={styles.blog_hero}>
      <h1 className={styles.blog_hero__title}>{title}</h1>
      {image && (
        <img
          className={styles.blog_hero__image}
          src={image.src}
          alt={image.alt}
        />
      )}
    </div>
  );
};

export default BlogHero;
