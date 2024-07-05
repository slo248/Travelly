export const Months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export const Dates = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

export type TimeRangeType = {
  from: string;
  to: string;
};

export const TimeRanges = [
  {
    from: '00:00',
    to: '06:00'
  },
  {
    from: '06:00',
    to: '12:00'
  },
  {
    from: '12:00',
    to: '18:00'
  },
  {
    from: '18:00',
    to: '24:00'
  }
];

export const getTimeRangeText = ({ from, to }: TimeRangeType): string =>
  `${getHours12(getDateFromHM(from))} - ${getHours12(getDateFromHM(to))}`;

export const getDateFromHM = (hm: string): Date => {
  const date = new Date();
  const [hours, minutes] = hm.split(':');
  date.setHours(parseInt(hours), parseInt(minutes));
  return date;
};

export const getDayOfWeek = (date: Date): string => {
  return Dates[date.getDay()];
};

export const getDayOfMonth = (date: Date): string => {
  return date.getDate().toString().padStart(2, '0');
};

export const getMonth = (date: Date): string => {
  return Months[date.getMonth()];
};

export const getDayMonth = (date: Date): string => {
  return `${getDayOfMonth(date)} ${getMonth(date)}`;
};

export const getHours12 = (date: Date): string => {
  const hours = date.getHours();
  return `${(hours % 12 || 12).toString().padStart(2, '0')}${
    hours >= 12 ? 'PM' : 'AM'
  }`;
};

export const getHours12AndMinutes = (date: Date): string => {
  const hours = date.getHours();
  return `${(hours % 12 || 12).toString().padStart(2, '0')}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}${hours >= 12 ? ' PM' : ' AM'}`;
};

export const toDateString1 = (value: Date): string => {
  return `${Months[value.getMonth()]} ${`0${value.getDate()}`.slice(
    -2
  )}, ${value.getFullYear()}`;
};

export const toDateString2 = (value: Date): string => {
  return ` ${`0${value.getDate()}`.slice(-2)} ${
    Months[value.getMonth()]
  }, ${value.getFullYear()}`;
};
