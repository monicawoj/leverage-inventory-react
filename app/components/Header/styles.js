import styled from 'styled-components';

const StyledHeader = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  button {
    font-size: 16px;
    text-transform: uppercase;
    border-radius: 5px;
    border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
    border-style: solid;
    border-width: 1px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      color: mediumpurple;
      background-color: #f9f8fb;
    }
  }
`;

export default StyledHeader;
