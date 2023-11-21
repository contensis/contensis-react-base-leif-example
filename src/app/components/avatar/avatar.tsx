import React from 'react';
import styles from './avatar.module.css';

export interface AvatarProps {
  name: string;
  category: string;
  photo: string;
}

const Avatar = ({ name, category, photo }: AvatarProps) => {
  return (
    <div className={styles.avatar}>
      {photo && (
        <img
          className={styles.avatar__photo}
          width={40}
          height={40}
          src={photo}
          alt=""
        />
      )}
      <span className={styles.avatar__name}>{name}</span>
      <span className={styles.avatar__category}>{category}</span>
    </div>
  );
};

export default Avatar;
