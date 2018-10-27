import styled from 'styled-components';

const StyledToggleHolder = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  button {
    border: none;
    padding: 5px;
    font-size: 16px;
    cursor: pointer;
    border-right: 1px solid black;
    &:hover {
      color: mediumpurple;
    }
  }
  button:last-of-type {
    border-right: none;
  }
`;

export default StyledToggleHolder;
