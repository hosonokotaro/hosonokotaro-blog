import axiosInstance from '~/adapter/axiosInstance';
import type { Post } from '~/store/postSlice';

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
