import styled from 'styled-components';
import TimeDisplay from './TimeDisplay';
import React from 'react';

const ScoreBoard = ({ players }) => (
  <>
    <ScoreContainer>
      {players.map((player, index) => (
        <PlayerWrapper key={index}>
          <PlayerName currentPlayer={index}>{player.emoji}</PlayerName>
          <PlayerScore currentPlayer={index}>{player.score}</PlayerScore>
        </PlayerWrapper>
      ))}
    </ScoreContainer>
    <TimeDisplay />
  </>
);

export default ScoreBoard;

const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  align-items: center;
`;

const PlayerWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
`;

const Circle = styled.div`
  background: ${({ currentPlayer }) =>
    currentPlayer === 0
      ? 'rgba(110, 181, 255, 0.8)'
      : 'rgba(155, 89, 182, 0.8)'};
  border-radius: 50%;
  padding: 5px;
  border: 2px solid black;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayerName = styled(Circle)`
  font-size: 1.2em;
`;

const PlayerScore = styled(Circle)`
  font-weight: bold;
  font-size: 1.4em;
`;
