import { TimeSlot } from '../../generated/graphql';
import getDayFromSQLDate from './getDayFromSQLDate';

export const sortTimeSlotsByDayDesc = (timeslots: TimeSlot[]) => {
  function compare(
    a: { date: { date: string } },
    b: { date: { date: string } }
  ) {
    let dateA = getDayFromSQLDate(a.date.date);
    let dateB = getDayFromSQLDate(b.date.date);
    if (dateA > dateB) {
      return -1;
    }
    if (dateA < dateB) {
      return 1;
    }
    return 0;
  }
  return timeslots.slice().sort(compare);
};

export const sortTimeSlotsByDayAsc = (timeslots: TimeSlot[]) => {
  function compare(
    a: { date: { date: string } },
    b: { date: { date: string } }
  ) {
    let dateA = getDayFromSQLDate(a.date.date);
    let dateB = getDayFromSQLDate(b.date.date);
    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }
    return 0;
  }
  return timeslots.slice().sort(compare);
};
