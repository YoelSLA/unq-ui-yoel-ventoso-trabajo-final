import React, { useState } from 'react';

const CardImage = ({ img, onCardClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onCardClick}
      style={{
        cursor: 'pointer',
        display: 'inline-block',
        margin: '10px',
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}>
      <img
        src={img}
        alt="Card"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '8px',
          transition: 'opacity 0.3s ease',
          opacity: isHovered ? 0.8 : 1,
        }}
      />
    </div>
  );
};

export default CardImage;
