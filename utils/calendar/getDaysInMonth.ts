import { DateTime } from "luxon";

const getDaysInMonth = (date: DateTime) => {
  const days = [];
  const year = date.year;
  const month = date.month;
  for (let i = 1; i < date.daysInMonth + 1; i++) {
    days.push(DateTime.local(year, month, i).setLocale("sv"));
  }
  return days;
};

export default getDaysInMonth;
