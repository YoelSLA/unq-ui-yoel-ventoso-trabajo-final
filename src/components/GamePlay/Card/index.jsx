import React from 'react';
import styled from 'styled-components';
import memotestImage from '../../../assets/images/memotest.png';

const Card = ({ emoji, flipped, removed, onClick }) => {
  return (
    <CardWrapper
      onClick={onClick}
      style={{ visibility: removed ? 'hidden' : 'visible' }}>
      <CardInner className={flipped ? 'flipped' : ''}>
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
  position: relative;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;

  &.matched {
    border: 3px solid black; /* Borde negro cuando haya un match */
    background-color: rgba(0, 255, 0, 0.1); /* Fondo con un tono sutil */
  }
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

  &.matched {
    pointer-events: none; /* Desactiva la interacción con la carta una vez que se hace el match */
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
  border: 1px solid #ccc;

  &.matched {
    opacity: 0.6; /* Cambia la opacidad para indicar el estado */
  }
`;

export const CardFront = styled(CardFace)`
  background-color: #fff;
  transform: rotateY(180deg);
`;

export const CardBack = styled(CardFace)`
  background-image: url(${memotestImage});
  background-size: contain;
  background-position: center;
  transform: rotateY(0deg);
  background-repeat: no-repeat;
  background-color: #ccc;
`;
