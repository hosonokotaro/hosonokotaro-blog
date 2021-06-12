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

type GetTitleListTarget = keyof typeof getTitleListTarget;

export interface Props {
  target: GetTitleListTarget;
  idToken?: string;
}

const getPostList = async ({ target, idToken }: Props) => {
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

// FIXME: titleDateList が取れる確証は無いので本来は ? だが、Redux State の為に取れる前提になっている。今後修正したい
export type PostListType = ReturnType<typeof getPostList>;
