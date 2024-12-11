import React from 'react';
import styled from 'styled-components';
import CardImage from './CardImage';
import dogImage from '../../assets/images/dog.jpg';
import apples from '../../assets/images/apples.jpg';
import train from '../../assets/images/train.jpg';
import home from '../../assets/images/home.jpg';
import { GameTheme } from '../../utils/enumGame';
import { colors } from '../../constants/Colors';
import { styles } from '../../constants/Styles';

const cardData = [
  { img: dogImage, theme: GameTheme.ANIMALS },
  { img: apples, theme: GameTheme.FRUITS },
  { img: train, theme: GameTheme.TRANSPORT },
  { img: home, theme: GameTheme.HOUSE_INTERIOR },
];

const CardSelector = ({ onCardClick }) => {
  return (
    <CardContainer>
      {cardData.map((card, index) => (
        <CardImage
          key={index}
          img={card.img}
          onCardClick={() => onCardClick(card.theme)}
        />
      ))}
    </CardContainer>
  );
};

export default CardSelector;

const CardContainer = styled.div`
  border: ${styles.borderSize} solid ${colors.border};
  box-shadow: 0px 4px 8px ${colors.shadow};
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 50%);
  height: 350px;
  justify-content: center;
  padding: 5px;
  border-radius: 20px;
`;
