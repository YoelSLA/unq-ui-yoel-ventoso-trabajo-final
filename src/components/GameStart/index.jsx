import React, { useContext } from 'react';
import { GameContext } from '../../hooks/gameContext';
import {
  Title,
  Container,
  InnerContainer,
  ContentContainer,
  Container1,
  Container2,
  ButtonsContainer,
  DifficultyButton,
} from './mixins';
import separationBar from '../../assets/images/separation-bar.svg';
import CardImage from './CardImage';
import dogImage from '../../assets/images/animals/dog.jpg';
import apples from '../../assets/images/apples.jpg';
import train from '../../assets/images/train.jpg';
import home from '../../assets/images/home.jpg';
import GameStateEnum from '../../utils/enumGameState';
import GameThemeEnum from '../../utils/enumGameTheme';
import GameDifficultyEnum from '../../utils/enumGameDifficulty';

const GameStart = () => {
  const {
    setGameState,
    setSelectedTheme,
    setSelectedDifficulty,
    selectedDifficulty,
  } = useContext(GameContext);

  const handleCardClick = theme => {
    setSelectedTheme(theme);
    setGameState(GameStateEnum.EN_JUEGO);
  };

  const handleDifficultyClick = difficulty => {
    setSelectedDifficulty(difficulty);
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
            <DifficultyButton
              selected={selectedDifficulty === GameDifficultyEnum.EASY}
              onClick={() => handleDifficultyClick(GameDifficultyEnum.EASY)}>
              {GameDifficultyEnum.EASY}
            </DifficultyButton>
            <DifficultyButton
              selected={selectedDifficulty === GameDifficultyEnum.MEDIUM}
              onClick={() => handleDifficultyClick(GameDifficultyEnum.MEDIUM)}>
              {GameDifficultyEnum.MEDIUM}
            </DifficultyButton>
            <DifficultyButton
              selected={selectedDifficulty === GameDifficultyEnum.HARD}
              onClick={() => handleDifficultyClick(GameDifficultyEnum.HARD)}>
              {GameDifficultyEnum.HARD}
            </DifficultyButton>
          </ButtonsContainer>

          <img
            src={separationBar}
            alt="Separador"
          />
          <Container1>
            <Container2>
              <CardImage
                img={dogImage}
                onCardClick={() => handleCardClick(GameThemeEnum.ANIMALS)}
              />
              <CardImage
                img={apples}
                onCardClick={() => handleCardClick(GameThemeEnum.FRUITS)}
              />
              <CardImage
                img={train}
                onCardClick={() => handleCardClick(GameThemeEnum.TRANSPORT)}
              />
              <CardImage
                img={home}
                onCardClick={() =>
                  handleCardClick(GameThemeEnum.HOUSE_INTERIOR)
                }
              />
            </Container2>
          </Container1>
        </ContentContainer>
      </InnerContainer>
    </Container>
  );
};

export default GameStart;
