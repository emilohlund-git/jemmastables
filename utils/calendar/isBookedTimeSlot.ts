import { TimeSlot } from '../../generated/graphql';

export const isBookedTimeSlot = (d: TimeSlot) => {
  return d.users;
};
