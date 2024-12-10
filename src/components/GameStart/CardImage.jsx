import React, { useState } from 'react';
import styled from 'styled-components';

const CardImage = ({ img, onCardClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <CardContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onCardClick}
      isHovered={isHovered}>
      <StyledImage
        src={img}
        alt="Card"
        isHovered={isHovered}
      />
    </CardContainer>
  );
};

export default CardImage;

const CardContainer = styled.div`
  cursor: pointer;
  display: inline-block;
  margin: 10px;
  transition: transform 0.3s ease;
  transform: ${({ isHovered }) => (isHovered ? 'scale(1.1)' : 'scale(1)')};
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  transition: opacity 0.3s ease;
  opacity: ${({ isHovered }) => (isHovered ? 0.8 : 1)};
  border: 2px solid white;
`;
