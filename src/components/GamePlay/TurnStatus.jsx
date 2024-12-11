import styled from 'styled-components';
import { colors } from '../../constants/Colors';
import React, { useContext } from 'react';
import { GameContext } from '../../hooks/GameContext';
import { styles } from '../../constants/Styles';
import PlayerEmoji from './PlayerEmoji';

const TurnStatus = () => {
  const { players, currentPlayer } = useContext(GameContext);

  return (
    <TurnContainer currentPlayer={currentPlayer}>
      <NextTurnText>NEXT TURN:</NextTurnText>
      <PlayerEmoji currentPlayer={players[currentPlayer - 1]} />
    </TurnContainer>
  );
};

export default TurnStatus;

const TurnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ currentPlayer }) =>
    currentPlayer === 1 ? `${colors.playerOne}` : `${colors.playerTwo}`};
  font-size: 1em;
  text-align: center;
  font-weight: bold;
  transition: background-color 0.3s ease;
  padding: 5px;
  border: ${styles.borderSize} solid ${colors.border};
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`;

const NextTurnText = styled.p`
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 20px;
  color: ${colors.text};
`;
