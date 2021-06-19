import axiosInstance from '~/adapter/axiosInstance';

// NOTE: id: 記事の unique id
export interface Post {
  id: string;
  title: string;
  content: string;
  release: boolean;
  createDate: string;
}

const getPostTarget = (id: string) => {
  return {
    default: `/get/post/${id}`,
    privateEnabled: `/get/post/${id}?private=enabled`,
  };
};

type GetPostTarget = keyof ReturnType<typeof getPostTarget>;

export interface Props {
  id: Post['id'];
  target: GetPostTarget;
  idToken?: string;
}

const getPost = async ({ id, target, idToken }: Props) => {
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

export type PostWithStatusType = ReturnType<typeof getPost>;
