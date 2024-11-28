import styled from 'styled-components';

export const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 100px); /* 4 columnas de 100px */
  grid-template-rows: repeat(4, 100px); /* 4 filas de 100px */
  gap: 10px; /* Espacio entre las cartas */
  justify-content: center; /* Centrar el tablero en la página */
  align-items: center; /* Centrar las cartas dentro de sus celdas */
  width: 440px; /* Ajusta el tamaño del tablero */
  margin: 0 auto; /* Centra el tablero en la página */
`;