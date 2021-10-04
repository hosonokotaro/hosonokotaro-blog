import axiosInstance from '~/adapter/axiosInstance';

export interface Post {
  title: string;
  content: string;
  release: boolean;
}

// NOTE: id = documentPath
const updatePost = async (id: string, idToken: string, post: Post) => {
  await axiosInstance.post(`/post/updatepost/${id}`, post, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
};

export default updatePost;
