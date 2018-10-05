import styled from 'styled-components';

export const Tooltip = styled.div`
  position: absolute;
  text-align: center;
  max-width: 200px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 4px;
  background: white;
  color: black;
  pointer-events: none;
  font-size: 16px;
  opacity: 0.8;
  display: none;
  hr {
    margin: 0
  }
`;
