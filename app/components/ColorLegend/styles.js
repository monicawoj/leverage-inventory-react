import styled from 'styled-components';

const StyledColorLegend = styled.div`
  width: 33%;
  min-width: 160px;
  height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-left: 20%;
    width: 100%;
    p {
      font-weight: normal;
      font-size: 16px;
    }
    .legend-square {
      width: 20px;
      height: 20px;
      margin-right: 5px;
      &.hard {
        background-color: #ff7f7f
      }
      &.soft {
        background-color: #9999ff
      }
      &.smart {
        background-color: #abf9b4
      }
    }
  }
`;

export default StyledColorLegend;
