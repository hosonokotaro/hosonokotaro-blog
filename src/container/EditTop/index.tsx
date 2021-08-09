import React from 'react';

import Spinner from '@/atoms/Spinner';
import CreatePost from '@/organisms/CreatePost';
import EditPostList from '@/organisms/EditPostList';
import Login from '@/organisms/Login';
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
        {postListWithStatus && postListWithStatus.status === 'success' && (
          <>
            <CreatePost
              title={createTitle}
              handleSubmit={handleSubmit}
              onTitleChanged={onTitleChanged}
              canSaveNewPost={canSaveNewPost}
            />
            <EditPostList postList={postListWithStatus.titleDateList} />
          </>
        )}
        {!postListWithStatus && <Spinner />}
      </article>
      <Login />
    </>
  );
};

export default EditTop;
