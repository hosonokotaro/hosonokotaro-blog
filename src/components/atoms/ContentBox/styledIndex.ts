import styled from 'styled-components';

export const StyledContentBox = styled.div<{
  isBetween: boolean;
  isHalf: boolean;
}>`
  margin-top: 20px;

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
