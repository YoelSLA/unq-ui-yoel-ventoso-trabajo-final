import styled from 'styled-components';
import { colors } from '../../constants/Colors';
import React, { useContext } from 'react';
import { GameContext } from '../../hooks/GameContext';

const TurnStatus = () => {
  const { players, currentPlayer } = useContext(GameContext);

  return (
    <TurnContainer currentPlayer={currentPlayer}>
      <NextTurnText>NEXT TURN:</NextTurnText>
      <PlayerName>{players[currentPlayer - 1].emoji}</PlayerName>
    </TurnContainer>
  );
};

export default TurnStatus;

const TurnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.currentPlayer === 1
      ? 'rgba(110, 181, 255, 0.8)'
      : 'rgba(155, 89, 182, 0.8)'};
  color: #fff;
  font-size: 1.2em;
  text-align: center;
  font-weight: bold;
  transition: background-color 0.3s ease;
  padding: 5px;
  border: 2px solid ${colors.onSurfaceContainer};
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`;

const PlayerName = styled.div`
  font-size: 1.2em;
  background-color: #fff;
  border-radius: 50%;
  padding: 5px;
  border: 2px solid black;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NextTurnText = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-right: 20px;
`;
