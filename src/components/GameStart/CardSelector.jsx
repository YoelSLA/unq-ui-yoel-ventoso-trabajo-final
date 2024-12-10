import React from 'react';
import CardImage from './CardImage';
import dogImage from '../../assets/images/dog.jpg';
import apples from '../../assets/images/apples.jpg';
import train from '../../assets/images/train.jpg';
import home from '../../assets/images/home.jpg';
import { GameTheme } from '../../utils/enumGame';
import styled from 'styled-components';
import { colors } from '../../constants/Colors';

const CardSelector = ({ onCardClick }) => {
  return (
    <CardContainer>
      <CardImage
        img={dogImage}
        onCardClick={() => onCardClick(GameTheme.ANIMALS)}
      />
      <CardImage
        img={apples}
        onCardClick={() => onCardClick(GameTheme.FRUITS)}
      />
      <CardImage
        img={train}
        onCardClick={() => onCardClick(GameTheme.TRANSPORT)}
      />
      <CardImage
        img={home}
        onCardClick={() => onCardClick(GameTheme.HOUSE_INTERIOR)}
      />
    </CardContainer>
  );
};

export default CardSelector;

const CardContainer = styled.div`
  border-radius: 20px;
  border: 2px solid ${colors.border};
  box-shadow: 0px 4px 8px ${colors.shadow};
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 50%);
  height: 350px;
  justify-content: center;
  padding: 5px;
`;
