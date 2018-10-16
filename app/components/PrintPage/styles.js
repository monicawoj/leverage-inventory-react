import styled from 'styled-components';

export const StyledPrintPage = styled.div`
  display: block;
  page-break-after: always;
  page-break-inside: avoid;
  -webkit-print-color-adjust: exact;
  max-width: 7in;
`;
