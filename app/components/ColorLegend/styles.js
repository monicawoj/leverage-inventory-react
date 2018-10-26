import styled from 'styled-components';
import { matchColor } from 'utils/chartHelperFunctions';

const StyledColorLegend = styled.div`
  width: 130px;
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
    width: 100%;
    p {
      margin: 3px;
    }
    .legend-square {
      width: 20px;
      height: 20px;
      margin-right: 5px;
      opacity: 0.6;
      &.hard {
        background-color: #c96962
      }
      &.soft {
        background-color: #6294c9
      }
      &.smart {
        background-color: #62c97c
      }
    }
  }
`;

export default StyledColorLegend;
