import React from 'react';
import { CardWrapper, CardInner, CardFront, CardBack } from './mixins';

const Card = ({ emoji, flipped, removed, onClick }) => {
  return (
    <CardWrapper
      onClick={onClick}
      style={{ visibility: removed ? 'hidden' : 'visible' }}>
      <CardInner className={flipped ? 'flipped' : ''}>
        <CardFront>{emoji}</CardFront>
        <CardBack></CardBack>
      </CardInner>
    </CardWrapper>
  );
};

export default Card;
