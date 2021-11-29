import { DateTime } from "luxon";
import { BookedTimesQuery } from "../../generated/graphql";

const formatSQLDate = (date: BookedTimesQuery | undefined) => {
  console.log(date);
  const preprocessed = date?.bookedTimes.map((bookedTime) => {
    return DateTime.fromMillis(parseInt(bookedTime.date)).toFormat(
      "yyyy-LL-dd"
    );
  });

  console.log(preprocessed)

  const processed: DateTime[] = [];

  preprocessed!.forEach((time) => {
    let year = parseInt(time.split("-")[0]);
    let month = parseInt(time.split("-")[1]);
    let day = parseInt(time.split("-")[2]);
    processed.push(DateTime.local(year, month, day));
  });

  return processed;
};

export default formatSQLDate;
