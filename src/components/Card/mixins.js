
import styled from 'styled-components';
import memotestImage from '../../assets/images/memotest.png';

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  border: 1px solid #ccc; /* Borde visible entre las cartas */
  border-radius: 8px; /* Bordes redondeados */
  box-sizing: border-box; /* Asegura que el borde no afecte el tamaño de la carta */
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
  border: 1px solid #ccc; /* Asegurar que el borde sea visible en ambas caras */
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