import { useEffect, useState } from 'react';

import type { Props, Response } from '~/services/getPostList';
import getPostList from '~/services/getPostList';

const useGetPostList = ({ target, idToken }: Props): Response => {
  const [status, setStatus] = useState<Response['status']>('idle');
  const [postTitleDateList, setPostTitleDateList] = useState<
    Response['postTitleDateList']
  >([]);

  useEffect(() => {
    const fetchGetPostList = async () => {
      const { status, postTitleDateList } = await getPostList({
        target,
        idToken,
      });

      setStatus(status);
      setPostTitleDateList(postTitleDateList);
    };

    fetchGetPostList();
  }, [target, idToken]);

  return { status, postTitleDateList };
};

export default useGetPostList;
