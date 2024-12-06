/* eslint-disable react-refresh/only-export-components */
import React, { useState, createContext } from 'react';
import { GameState, GameDifficulty, GameMode } from '../utils/enumGame';

export const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState(GameState.START);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(
    GameDifficulty.EASY,
  );
  const [scorePlayer1, setScorePlayer1] = useState(0); // Puntaje jugador 1
  const [scorePlayer2, setScorePlayer2] = useState(0); // Puntaje jugador 2
  const [gameTime, setGameTime] = useState('');
  const [selectedMode, setSelectedMode] = useState(GameMode.SINGLE);
  const [currentPlayer, setCurrentPlayer] = useState(1); // 1 para Jugador 1, 2 para Jugador 2

  return (
    <GameContext.Provider
      value={{
        gameState,
        setGameState,
        selectedTheme,
        setSelectedTheme,
        selectedDifficulty,
        setSelectedDifficulty,
        scorePlayer1,
        setScorePlayer1,
        scorePlayer2,
        setScorePlayer2,
        gameTime,
        setGameTime,
        selectedMode,
        setSelectedMode,
        currentPlayer,
        setCurrentPlayer,
      }}>
      {children}
    </GameContext.Provider>
  );
};
