import styled from 'styled-components';
import { colors } from '../../constants/Colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: ${colors.outline};
  background-repeat: no-repeat;
  background-position: center;  
  background-size: cover;  

  position: relative;  
  height: auto;
  border: 1px solid black;
`;

export const InnerContainer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

export const Container1 = styled.div`

`;

export const Container2 = styled.div`
  height: 400px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 50%); 

  gap: 10px; 
  justify-content: center; 
  margin: 0 auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const DifficultyButton = styled.button`
  background-color: ${(props) => (props.selected ? colors.success : colors.border)};
  color: ${(props) => (props.selected ? colors.surfaceContainer : colors.onSurfaceContainer)};
  padding: 10px 20px;
  margin: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.selected ? '#45a049' : '#dcdcdc')};
  }
`;