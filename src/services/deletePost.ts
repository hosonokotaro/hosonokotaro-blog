import axiosInstance from '~/adapter/axiosInstance';

interface Post {
  id: string;
  title: string;
  content: string;
  release: boolean;
  createDate: string;
}

export interface DeletePost {
  id: Post['id'];
  idToken: string;
}

const deletePost = async ({ id, idToken }: DeletePost) => {
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
