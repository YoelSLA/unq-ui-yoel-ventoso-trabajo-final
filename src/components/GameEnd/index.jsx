import React, { useContext } from 'react';
import styled from 'styled-components';
import { GameState, GameTheme } from '../../utils/enumGame';
import { GameContext } from '../../hooks/GameContext';
import { colors } from '../../constants/Colors';
import dogImage from '../../assets/images/dog.jpg';
import apples from '../../assets/images/apples.jpg';
import train from '../../assets/images/train.jpg';
import home from '../../assets/images/home.jpg';

const GameEnd = () => {
  const {
    setGameState,
    gameTime,
    selectedTheme,
    updatePlayerScore,
    setSelectedTheme,
  } = useContext(GameContext);

  const selectorImage = () => {
    if (selectedTheme === GameTheme.ANIMALS) {
      return dogImage;
    }
    if (selectedTheme === GameTheme.FRUITS) {
      return apples;
    }
    if (selectedTheme === GameTheme.TRANSPORT) {
      return train;
    }
    if (selectedTheme === GameTheme.HOUSE_INTERIOR) {
      return home;
    }
  };

  const resetScores = () => {
    updatePlayerScore(1, 0);
    updatePlayerScore(2, 0);
  };

  return (
    <Container>
      <Message>¡BIEN HECHO!</Message>
      <ThemeImage
        src={selectorImage()}
        alt="Tema del juego"
      />
      <ButtonGroup>
        <Button
          onClick={() => {
            resetScores();
            setGameState(GameState.IN_GAME);
          }}>
          PLAY AGAIN
        </Button>
        <Button
          onClick={() => {
            resetScores();
            setGameState(GameState.START);
            setSelectedTheme('');
          }}>
          GO TO BACK MENU
        </Button>
      </ButtonGroup>

      <Time>Tiempo jugado: {gameTime} segundos </Time>
    </Container>
  );
};

export default GameEnd;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

export const Message = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${colors.onSurfaceContainer};
  border-radius: 20px;
  padding: 5px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  background: linear-gradient(135deg, #6eb5ff, #9b59b6);
  border: 2px solid #fff;
`;

export const ThemeImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 3px solid #fff;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  padding: 10px;
  background: linear-gradient(135deg, #6eb5ff, #9b59b6);
  border-radius: 20px;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${colors.success};
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 10px;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.infoHover};
  }
`;

export const Time = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 20px;
  padding: 15px;
  border: 1px solid ${colors.onSurfaceContainer};
  background: linear-gradient(135deg, #6eb5ff, #9b59b6);
`;
