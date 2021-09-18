import React from 'react';

import Spinner from '@/atoms/Spinner';
import CreatePost from '@/organisms/CreatePost';
import EditPostList from '@/organisms/EditPostList';
import useEditTop from '~/customHooks/useEditTop';

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
          <CreatePost
            title={createTitle}
            handleSubmit={handleSubmit}
            onTitleChanged={onTitleChanged}
            canSaveNewPost={canSaveNewPost}
          />
          <EditPostList postList={postListResponse.titleDateList} />
        </>
      )}
      {!postListResponse && <Spinner />}
    </>
  );
};

export default EditTop;
