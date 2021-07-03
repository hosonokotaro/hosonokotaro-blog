import axiosInstance from '~/adapter/axiosInstance';

// NOTE: id = documentPath
export interface Params {
  id: string;
  idToken: string;
}

export interface Post {
  title: string;
  content: string;
  release: boolean;
}

const updatePost = async (
  { id, idToken }: Params,
  { title, content, release }: Post
) => {
  await axiosInstance.post(
    `/post/updatepost/${id}`,
    { title, content, release },
    {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    }
  );
};

export default updatePost;
