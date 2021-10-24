import useSWRImmutable from 'swr/immutable';

import getPostList from '~/services/getPostList';

type Target = Parameters<typeof getPostList>[0];

const useTop = (target: Target = 'default') => {
  const { data, error } = useSWRImmutable(target, getPostList);

  return { topResponse: data, isLoading: !error && !data, isError: error };
};

export default useTop;
