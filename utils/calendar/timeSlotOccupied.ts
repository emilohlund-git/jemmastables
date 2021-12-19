import { TimeSlot } from '../../generated/graphql';

export const timeSlotOccupied = (d1: TimeSlot) => {
  return d1.users!;
};
