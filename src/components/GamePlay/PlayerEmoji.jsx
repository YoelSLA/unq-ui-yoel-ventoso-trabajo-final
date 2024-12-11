import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/Colors';

const PlayerEmoji = ({ currentPlayer }) => {
  return (
    <PlayerEmojiContainer currentPlayer={currentPlayer}>
      {currentPlayer.emoji}
    </PlayerEmojiContainer>
  );
};

export default PlayerEmoji;

const PlayerEmojiContainer = styled.div`
  align-items: center;
  border-radius: 50%;
  border: 2px dotted ${colors.border};
  display: flex;
  height: 35px;
  justify-content: center;
  width: 35px;
  background: ${({ currentPlayer }) =>
    currentPlayer.id === 1 ? `${colors.playerOne}` : `${colors.playerTwo}`};
  padding: 5px;
  font-size: 1.2em;
`;
