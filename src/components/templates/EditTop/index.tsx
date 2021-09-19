import React from 'react';

import ContentBox from '@/atoms/ContentBox';
import Spinner from '@/atoms/Spinner';
import CreatePost from '@/organisms/CreatePost';
import EditPostList from '@/organisms/EditPostList';
import useEditTop from '~/customHooks/useEditTop';

// FIXME: Error handling がないので実装したい
const EditTop: React.FC = () => {
  const {
    postListResponse,
    createTitle,
    handleSubmit,
    onTitleChanged,
    canSaveNewPost,
  } = useEditTop();

  return (
    <>
      {postListResponse && (
        <>
          <ContentBox marginTopSize="40px">
            <CreatePost
              title={createTitle}
              handleSubmit={handleSubmit}
              onTitleChanged={onTitleChanged}
              canSaveNewPost={canSaveNewPost}
            />
          </ContentBox>
          <ContentBox marginTopSize="40px">
            <EditPostList postList={postListResponse.titleDateList} />
          </ContentBox>
        </>
      )}
      {!postListResponse && <Spinner />}
    </>
  );
};

export default EditTop;
