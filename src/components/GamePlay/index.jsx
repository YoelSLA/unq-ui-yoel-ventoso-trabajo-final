import React, { useContext, useEffect, useState } from 'react';
import Board from './Board';
import { GameContext } from '../../hooks/gameContext';
import styled from 'styled-components';
import { GameMode } from '../../utils/enumGame';

const GamePlay = () => {
  const {
    setGameState,
    scorePlayer1,
    scorePlayer2,
    selectedMode,
    currentPlayer,
  } = useContext(GameContext);
  const [time, setTime] = useState(0); // Estado para almacenar el tiempo

  useEffect(() => {
    // Configurar el intervalo para incrementar el tiempo cada segundo
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(timer);
  }, []);

  // Formatear el tiempo (opcional)
  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <Container>
      <Container2>
        <Container3>
          <ScoreContainer>
            {selectedMode === GameMode.MULTIPLAYER && (
              <>
                <Score>PLAYER 1: {scorePlayer1}</Score>
                <Score>PLAYER 2: {scorePlayer2}</Score>
              </>
            )}
          </ScoreContainer>

          <Time>{formatTime(time)}</Time>
        </Container3>
        <Board
          setGameState={setGameState}
          time={time}
        />
      </Container2>
      {selectedMode === GameMode.MULTIPLAYER && (
        <Container4>
          <p>NEXT TURN: {currentPlayer === 1 ? 'PLAYER 1' : 'PLAYER 2'}</p>
        </Container4>
      )}
    </Container>
  );
};

export default GamePlay;

export const Container = styled.div`
  // background-color: red;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  border: 1px solid black;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  // background-color: green;
`;

export const Container3 = styled.div`
  display: flex;
  justify-content: space-evenly;
  // background-color: blue;
  align-items: center;
  border: 1px solid black;
`;

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-around;
  // background-color: skyblue;
  width: 300px;
  align-items: center;
`;

export const Score = styled.p`
  font-size: 16px;
`;

export const Time = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const Container4 = styled.div`
  padding: 15px;
  // background-color: brown;
  text-align: center;
  font-size: 20px;
  border: 1px solid black;
`;
