import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/Colors';
import { GameDifficulty, GameMode } from '../../utils/enumGame';

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
  border: 2px solid ${colors.onSurfaceContainer};
  background: ${props => getBackgroundColor(props.difficulty, props.mode)};
`;

const buttonBaseStyle = `
  padding: 10px 20px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.3s, color 0.3s, box-shadow 0.3s, transform 0.2s;
`;

const getButtonBackgroundColor = selected =>
  selected
    ? 'linear-gradient(135deg, #6a11cb, #2575fc)'
    : 'linear-gradient(135deg, #e0e0e0, #f8f8f8)';

const getButtonBorder = selected =>
  selected ? '2px solid #4b0082' : '2px solid #cccccc';

const getButtonColor = selected => (selected ? '#FFF' : '#333');

const getButtonBoxShadow = selected =>
  selected
    ? '0px 4px 8px rgba(106, 17, 203, 0.5)'
    : '0px 4px 8px rgba(0, 0, 0, 0.1)';

const getButtonHoverStyles = selected => `
  background: ${
    selected
      ? 'linear-gradient(135deg, #5a0fc8, #1c6cfc)'
      : 'linear-gradient(135deg, #f0f0f0, #FFF)'
  };
  box-shadow: ${
    selected
      ? '0px 6px 12px rgba(106, 17, 203, 0.7)'
      : '0px 6px 12px rgba(0, 0, 0, 0.15)'
  };
  transform: scale(1.05);
`;

const getButtonActiveStyles = selected => `
  transform: scale(0.98);
  background: ${
    selected
      ? 'linear-gradient(135deg, #4a0bb8, #155dcf)'
      : 'linear-gradient(135deg, #dddddd, #f7f7f7)'
  };
`;

export const OptionButton = styled.button`
  ${buttonBaseStyle}
  background: ${props => getButtonBackgroundColor(props.selected)};
  color: ${props => getButtonColor(props.selected)};
  border: ${props => getButtonBorder(props.selected)};
  box-shadow: ${props => getButtonBoxShadow(props.selected)};

  &:hover {
    ${props => getButtonHoverStyles(props.selected)}
  }

  &:active {
    ${props => getButtonActiveStyles(props.selected)}
  }
`;
