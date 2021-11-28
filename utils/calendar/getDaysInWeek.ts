import { DateTime } from "luxon";

const getDaysInWeek = (date: DateTime) => {
  const days = [];
  const year = date.year;
  const month = date.month;
  for (let i = 1; i < 8; i++) {
    days.push(DateTime.local(year, month, i).setLocale("sv"));
  }
  return days;
};

export default getDaysInWeek;
