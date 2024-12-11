import React from 'react';
import styled from 'styled-components';

const TimeDisplay = ({ time }) => {
  return <Time>{time}</Time>;
};

export default TimeDisplay;

const Time = styled.div`
  font-size: 1.4em;
  font-weight: bold;
  background: linear-gradient(
    135deg,
    rgba(0, 123, 255, 0.8),
    rgba(0, 51, 204, 0.8)
  );
  border-radius: 20px;
  padding: 5px;
  border: 2px solid black;
  color: #fff;
`;
