import useSWR from 'swr';

import type { TitleListTarget } from '~/services/getPostList';
import getPostList from '~/services/getPostList';

interface Params {
  target: TitleListTarget;
}

const useTop = ({ target }: Params) => {
  const { data, error } = useSWR(target, getPostList);

  return { postListResponse: data, isLoading: !error && !data, isError: error };
};

export default useTop;
