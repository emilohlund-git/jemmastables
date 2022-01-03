import { DateTime } from 'luxon';
import { DateSlot } from '../../generated/graphql';

export const isTodaySQL = (d1: DateSlot, d2: DateTime) => {
  return d2.toSQLDate() === d1.date;
};
