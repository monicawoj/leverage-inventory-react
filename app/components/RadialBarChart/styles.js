import styled from 'styled-components';

export const StyledCircle = styled.circle`
  stroke: grey;
  stroke-dasharray: 2;
  stroke-width: 0.5px;
  fill: none;
`;

export const StyledOuterCircle = styled.circle`
  stroke: grey;
  stroke-width: 1px;
  fill: none;
`;

export const StyledText = styled.text`
  font-size: 10px;
  text-anchor: middle;
`;

export const CenteredSvg = styled.svg`
  display: block;
  margin: auto;
`;

export const StyledLine = styled.line`
  stroke: #ccc;
  stroke-width: 0.4;
`;
