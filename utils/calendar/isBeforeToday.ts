import { DateTime } from 'luxon';

export const isBeforeToday = (d1: DateTime) => {
  return DateTime.now().setLocale('sv') >= d1.setLocale("sv");
};
