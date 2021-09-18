import styled from 'styled-components';

export type MarginTopSize = '20px' | '40px' | '80px';

export const StyledContentBox = styled.div<{
  isBetween: boolean;
  isHalf: boolean;
  marginTopSize: MarginTopSize;
}>`
  ${({ marginTopSize }) => {
    if (marginTopSize) {
      return `
        margin-top: ${marginTopSize};
      `;
    }
  }}

  ${({ isBetween }) => {
    if (isBetween) {
      return `
        display: flex;
        justify-content: space-between;
      `;
    }
  }}

  ${({ isHalf }) => {
    if (isHalf) {
      return `
        width: calc(50% - 10px);
      `;
    }
  }}
`;
