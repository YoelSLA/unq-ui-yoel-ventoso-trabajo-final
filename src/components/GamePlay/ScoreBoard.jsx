import styled from 'styled-components';
import TimeDisplay from './TimeDisplay';
import React from 'react';
import PlayerEmoji from './PlayerEmoji';
import { colors } from '../../constants/Colors';

const ScoreBoard = ({ players, time }) => (
  <>
    <ScoreContainer>
      {players.map((player, index) => (
        <PlayerWrapper key={index}>
          <PlayerEmoji currentPlayer={player} />
          <PlayerScore currentPlayer={player}>{player.score}</PlayerScore>
        </PlayerWrapper>
      ))}
    </ScoreContainer>
    <TimeDisplay time={time} />
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
  width: 35%;
`;

const PlayerScore = styled.div`
  background: ${({ currentPlayer }) =>
    currentPlayer.id === 1 ? `${colors.playerOne}` : `${colors.playerTwo}`};
  border-radius: 50%;
  padding: 5px;
  border: 2px solid black;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.4em;
  color: #fff;
`;
