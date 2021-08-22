import React, { ChangeEvent } from 'react';

import Button from '@/atoms/Button';
import Title from '@/atoms/Title';

import {
  StyledInputText,
  StyledLabel,
  StyledSection,
  StyledWrapper,
} from './styledIndex';

export interface Props {
  title: string;
  handleSubmit: VoidFunction;
  onTitleChanged: (e: ChangeEvent<HTMLInputElement>) => void;
  canSaveNewPost: boolean;
}

const CreatePost: React.FC<Props> = ({
  title,
  handleSubmit,
  onTitleChanged,
  canSaveNewPost,
}) => {
  return (
    <StyledSection>
      <Title text="記事の新規作成" />
      <StyledWrapper>
        <form>
          <StyledLabel htmlFor="postTitle">タイトル</StyledLabel>
          <StyledInputText
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
        </form>
        <Button
          text="記事を準備する"
          onClick={handleSubmit}
          disabled={!canSaveNewPost}
          isMargin
        />
      </StyledWrapper>
    </StyledSection>
  );
};

export default CreatePost;
