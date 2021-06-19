import React from 'react';

import CreatePost from '@/CreatePost';
import EditPostList from '@/EditPostList';
import Login from '@/Login';
import Spinner from '@/Spinner';
import useEditTop from '~/customHooks/useEditTop';

const EditTop: React.FC = () => {
  const {
    postListWithStatus,
    createTitle,
    handleSubmit,
    onTitleChanged,
    canSaveNewPost,
  } = useEditTop();

  return (
    <>
      <article>
        {postListWithStatus && postListWithStatus.status === 'success' ? (
          <>
            <CreatePost
              title={createTitle}
              handleSubmit={handleSubmit}
              onTitleChanged={onTitleChanged}
              canSaveNewPost={canSaveNewPost}
            />
            <EditPostList postList={postListWithStatus.titleDateList} />
          </>
        ) : (
          <Spinner />
        )}
      </article>
      <Login />
    </>
  );
};

export default EditTop;
