import axiosInstance from '~/adapter/axiosInstance';

interface PostTitleDate {
  id: string;
  title: string;
  release: boolean;
  createDate: string;
}

// FIXME: ?private=enabled が必須の箇所は現時点ではテストが出来ないので、何らかの方法を模索したい
const getTitleListTarget = {
  default: '/get/titlelist',
  privateEnabled: '/get/titlelist?private=enabled',
} as const;

export type TitleListTarget = keyof typeof getTitleListTarget;

const getPostList = async (target: TitleListTarget, idToken?: string) => {
  let headers: { Authorization?: string } = {};

  if (target === 'privateEnabled' && idToken) {
    headers = { Authorization: `Bearer ${idToken}` };
  }

  return await axiosInstance
    .get<PostTitleDate[]>(getTitleListTarget[target], {
      headers,
    })
    .then((response) => {
      return {
        titleDateList: response.data,
      };
    });
};

export default getPostList;

export type PostListResponse = ReturnType<typeof getPostList>;
