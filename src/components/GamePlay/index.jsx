import React, { useContext, useState, useEffect } from 'react';
import { GameContext } from '../../hooks/GameContext';
import styled from 'styled-components';
import { GameMode } from '../../utils/enumGame';
import GameStatus from './GameSatus';
import Board from './Board';
import TurnStatus from './TurnStatus';
import { colors } from '../../constants/Colors';
import { styles } from '../../constants/Styles';

const GamePlay = () => {
  const { selectedMode, updatePlayerScore } = useContext(GameContext);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [isDraw, setIsDraw] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  const resetScores = () => {
    updatePlayerScore(1, 0);
    updatePlayerScore(2, 0);
  };

  return (
    <GamePlayContainer>
      {isDraw ? (
        <Contenedor>
          <h2>{"¡It's a tie!"}</h2>
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
          <GameStatus
            matchedPairs={matchedPairs}
            time={formatTime(time)}
          />
          <BoardContainer>
            <Board
              setMatchedPairs={setMatchedPairs}
              setIsDraw={setIsDraw}
              time={time}
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
  border: ${styles.borderSize} solid ${colors.border};
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`;

const Contenedor = styled.div`
  padding: 10px;
  border: ${styles.borderSize} solid ${colors.border};
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
