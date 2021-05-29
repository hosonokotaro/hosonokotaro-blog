import axiosInstance from '~/adapter/axiosInstance';

export interface CreatePost {
  title: string;
  content: string;
  release: boolean;
  bearerToken: string;
}

const createPost = async ({
  title,
  content,
  release,
  bearerToken,
}: CreatePost): Promise<void> => {
  await axiosInstance.post(
    '/post/createpost',
    { title, content, release },
    {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    }
  );
};

export default createPost;
