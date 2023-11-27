import React from 'react';
import styled, { css } from 'styled-components';

export interface AvatarProps {
  name: string;
  category: string;
  photo: string;
}

const Avatar = ({ name, category, photo }: AvatarProps) => {
  if (!name) return null;
  return (
    <AvatarStyled>
      {photo && (
        <img
          className="avatar__photo"
          width={40}
          height={40}
          src={photo}
          alt=""
        />
      )}
      <span className="avatar__name">{name}</span>
      {category && <span className="avatar__category">{category}</span>}
    </AvatarStyled>
  );
};

export default Avatar;

const AvatarStyled = styled.div`
  ${() => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;

      .avatar__photo {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        object-fit: cover;
      }

      .avatar__name {
        font-family: 'Source Serif 4', serif;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.5rem;
      }

      .avatar__category {
        color: #6e729b;
        display: block;
        font-size: 0.875rem;
        line-height: 1.5rem;
      }
    `;
  }}
`;
