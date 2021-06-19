import axiosInstance from '~/adapter/axiosInstance';

export interface Props {
  title: string;
  content: string;
  release: boolean;
  idToken: string;
}

const createPost = async ({ title, content, release, idToken }: Props) => {
  await axiosInstance.post(
    '/post/createpost',
    { title, content, release },
    {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    }
  );
};

export default createPost;
