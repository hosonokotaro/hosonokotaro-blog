import React from 'react';

import Layout from '@/atoms/Layout';
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
      <Layout tag="article">
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
      </Layout>
      <Login />
    </>
  );
};

export default EditTop;
