import React, { ChangeEvent } from 'react';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import Title from '@/atoms/Title';

import { StyledForm, StyledInputText, StyledLabel } from './styledIndex';

// FIXME: ComponentProps<typeof Component> に置き換えたい
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
    <section>
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
        <ContentBox marginTopSize="20px">
          <Button
            text="記事を準備する"
            onClick={handleSubmit}
            disabled={!canSaveNewPost}
          />
        </ContentBox>
      </StyledForm>
    </section>
  );
};

export default CreatePost;
