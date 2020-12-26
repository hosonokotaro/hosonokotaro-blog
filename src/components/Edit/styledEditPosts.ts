import { styled } from '@linaria/react';

export const StyledSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 40px 0 40px;
`;

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
