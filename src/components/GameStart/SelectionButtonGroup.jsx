import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/Colors';
import { GameDifficulty, GameMode } from '../../utils/enumGame';
import OptionButton from './OptionButton';
import { styles } from '../../constants/Styles';

const SelectionButtonGroup = ({
  options,
  selectedOption,
  onOptionSelect,
  difficulty,
  mode,
}) => {
  return (
    <div>
      <ButtonsContainer
        difficulty={difficulty}
        mode={mode}>
        {options.map(option => (
          <OptionButton
            key={option}
            selected={option === selectedOption}
            onClick={() => onOptionSelect(option)}>
            {option}
          </OptionButton>
        ))}
      </ButtonsContainer>
    </div>
  );
};

export default SelectionButtonGroup;

const getBackgroundColor = (difficulty, mode) => {
  if (difficulty) {
    switch (difficulty) {
      case GameDifficulty.EASY:
        return 'linear-gradient(135deg, #4CAF50, #6FBF73, #8BC34A)';
      case GameDifficulty.MEDIUM:
        return 'linear-gradient(135deg, #FFD54F, #FFC107, #FFB300)';
      case GameDifficulty.HARD:
        return 'linear-gradient(135deg, #F44336, #E53935, #D32F2F)';
      default:
        return '';
    }
  } else if (mode) {
    switch (mode) {
      case GameMode.SINGLE:
        return 'linear-gradient(135deg, #2196F3, #42A5F5, #64B5F6)';
      case GameMode.MULTIPLAYER:
        return 'linear-gradient(135deg, #FF7043, #FF5722, #E64A19)';
      default:
        return '';
    }
  }
  return '';
};

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: ${styles.borderSize} solid ${colors.onSurfaceContainer};
  background: ${props => getBackgroundColor(props.difficulty, props.mode)};
`;
