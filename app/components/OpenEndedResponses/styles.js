import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  h2 {
    padding: 0;
    width: 70%;
    margin: 10px;
    text-align: center;
  }
  .open-ended-responses {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    h4 {
      width: 30%;
      min-width: 200px;
    }
    ul {
      list-style-type: none;
      margin: 10px;
      padding: 0;
      width: 60%;
    }
    li {
      border-bottom: 1px solid #ccc;
      display: block;
      width: 100%;
      padding: 10px;
      &:last-child {
        border: none;
      }
    }
  }
`;

export default StyledDiv;
