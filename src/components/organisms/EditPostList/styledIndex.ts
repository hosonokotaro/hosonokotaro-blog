import styled from 'styled-components';

export const StyledPosts = styled.div`
  margin-top: 20px;
`;

export const StyledPost = styled.div`
  & + div {
    margin-top: 20px;
  }
`;

export const StyledTimestamp = styled.div`
  margin-top: 20px;
`;
