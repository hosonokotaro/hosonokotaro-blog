import axiosInstance from '~/adapter/axiosInstance';

// NOTE: id: 記事の unique id
export interface Post {
  id: string;
  title: string;
  content: string;
  release: boolean;
  createDate: string;
}

const getPostTarget = (id: Post['id']) => {
  return {
    default: `/get/post/${id}`,
    privateEnabled: `/get/post/${id}?private=enabled`,
  };
};

type PostTarget = keyof ReturnType<typeof getPostTarget>;

export interface Params {
  id: Post['id'];
  target: PostTarget;
  idToken?: string;
}

// TODO: useSWR に渡す fetcher を作成する
// https://swr.vercel.app/ja/docs/data-fetching#axios

const getPost = async ({ id, target, idToken }: Params) => {
  let headers: { Authorization?: string } = {};

  if (target === 'privateEnabled' && idToken) {
    headers = { Authorization: `Bearer ${idToken}` };
  }

  // NOTE: target の path list を取得する
  const targetPath = getPostTarget(id);

  return await axiosInstance
    .get<Post>(targetPath[target], {
      headers,
    })
    .then((res) => {
      // NOTE: status はそのままでは string として認識されるので as const を利用した
      return {
        status: 'success' as const,
        post: res.data,
      };
    })
    .catch(() => {
      return {
        status: 'failure' as const,
        post: {
          id: '',
          title: '',
          content: '',
          release: false,
          createDate: '',
        },
      };
    });
};

export default getPost;

export type PostWithStatus = ReturnType<typeof getPost>;
