import React, { useContext, useEffect, useState } from 'react';
import Board from './Board';
import { GameContext } from '../../hooks/gameContext';
import styled from 'styled-components';

const GamePlay = () => {
  const { setGameState, score } = useContext(GameContext);
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
        <Score>PLAYER 1: {score}</Score>
        <Time>{formatTime(time)}</Time>
      </Container2>
      <Board
        setGameState={setGameState}
        time={time}
      />
    </Container>
  );
};

export default GamePlay;

export const Container = styled.div`
  background-color: red;
`;

export const Container2 = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  background-color: green;
`;

export const Score = styled.div``;

export const Time = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
