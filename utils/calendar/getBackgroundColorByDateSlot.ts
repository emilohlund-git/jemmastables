import { DateSlot } from '../../generated/graphql';
import { colors } from './backgroundColors';

export const getBackgroundColorByDateSlot = (d: DateSlot) => {
  const timeslots = d.timeslots;

  if (timeslots) {
    const available = timeslots.find(
      (timeslot) => timeslot!.users!.length === 0
    );
    if (available) {
      return colors.Green;
    }
    for (let timeslot of timeslots) {
      var users = timeslot?.users;
      var slots = timeslot?.slots;
      if (slots != null) {
        if (users!.length > slots) {
          if (slots === 0) return colors.Red;
        }
        if (slots > 0 && users!.length === 0) return colors.Green;
        if (slots > 0) return colors.Yellow;
      }

      if (slots === null) {
        if (users!.length > 0) return colors.Red;
      }
    }
    return colors.Red;
  }
};
