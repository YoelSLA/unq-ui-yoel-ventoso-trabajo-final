import React, { useContext } from 'react';
import { GameContext } from '../../hooks/gameContext';
import separationBar from '../../assets/images/separation-bar.svg';
import CardImage from './CardImage';
import dogImage from '../../assets/images/animals/dog.jpg';
import apples from '../../assets/images/apples.jpg';
import train from '../../assets/images/train.jpg';
import home from '../../assets/images/home.jpg';
import {
  GameDifficulty,
  GameTheme,
  GameState,
  GameMode,
} from '../../utils/enumGame';
import styled from 'styled-components';
import { colors } from '../../constants/Colors';

const GameStart = () => {
  const {
    setGameState,
    setSelectedTheme,
    setSelectedDifficulty,
    selectedDifficulty,
    setSelectedMode,
    selectedMode,
  } = useContext(GameContext);

  const handleCardClick = theme => {
    setSelectedTheme(theme);
    setGameState(GameState.IN_GAME);
  };

  return (
    <Container>
      <InnerContainer>
        <ContentContainer>
          <Title>MEMOTEST</Title>
          <img
            src={separationBar}
            alt="Separador"
          />
          <ButtonsContainer>
            <OptionButton
              selected={selectedDifficulty === GameDifficulty.EASY}
              onClick={() => setSelectedDifficulty(GameDifficulty.EASY)}>
              {GameDifficulty.EASY}
            </OptionButton>
            <OptionButton
              selected={selectedDifficulty === GameDifficulty.MEDIUM}
              onClick={() => setSelectedDifficulty(GameDifficulty.MEDIUM)}>
              {GameDifficulty.MEDIUM}
            </OptionButton>
            <OptionButton
              selected={selectedDifficulty === GameDifficulty.HARD}
              onClick={() => setSelectedDifficulty(GameDifficulty.HARD)}>
              {GameDifficulty.HARD}
            </OptionButton>
          </ButtonsContainer>
          <img
            src={separationBar}
            alt="Separador"
          />
          <ButtonsContainer>
            <OptionButton
              selected={selectedMode === GameMode.SINGLE}
              onClick={() => setSelectedMode(GameMode.SINGLE)}>
              {GameMode.SINGLE}
            </OptionButton>
            <OptionButton
              selected={selectedMode === GameMode.MULTIPLAYER}
              onClick={() => setSelectedMode(GameMode.MULTIPLAYER)}>
              {GameMode.MULTIPLAYER}
            </OptionButton>
          </ButtonsContainer>
          <img
            src={separationBar}
            alt="Separador"
          />
          <Container1>
            <Container2>
              <CardImage
                img={dogImage}
                onCardClick={() => handleCardClick(GameTheme.ANIMALS)}
              />
              <CardImage
                img={apples}
                onCardClick={() => handleCardClick(GameTheme.FRUITS)}
              />
              <CardImage
                img={train}
                onCardClick={() => handleCardClick(GameTheme.TRANSPORT)}
              />
              <CardImage
                img={home}
                onCardClick={() => handleCardClick(GameTheme.HOUSE_INTERIOR)}
              />
            </Container2>
          </Container1>
        </ContentContainer>
      </InnerContainer>
    </Container>
  );
};

export default GameStart;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: ${colors.outline};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  position: relative;
  height: auto;
  border: 1px solid black;
`;

export const InnerContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

export const Container1 = styled.div``;

export const Container2 = styled.div`
  height: 400px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 50%);

  gap: 10px;
  justify-content: center;
  margin: 0 auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const OptionButton = styled.button`
  background-color: ${props =>
    props.selected ? colors.success : colors.border};
  color: ${props =>
    props.selected ? colors.surfaceContainer : colors.onSurfaceContainer};
  padding: 10px 20px;
  margin: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => (props.selected ? '#45a049' : '#dcdcdc')};
  }
`;
