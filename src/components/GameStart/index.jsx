import React, { useContext } from 'react';
import styled from 'styled-components';
import { GameContext } from '../../hooks/gameContext';
import { GameDifficulty, GameState, GameMode } from '../../utils/enumGame';
import { colors } from '../../constants/Colors';
import SelectionButtonGroup from './SelectionButtonGroup';
import CardSelector from './CardSelector';

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
      <Header>
        <Title>MEMOTEST</Title>
      </Header>
      <SelectionButtonGroup
        options={Object.values(GameDifficulty)}
        selectedOption={selectedDifficulty}
        onOptionSelect={setSelectedDifficulty}
        difficulty={selectedDifficulty}
      />
      <SelectionButtonGroup
        options={Object.values(GameMode)}
        selectedOption={selectedMode}
        onOptionSelect={setSelectedMode}
        mode={selectedMode}
      />
      <CardSelector onCardClick={handleCardClick} />
    </Container>
  );
};

export default GameStart;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  border: 2px solid ${colors.onSurfaceContainer};
  border-radius: 20px;
  padding: 5px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  background: linear-gradient(135deg, #6eb5ff, #9b59b6);
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;
