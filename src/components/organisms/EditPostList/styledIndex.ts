import styled from 'styled-components';

export const StyledPosts = styled.div`
  padding-top: 20px;
`;

export const StyledPost = styled.div`
  & + div {
    padding-top: 20px;
  }
`;

export const StyledTimestamp = styled.div`
  padding-top: 20px;
  & + label {
    margin-top: 80px;
    padding-top: 80px;
    border-top: 1px solid #333;
  }
`;
