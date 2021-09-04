import styled from 'styled-components';

// FIXME: atoms から margin を削除したい
export const StyledButton = styled.button<{ isMargin: boolean }>`
  ${({ isMargin }) => {
    if (isMargin) {
      return `
        margin-top: 20px;
      `;
    }
  }}
`;
