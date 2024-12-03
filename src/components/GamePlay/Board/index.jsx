import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from '../../../hooks/gameContext';
import Card from '../Card';
import useSound from 'use-sound';
import flipSound from '../../../assets/sounds/240776__f4ngy__card-flip.wav';
import matchSound from '../../../assets/sounds/62996__radian__chime-0019.wav';
import gameCompleteSound from '../../../assets/sounds/741977__victor_natas__victory-sting-5.wav';
import GameStateEnum from '../../../utils/enumGameState';
import { getImagesFromPixabay } from '../../../services';
import GameDifficultyEnum from '../../../utils/enumGameDifficulty';
import styled from 'styled-components';

const Board = ({ setGameState, time }) => {
  const { selectedTheme, selectedDifficulty, setScore, score, setGameTime } =
    useContext(GameContext);
  const [cards, setCards] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [playFlip] = useSound(flipSound);
  const [playMatch] = useSound(matchSound);
  const [playGameComplete] = useSound(gameCompleteSound);

  // Función para obtener las imágenes de Pixabay
  const fetchImages = theme => {
    return getImagesFromPixabay(theme);
  };

  // Función para mapear las imágenes a cartas
  const mapImagesToCards = images => {
    return images.map(image => ({
      emoji: image, // Usamos la URL de la imagen como 'emoji'
      flipped: false,
      removed: false,
    }));
  };

  const getBoardSize = () => {
    if (selectedDifficulty === GameDifficultyEnum.EASY) {
      return 4;
    } else if (selectedDifficulty === GameDifficultyEnum.MEDIUM) {
      return 5;
    } else {
      return 8;
    }
  };

  // Función para seleccionar las cartas basadas en el tamaño del tablero
  const selectCardsForBoardSize = (imageCards, boardSize) => {
    if (boardSize === 8) {
      return imageCards;
    }
    if (boardSize === 5) {
      return imageCards.slice(0, 12);
    }
    return imageCards.slice(0, boardSize * 2);
  };

  // Función para duplicar y mezclar las cartas
  const shuffleCards = selectedCards => {
    return [...selectedCards, ...selectedCards].sort(() => Math.random() - 0.5);
  };

  const handleCardClick = index => {
    if (flippedIndexes.length === 2 || cards[index].flipped) return;

    playFlip();

    const newFlippedIndexes = [...flippedIndexes, index];
    setFlippedIndexes(newFlippedIndexes);

    const newCards = cards.map((card, i) =>
      newFlippedIndexes.includes(i) ? { ...card, flipped: true } : card,
    );
    setCards(newCards);

    if (newFlippedIndexes.length === 2) {
      setTimeout(() => {
        checkMatch(newFlippedIndexes);
      }, 1000);
    }
  };

  const checkMatch = ([firstIndex, secondIndex]) => {
    if (cards[firstIndex].emoji === cards[secondIndex].emoji) {
      setScore(score + 1);
      playMatch();

      const newCards = cards.map((card, i) => {
        if (i === firstIndex || i === secondIndex) {
          return { ...card, removed: true, matched: true }; // Se marca como 'matched'
        }
        return card;
      });

      setCards(newCards);
    } else {
      const newCards = cards.map((card, i) =>
        i === firstIndex || i === secondIndex
          ? { ...card, flipped: false }
          : card,
      );
      setCards(newCards);
    }

    setFlippedIndexes([]);
  };

  useEffect(() => {
    if (selectedTheme) {
      fetchImages(selectedTheme)
        .then(images => {
          const imageCards = mapImagesToCards(images);
          const selectedCards = selectCardsForBoardSize(
            imageCards,
            getBoardSize(),
          );
          setCards(shuffleCards(selectedCards));
        })
        .catch(error => {
          console.error('Error al obtener las imágenes:', error);
        });
    }
  }, [selectedTheme]);

  useEffect(() => {
    // cards.length > 0 && cards.every(card => card.flipped || card.removed))
    if (true) {
      // playGameComplete();
      setGameState(GameStateEnum.TERMINADO);
      setGameTime(time);
    }
  }, [cards, playGameComplete, setGameState]);

  const boardSize = getBoardSize();

  return (
    <BoardWrapper
      columns={boardSize}
      rows={boardSize}>
      {cards.map((card, index) => (
        <Card
          key={index}
          emoji={card.emoji}
          flipped={card.flipped}
          removed={card.removed}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </BoardWrapper>
  );
};

export default Board;

export const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => {
    const cellSize = 480 / columns;
    return `repeat(${columns}, ${cellSize}px)`;
  }};
  grid-template-rows: ${({ rows, columns }) => {
    const cellSize = 480 / columns;
    return `repeat(${rows}, ${cellSize}px)`;
  }};
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: ${({ columns }) => {
    const cellSize = 480 / columns;
    return columns * (cellSize + 10);
  }}px;
  margin: 0 auto;
`;
