import React from 'react';
import styled from 'styled-components';
import memotestImage from '../../assets/images/memotest.png';

const Card = ({ emoji, flipped, removed, onClick }) => {
  return (
    <CardWrapper
      onClick={onClick}
      style={{ visibility: removed ? 'hidden' : 'visible' }}
      matched={true}>
      <CardInner className={true ? 'flipped' : ''}>
        <CardFront>
          <img
            src={emoji.emoji}
            alt=""
            style={{ width: '100%', height: '100%' }}
          />
        </CardFront>
        <CardBack></CardBack>
      </CardInner>
    </CardWrapper>
  );
};

export default Card;

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 5px;
  border: 2px solid black;
`;

export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: transform 0.6s;

  &.flipped {
    transform: rotateY(180deg);
  }
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
`;

export const CardFront = styled(CardFace)`
  transform: rotateY(180deg);
`;

export const CardBack = styled(CardFace)`
  background-image: url(${memotestImage});
  background-size: contain;
  background-position: center;
  transform: rotateY(0deg);
  background-repeat: no-repeat;
  background-color: #ccc;
  border-radius: 5px;
`;
