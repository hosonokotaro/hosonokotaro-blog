import dayjs from 'dayjs';

const dateFormat = {
  year: 'YYYY',
} as const;

export type Props = keyof typeof dateFormat;

const getDate = (props: Props) => dayjs(new Date()).format(dateFormat[props]);

export default getDate;
