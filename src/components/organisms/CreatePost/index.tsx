import React, { ChangeEvent } from 'react';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import InputTextInline from '@/atoms/InputTextInline';
import TextLabel from '@/atoms/TextLabel';
import Title from '@/atoms/Title';

// FIXME: ComponentProps<typeof Component> に置き換えたい
export interface Props {
  title: string;
  handleSubmit: VoidFunction;
  onTitleChanged: (e: ChangeEvent<HTMLInputElement>) => void;
  canSaveNewPost: boolean;
}

const groupName = 'postTitle';

const CreatePost: React.FC<Props> = ({
  title,
  handleSubmit,
  onTitleChanged,
  canSaveNewPost,
}) => {
  return (
    <section>
      <Title text="記事の新規作成" />
      <ContentBox marginTopSize="20px">
        <form onSubmit={(event) => event.preventDefault()}>
          <TextLabel htmlFor={groupName} text="タイトル" />
          <InputTextInline
            id={groupName}
            name={groupName}
            defaultValue={title}
            handleChange={onTitleChanged}
          />
          <ContentBox marginTopSize="20px">
            <Button
              text="記事を準備する"
              onClick={handleSubmit}
              disabled={!canSaveNewPost}
            />
          </ContentBox>
        </form>
      </ContentBox>
    </section>
  );
};

export default CreatePost;
