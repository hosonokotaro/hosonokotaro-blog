import { useEffect, useState } from 'react';

import type { Props, Response } from '~/services/getPostList';
import getPostList from '~/services/getPostList';

const useGetPostList = ({ target, idToken }: Props): Response => {
  const [status, setStatus] = useState<Response['status']>('idle');
  const [titleDateList, setTitleDateList] = useState<Response['titleDateList']>(
    []
  );

  useEffect(() => {
    setStatus('loading');

    const fetchGetPostList = async () => {
      const { status, titleDateList } = await getPostList({
        target,
        idToken,
      });

      setStatus(status);
      setTitleDateList(titleDateList);
    };

    fetchGetPostList();
  }, [target, idToken]);

  return { status, titleDateList };
};

export default useGetPostList;
