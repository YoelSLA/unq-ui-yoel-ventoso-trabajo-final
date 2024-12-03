import React, { useContext, useState, useEffect } from 'react';
import { GameContext } from './hooks/gameContext';
import GameStateEnum from './utils/enumGameState';
import GameStart from './components/GameStart';
import GamePlay from './components/GamePlay';
import GameEnd from './components/GameEnd';
import { getImagesFromPixabay } from './services';
import memotestImage from './assets/images/memotest.png';

const App = () => {
  const { gameState, selectedTheme } = useContext(GameContext);
  const [bgcImage, setBgcImage] = useState(memotestImage);

  const fetchImages = theme => {
    return getImagesFromPixabay(theme);
  };

  useEffect(() => {
    if (selectedTheme) {
      fetchImages(selectedTheme)
        .then(images => {
          const randomIndex = Math.floor(Math.random() * images.length);
          const randomImg = images[randomIndex]; // Esto es la URL de la imagen
          setBgcImage(randomImg); // Guarda solo la URL de la imagen
        })
        .catch(error => {
          console.error('Error al obtener las imágenes:', error);
        });
    }
  }, [selectedTheme]);

  return (
    <div
      style={{
        backgroundImage: `url(${bgcImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '97vh',
        overflow: 'hidden',
        fontFamily: 'Arial, sans-serif',
      }}>
      {gameState === GameStateEnum.INICIO && <GameStart />}
      {gameState === GameStateEnum.EN_JUEGO && <GamePlay />}
      {gameState === GameStateEnum.TERMINADO && <GameEnd />}
    </div>
  );
};

export default App;
