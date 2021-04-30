import axiosInstance from '~/adapter/axiosInstance';

// TODO: 投稿時のタイムゾーンが正しく設定されていないので修正する
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
