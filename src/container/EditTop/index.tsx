import React from 'react';

import Layout from '@/atoms/Layout';
import Spinner from '@/atoms/Spinner';
import CreatePost from '@/organisms/CreatePost';
import EditPostList from '@/organisms/EditPostList';
import Login from '~/container/Login';
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
      <Layout tag="article">
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
      </Layout>
      <Login />
    </>
  );
};

export default EditTop;
