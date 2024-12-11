import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from '../../hooks/GameContext';
import Card from './Card';
import useSound from 'use-sound';
import flipSound from '../../assets/sounds/240776__f4ngy__card-flip.wav';
import matchSound from '../../assets/sounds/62996__radian__chime-0019.wav';
import { getImagesFromPixabay } from '../../services';
import { GameDifficulty, GameMode, GameState } from '../../utils/enumGame';
import styled from 'styled-components';

const Board = ({ setMatchedPairs, setIsDraw, time }) => {
  const {
    selectedTheme,
    selectedDifficulty,
    setPlayers,
    players,
    setGameState,
    setCurrentPlayer,
    currentPlayer,
    gameState,
    selectedMode,
    setGameTime,
  } = useContext(GameContext);
  const [cards, setCards] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [playFlip] = useSound(flipSound);
  const [playMatch] = useSound(matchSound);
  const [allCardsFlippedOrRemoved, setAllCardsFlippedOrRemoved] =
    useState(false);

  const fetchImages = theme => getImagesFromPixabay(theme);

  const mapImagesToCards = images => {
    return images.map(image => ({
      emoji: image,
      flipped: false,
      removed: false,
    }));
  };

  const getBoardSize = () => {
    if (selectedDifficulty === GameDifficulty.EASY) return 4;
    if (selectedDifficulty === GameDifficulty.MEDIUM) return 5;
    return 8;
  };

  const selectCardsForBoardSize = (imageCards, boardSize) => {
    if (boardSize === 8) return imageCards;
    if (boardSize === 5) return imageCards.slice(0, 12);
    return imageCards.slice(0, boardSize * 2);
  };

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
      setTimeout(() => checkMatch(newFlippedIndexes), 1000);
    }
  };

  const checkMatch = ([firstIndex, secondIndex]) => {
    if (cards[firstIndex].emoji === cards[secondIndex].emoji) {
      setPlayers(prevPlayers =>
        prevPlayers.map(player =>
          player.id === players[currentPlayer - 1].id
            ? { ...player, score: player.score + 1 }
            : player,
        ),
      );
      playMatch();

      const newCards = cards.map((card, i) => {
        if (i === firstIndex || i === secondIndex) {
          return { ...card, removed: true, matched: true };
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

      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }

    setFlippedIndexes([]);
  };

  useEffect(() => {
    const totalMatchedPairs = cards.filter(card => card.matched).length / 2;
    setMatchedPairs(totalMatchedPairs);
  }, [cards, setMatchedPairs]);

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
    const timer = setTimeout(() => {
      setAllCardsFlippedOrRemoved(
        cards.length > 0 && cards.every(card => card.flipped || card.removed),
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, [cards]);

  useEffect(() => {
    if (allCardsFlippedOrRemoved) {
      const player1Score = players[0].score;
      const player2Score = players[1].score;

      if (
        selectedMode === GameMode.MULTIPLAYER &&
        player1Score === player2Score
      ) {
        setIsDraw(true);
      } else {
        setGameState(GameState.END);
        setGameTime(time);
      }
    }
  }, [allCardsFlippedOrRemoved, players, setIsDraw, gameState, setGameState]);

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
