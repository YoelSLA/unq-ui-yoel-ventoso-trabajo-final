/* eslint-disable react-refresh/only-export-components */
import React, { useState, createContext } from 'react';
import GameStateEnum from '../utils/enumGameState';

export const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState(GameStateEnum.INICIO);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState('EASY');
  const [score, setScore] = useState(0);
  const [gameTime, setGameTime] = useState('');

  return (
    <GameContext.Provider
      value={{
        gameState,
        setGameState,
        selectedTheme,
        setSelectedTheme,
        selectedDifficulty,
        setSelectedDifficulty,
        score,
        setScore,
        gameTime,
        setGameTime,
      }}>
      {children}
    </GameContext.Provider>
  );
};
