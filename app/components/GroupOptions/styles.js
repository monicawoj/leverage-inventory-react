import styled from 'styled-components';

const StyledDiv = styled.div`
  fieldset {
    width: 300px;
  }
  .options {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    div {
      padding: 10px;
    }
    .radio {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      label {
        text-transform: uppercase;
      }
    }
  }
`;

export default StyledDiv;
