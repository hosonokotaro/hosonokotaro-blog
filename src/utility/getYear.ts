import dayjs from 'dayjs';

const getYear = (): string => dayjs(new Date()).format('YYYY');

export default getYear;
