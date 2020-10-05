import dayjs from 'dayjs';

import { TypeTimestamp } from '../adapter';

const formatTimestampToDate = (timestamp: TypeTimestamp): string =>
  dayjs(timestamp.toDate()).format('YYYY年M月D日 HH:mm');

export default formatTimestampToDate;
