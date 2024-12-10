import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimeDisplay = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  return <Time>{formatTime(time)}</Time>;
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
`;
