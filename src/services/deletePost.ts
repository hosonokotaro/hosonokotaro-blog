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
  bearerToken: string;
}

const deletePost = async ({ id, bearerToken }: DeletePost): Promise<void> => {
  await axiosInstance.post(
    `/post/deletepost/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    }
  );
};

export default deletePost;
