import React, { ChangeEvent } from 'react';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import Title from '@/atoms/Title';

// FIXME: Organisms から Style を削除したい
import {
  StyledForm,
  StyledInputText,
  StyledLabel,
  StyledSection,
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
      <StyledForm onSubmit={(event) => event.preventDefault()}>
        <StyledLabel htmlFor="postTitle">タイトル</StyledLabel>
        <StyledInputText
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <ContentBox>
          <Button
            text="記事を準備する"
            onClick={handleSubmit}
            disabled={!canSaveNewPost}
          />
        </ContentBox>
      </StyledForm>
    </StyledSection>
  );
};

export default CreatePost;
