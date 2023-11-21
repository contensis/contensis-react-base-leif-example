import React from 'react';
import styles from './hero.module.css';

interface HeroProps {
  title: string;
}

const Hero = ({ title }: HeroProps) => {
  if (!title) return null;
  return (
    <div className={styles.hero}>
      <h1 className={styles.home__title}>{title}</h1>
    </div>
  );
};

export default Hero;
