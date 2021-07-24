import axiosInstance from '~/adapter/axiosInstance';

export interface Params {
  title: string;
  content: string;
  release: boolean;
  idToken: string;
}

const createPost = async ({ title, content, release, idToken }: Params) => {
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
