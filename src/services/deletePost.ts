import axiosInstance from '~/adapter/axiosInstance';

interface Post {
  id: string;
  title: string;
  content: string;
  release: boolean;
  createDate: string;
}

const deletePost = async (id: Post['id'], idToken: string) => {
  await axiosInstance.post(
    `/post/deletepost/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    }
  );
};

export default deletePost;
