import useSWRImmutable from 'swr/immutable';

import getPostList from '~/services/getPostList';

type TitleListTarget = Parameters<typeof getPostList>[0];

interface Params {
  target: TitleListTarget;
}

const useTop = ({ target }: Params) => {
  const { data, error } = useSWRImmutable(target, getPostList);

  return { topResponse: data, isLoading: !error && !data, isError: error };
};

export default useTop;
