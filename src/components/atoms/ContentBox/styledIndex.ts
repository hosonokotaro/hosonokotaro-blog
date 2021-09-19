import styled from 'styled-components';

export type MarginTopSize = '0px' | '20px' | '40px' | '80px';
export type TextAlign = 'left' | 'center' | 'right';

export const StyledContentBox = styled.div<{
  isBetween: boolean;
  isHalf: boolean;
  marginTopSize: MarginTopSize;
  textAlign: TextAlign;
}>`
  ${({ marginTopSize }) => {
    return `
      margin-top: ${marginTopSize};
    `;
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

  ${({ textAlign }) => {
    return `
      text-align: ${textAlign};
    `;
  }}
`;
