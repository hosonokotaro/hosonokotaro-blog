import axiosInstance from '~/adapter/axiosInstance';

interface PostTitleDate {
  id: string;
  title: string;
  release: boolean;
  createDate: string;
}

const getTitleListTarget = {
  default: '/get/titlelist',
  privateEnabled: '/get/titlelist?private=enabled',
} as const;

type TitleListTarget = keyof typeof getTitleListTarget;

export interface Params {
  target: TitleListTarget;
  idToken?: string;
}

// TODO: useSWR に渡す fetcher を作成する
// https://swr.vercel.app/ja/docs/data-fetching#axios

const getPostList = async ({ target, idToken }: Params) => {
  let headers: { Authorization?: string } = {};

  if (target === 'privateEnabled' && idToken) {
    headers = { Authorization: `Bearer ${idToken}` };
  }

  return await axiosInstance
    .get<PostTitleDate[]>(getTitleListTarget[target], {
      headers,
    })
    .then((res) => {
      // NOTE: status はそのままでは string として認識されるので as const を利用した
      return {
        status: 'success' as const,
        titleDateList: res.data,
      };
    })
    .catch(() => {
      return {
        status: 'failure' as const,
        titleDateList: [],
      };
    });
};

export default getPostList;

export type PostListWithStatus = ReturnType<typeof getPostList>;
