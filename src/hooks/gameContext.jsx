/* eslint-disable react-refresh/only-export-components */
import React, { useState, createContext } from 'react';
import { GameState, GameDifficulty, GameMode } from '../utils/enumGame';

export const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState(GameState.START);
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState(
    GameDifficulty.HARD,
  );
  const [gameTime, setGameTime] = useState('');
  const [selectedMode, setSelectedMode] = useState(GameMode.MULTIPLAYER);
  const [players, setPlayers] = useState([
    { id: 1, score: 0, emoji: '' },
    { id: 2, score: 0, emoji: '' },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const emojiMapping = {
    animals: ['🐶', '🐱'],
    fruits: ['🍎', '🍌'],
    transport: ['🚗', '🚂'],
    house_interior: ['🏠', '🛋️'],
    default: ['🤔', '🤔'],
  };

  const updatePlayerEmojiByTheme = theme => {
    const newEmojis = emojiMapping[theme] || emojiMapping.default;
    setPlayers(prevPlayers =>
      prevPlayers.map((player, index) => ({
        ...player,
        emoji: newEmojis[index],
      })),
    );
  };

  const updatePlayerScore = (playerId, newScore) => {
    setPlayers(prevPlayers =>
      prevPlayers.map(player =>
        player.id === playerId ? { ...player, score: newScore } : player,
      ),
    );
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        setGameState,
        selectedTheme,
        setSelectedTheme: theme => {
          setSelectedTheme(theme);
          updatePlayerEmojiByTheme(theme);
        },
        selectedDifficulty,
        setSelectedDifficulty,
        gameTime,
        setGameTime,
        selectedMode,
        setSelectedMode,
        players,
        setPlayers,
        currentPlayer,
        setCurrentPlayer,
        updatePlayerScore,
      }}>
      {children}
    </GameContext.Provider>
  );
};
