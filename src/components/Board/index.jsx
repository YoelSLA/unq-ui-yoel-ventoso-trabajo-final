import React, { useState, useEffect } from 'react';
import Card from '../Card';
import { BoardWrapper } from './mixins';
import useSound from 'use-sound';
import flipSound from '../../assets/sounds/240776__f4ngy__card-flip.wav'; // Sonido al voltear una carta
import matchSound from '../../assets/sounds/62996__radian__chime-0019.wav'; // Sonido al acertar
import gameCompleteSound from '../../assets/sounds/741977__victor_natas__victory-sting-5.wav';

const Board = () => {
  const [cards, setCards] = useState(
    [
      { emoji: '🐶', flipped: false, removed: false },
      { emoji: '🐶', flipped: false, removed: false },
      { emoji: '🐱', flipped: false, removed: false },
      { emoji: '🐱', flipped: false, removed: false },
      { emoji: '🐭', flipped: false, removed: false },
      { emoji: '🐭', flipped: false, removed: false },
      { emoji: '🐰', flipped: false, removed: false },
      { emoji: '🐰', flipped: false, removed: false },
      { emoji: '🦊', flipped: false, removed: false },
      { emoji: '🦊', flipped: false, removed: false },
      { emoji: '🐻', flipped: false, removed: false },
      { emoji: '🐻', flipped: false, removed: false },
      { emoji: '🐼', flipped: false, removed: false },
      { emoji: '🐼', flipped: false, removed: false },
      { emoji: '🐨', flipped: false, removed: false },
      { emoji: '🐨', flipped: false, removed: false },
    ].sort(() => Math.random() - 0.5),
  );

  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [playFlip] = useSound(flipSound);
  const [playMatch] = useSound(matchSound);
  const [playGameComplete] = useSound(gameCompleteSound);

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
      playMatch();

      // Marcar las cartas como eliminadas
      const newCards = cards.map((card, i) =>
        i === firstIndex || i === secondIndex
          ? { ...card, removed: true }
          : card,
      );
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
    if (cards.every(card => card.flipped || card.removed)) {
      playGameComplete();
    }
  }, [cards, playGameComplete]);

  return (
    <BoardWrapper>
      {cards.map((card, index) => (
        <Card
          key={index}
          emoji={card.emoji}
          flipped={card.flipped}
          removed={card.removed} // Propiedad para marcar cartas eliminadas
          onClick={() => handleCardClick(index)}
        />
      ))}
    </BoardWrapper>
  );
};

export default Board;
