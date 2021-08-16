import styled from 'styled-components';

export const StyledArticle = styled.article`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 40px 0 40px;
`;

export const StyledLabel = styled.label`
  display: block;
  h2 + & {
    margin-top: 20px;
  }
  input + & {
    margin-top: 20px;
  }
  textarea + & {
    margin-top: 20px;
  }
`;

export const StyledLabelInlineBlock = styled.label`
  display: inline-block;
  margin-top: 20px;
`;

export const StyledInputText = styled.input`
  width: 100%;
  label + & {
    margin-top: 4px;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-height: 400px;
  label + & {
    margin-top: 4px;
  }
`;

export const StyledButtonWrapper = styled.div`
  padding-top: 20px;
`;

export const StyledButton = styled.button`
  & + button {
    margin-left: 20px;
    color: #f66;
  }
`;

export const StyledReturn = styled.div`
  padding: 40px 0;
`;
