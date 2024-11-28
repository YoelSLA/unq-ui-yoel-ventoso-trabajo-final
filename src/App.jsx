import { GameProvider } from './hooks/gameContext';
import Board from './components/Board';

const App = () => {
  return (
    <GameProvider>
      <div>
        <h1>Memotest</h1>
        <Board />
      </div>
    </GameProvider>
  );
};

export default App;
