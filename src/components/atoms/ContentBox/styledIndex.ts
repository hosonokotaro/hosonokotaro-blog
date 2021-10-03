import styled from 'styled-components';

export type MarginTopSize = '0px' | '10px' | '20px' | '40px' | '80px';
export type TextAlign = 'left' | 'center' | 'right';

export const StyledContentBox = styled.div<{
  isBetween: boolean;
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
        flex-wrap: wrap;
        justify-content: space-between;
      `;
    }
  }}

  ${({ textAlign }) => {
    return `
      text-align: ${textAlign};
    `;
  }}
`;
