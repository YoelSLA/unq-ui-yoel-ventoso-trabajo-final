import React, { useContext, useState } from 'react';
import { GameContext } from '../../hooks/GameContext';
import styled from 'styled-components';
import { GameMode } from '../../utils/enumGame';
import GameStatus from './GameSatus';
import Board from './Board';
import TurnStatus from './TurnStatus';
import { colors } from '../../constants/Colors';

const GamePlay = () => {
  const { selectedMode, updatePlayerScore, gameTime } = useContext(GameContext);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [isDraw, setIsDraw] = useState(false);

  const resetScores = () => {
    updatePlayerScore(1, 0);
    updatePlayerScore(2, 0);
  };

  return (
    <GamePlayContainer>
      {isDraw ? (
        <Contenedor>
          <h2>¡Es un empate!</h2>
          <Button
            onClick={() => {
              resetScores();
              setIsDraw(false);
            }}>
            PLAY AGAIN !!
          </Button>
        </Contenedor>
      ) : (
        <>
          <GameStatus matchedPairs={matchedPairs} />
          <BoardContainer>
            <Board
              setMatchedPairs={setMatchedPairs}
              setIsDraw={setIsDraw}
              time={gameTime}
            />
          </BoardContainer>
          {selectedMode === GameMode.MULTIPLAYER && <TurnStatus />}
        </>
      )}
    </GamePlayContainer>
  );
};

export default GamePlay;

export const GamePlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const BoardContainer = styled.div`
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`;

const Contenedor = styled.div`
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
