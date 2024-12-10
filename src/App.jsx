import React, { useContext } from 'react';
import styled from 'styled-components';
import { GameContext } from './hooks/GameContext';
import { GameState, GameTheme } from './utils/enumGame';
import GameStart from './components/GameStart';
import GamePlay from './components/GamePlay';
import GameEnd from './components/GameEnd';
import tiger from './assets/images/tiger.jpg';
import fruits from './assets/images/fruits.jpg';
import rail from './assets/images/rail.jpg';
import house_interior from './assets/images/house_interior.jpg';
import wallpaper from './assets/images/wallpaper.jpg';

const themeImages = {
  [GameTheme.ANIMALS]: tiger,
  [GameTheme.FRUITS]: fruits,
  [GameTheme.HOUSE_INTERIOR]: house_interior,
  [GameTheme.TRANSPORT]: rail,
  default: wallpaper,
};

const getBackgroundImage = theme => themeImages[theme] || themeImages.default;

const App = () => {
  const { gameState, selectedTheme } = useContext(GameContext);

  return (
    <Container backgroundImage={getBackgroundImage(selectedTheme)}>
      {gameState === GameState.START && <GameStart />}
      {gameState === GameState.IN_GAME && <GamePlay />}
      {gameState === GameState.END && <GameEnd />}
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;
  font-family: Arial, sans-serif;
`;
