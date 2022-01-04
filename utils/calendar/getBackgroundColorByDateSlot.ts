import { TIMESLOT_TYPE } from '../../config/constants';
import { DateSlot } from '../../generated/graphql';
import { colors } from './backgroundColors';

export const getBackgroundColorByDateSlot = (d: DateSlot) => {
  const timeslots = d.timeslots;

  if (timeslots) {
    // Return nothing is there's only one TimeSlot in array
    if (timeslots.length === 1) {
      // And the type of that timeslot is Träning
      if (
        timeslots.find(
          (timeslot) => timeslot?.type.type === TIMESLOT_TYPE.Träning
        )
      )
        return null;
    }
    // Check if there are available timeslots in array
    const available = timeslots.find(
      (timeslot) => timeslot!.users!.length === 0
    );
    // If there are return the color green
    if (available) {
      return colors.Green;
    }
    // Loop through the timeslots to find how many users are booked up per timeslot
    for (let timeslot of timeslots) {
      var users = timeslot?.users;
      var slots = timeslot?.slots;
      // If there are available slots
      if (slots != null) {
        // And there are more users than slots
        if (users!.length > slots) {
          // Return red (unavailable)
          if (slots === 0) return colors.Red;
        }
        // If there are more than 0 slots, and no users, return green (available)
        if (slots > 0 && users!.length === 0) return colors.Green;
        // Default to yellow if there are more than 0 slots
        if (slots > 0) return colors.Yellow;
      }

      // If there are no slots && more than 0 users, return red
      if (slots === null) {
        if (users!.length > 0) return colors.Red;
      }
    }
    // Default to null
    return null;
  }
};
