import { DateTime } from 'luxon';

export const isToday = (d1: DateTime) => {
  return (
    DateTime.now().setLocale('sv').toFormat('MM/DD/yyyy') ==
    d1.setLocale('sv').toFormat('MM/DD/yyyy')
  );
};
