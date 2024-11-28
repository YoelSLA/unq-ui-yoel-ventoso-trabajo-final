/* eslint-disable react-refresh/only-export-components */
import React, { useState, createContext } from 'react';
import GameStateEnum from '../utils/enumGameState';

export const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState(GameStateEnum.INICIO);

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameContext.Provider>
  );
};
