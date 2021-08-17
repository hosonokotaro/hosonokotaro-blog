import styled from 'styled-components';

export const StyledButton = styled.button<{ isMargin: boolean }>`
  ${({ isMargin }) => {
    if (isMargin) {
      return `
        margin-top: 20px;
      `;
    }
  }}
`;
