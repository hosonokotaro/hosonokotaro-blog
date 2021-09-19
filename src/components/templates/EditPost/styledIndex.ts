import styled from 'styled-components';

// TODO: component 分割する
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

export const StyledButton = styled.button`
  & + button {
    margin-left: 20px;
    color: #f66;
  }
`;

export const StyledReturn = styled.div`
  margin: 40px 0;
`;
