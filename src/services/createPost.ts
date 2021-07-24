import axiosInstance from '~/adapter/axiosInstance';

export interface Post {
  title: string;
  content: string;
  release: boolean;
}

const createPost = async (idToken: string, post: Post) => {
  await axiosInstance.post('/post/createpost', post, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
};

export default createPost;
