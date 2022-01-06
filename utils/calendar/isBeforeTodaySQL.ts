import { DateTime } from 'luxon';

export const isBeforeTodaySQL = (d1: string) => {
  return DateTime.now() >= DateTime.fromSQL(d1);
};
