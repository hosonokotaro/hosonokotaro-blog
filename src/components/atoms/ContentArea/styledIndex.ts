import styled from 'styled-components';

export type MarginTopSize = '20px' | '40px' | '80px';

export const StyledContentArea = styled.div<{
  marginTopSize: MarginTopSize;
}>`
  ${({ marginTopSize }) => {
    return `
      margin-top: ${marginTopSize};
    `;
  }}
`;
