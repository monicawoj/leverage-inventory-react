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
    &:hover {
      color: mediumpurple;
    }
  }
  button:first-of-type {
    border-right: 1px solid black;
  }
`;

export default StyledToggleHolder;
