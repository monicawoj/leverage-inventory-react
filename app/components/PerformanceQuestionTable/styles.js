import styled from 'styled-components';

export const StyledTh = styled.th`
  cursor: pointer;
  &:hover {
    color: #3273dc;
  }
`;

export const StyledTd = styled.td`
  color: ${(props) => props.color}
`;
