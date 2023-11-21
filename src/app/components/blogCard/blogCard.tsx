import React from 'react';
import { Link } from 'react-router-dom';
import styles from './blogCard.module.css';

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
    <div className={styles.card}>
      <h2 className={styles.title__mobile}>
        <Link to={path}>{title}</Link>
      </h2>
      {image && (
        <img
          className={styles.image}
          width={200}
          height={200}
          src={image?.src}
          alt={image?.alt}
          loading="lazy"
        />
      )}
      <div className={styles.content}>
        <h2 className={styles.title__desktop}>
          <Link to={path}>{title}</Link>
        </h2>
        <p className={styles.description}>{description}</p>
        <span className={styles.category}>{category}</span>
      </div>
    </div>
  );
};

export default Card;
