import React, { useContext } from 'react';
import styled from 'styled-components';
import { GameState, GameTheme } from '../../utils/enumGame';
import { GameContext } from '../../hooks/gameContext';
import { colors } from '../../constants/Colors';
import dogImage from '../../assets/images/animals/dog.jpg';
import apples from '../../assets/images/apples.jpg';
import train from '../../assets/images/train.jpg';
import home from '../../assets/images/home.jpg';

const GameEnd = () => {
  const { setGameState, setScore, gameTime, selectedTheme } =
    useContext(GameContext);

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

  return (
    <Container>
      <Container2>
        <Message>WELL DONE!!</Message>
        <ThemeImage
          src={selectorImage()}
          alt="Game theme"
        />
        <ButtonGroup>
          <Button
            onClick={() => {
              setGameState(GameState.IN_GAME);
              setScore(0);
            }}>
            PLAY AGAIN
          </Button>
          <Button onClick={() => setGameState(GameState.START)}>
            GO TO BACK MENU
          </Button>
        </ButtonGroup>
      </Container2>
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
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const Container2 = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border: 1px solid black;
`;

export const Time = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${colors.onSurfaceContainer};
  border: 1px solid ${colors.onSurfaceContainer};
`;

export const Message = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${colors.onSurfaceContainer};
  margin-bottom: 20px;
`;

export const ThemeImage = styled.img`
  width: 500px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: ${colors.success};
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.onSurface};
  }
`;
