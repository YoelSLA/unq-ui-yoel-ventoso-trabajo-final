import React from 'react';
import styled from 'styled-components';

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
      : 'linear-gradient(135deg, #ddd, #f7f7f7)'
  };
`;

const OptionButton = ({ selected, onClick, children }) => {
  return (
    <StyledButton
      selected={selected}
      onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition:
    background 0.3s,
    color 0.3s,
    box-shadow 0.3s,
    transform 0.2s;
  background: ${({ selected }) => getButtonBackgroundColor(selected)};
  color: ${({ selected }) => getButtonColor(selected)};
  border: ${({ selected }) => getButtonBorder(selected)};
  box-shadow: ${({ selected }) => getButtonBoxShadow(selected)};

  &:hover {
    ${({ selected }) => getButtonHoverStyles(selected)}
  }

  &:active {
    ${({ selected }) => getButtonActiveStyles(selected)}
  }
`;

export default OptionButton;
