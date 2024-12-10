import React, { useContext } from 'react';
import styled from 'styled-components';
import TimeDisplay from './TimeDisplay';
import ScoreBoard from './ScoreBoard';
import { colors } from '../../constants/Colors';
import { GameDifficulty, GameMode } from '../../utils/enumGame';
import { GameContext } from '../../hooks/GameContext';

const GameStatus = ({ matchedPairs }) => {
  const { selectedMode, players, selectedDifficulty } = useContext(GameContext);

  const totalPairs = () => {
    if (selectedDifficulty === GameDifficulty.EASY) return 8;
    if (selectedDifficulty === GameDifficulty.MEDIUM) return 12;
    return 32;
  };

  return (
    <GameStatusContainer
      matches={matchedPairs}
      totalMatches={totalPairs()}>
      {selectedMode === GameMode.MULTIPLAYER ? (
        <ScoreBoard players={players} />
      ) : (
        <TimeDisplay />
      )}
    </GameStatusContainer>
  );
};

export default GameStatus;

const GameStatusContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
  background: ${({ matches, totalMatches }) => {
    const progress = (matches / totalMatches) * 100;
    return `linear-gradient(90deg, #4caf50 ${Math.max(progress - 20, 0)}%, #ffeb3b ${progress}%, #f44336 ${Math.min(progress + 20, 100)}%)`;
  }};
  padding: 5px;
  border: 2px solid ${colors.onSurfaceContainer};
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`;
