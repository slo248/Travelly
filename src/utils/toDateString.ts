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
