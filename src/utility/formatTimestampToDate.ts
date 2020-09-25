import dayjs from 'dayjs';
import firebase from 'firebase/app';

const formatTimestampToDate = (
  timestamp: firebase.firestore.Timestamp
): string => dayjs(timestamp.toDate()).format('YYYY年M月D日 HH:mm');

export default formatTimestampToDate;
