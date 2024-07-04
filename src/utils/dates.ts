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
  return `${hours % 12 || 12}:${date.getMinutes().toString().padStart(2, '0')}${
    hours >= 12 ? ' PM' : ' AM'
  }`;
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
