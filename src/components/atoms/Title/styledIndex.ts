import styled from 'styled-components';

export const StyledTitle = styled.h2<{
  rankStyle: 'h2' | 'h3' | 'h4';
}>`
  ${({ rankStyle }) => {
    switch (rankStyle) {
      case 'h3':
        return 'font-size: 1.6rem';
      case 'h4':
        return 'font-size: 1.2rem';
      default:
        return 'font-size: 2rem';
    }
  }}
`;
