import { DateTime } from "luxon";

const formatSQLDate = (date: any) => {
  const preprocessed = DateTime.fromMillis(parseInt(date)).toFormat(
    "yyyy-LL-dd"
  );

  let year = parseInt(preprocessed.split("-")[0]);
  let month = parseInt(preprocessed.split("-")[1]);
  let day = parseInt(preprocessed.split("-")[2]);

  const processed = DateTime.local(year, month, day);
  return processed;
};

export default formatSQLDate;
