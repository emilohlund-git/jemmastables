const getDayFromSQLDate = (date: string) => {
  let day = parseInt(date.split('-')[2]);
  return day;
};

export default getDayFromSQLDate;
