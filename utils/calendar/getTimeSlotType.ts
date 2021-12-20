import { TimeSlot } from '../../generated/graphql';

export const getTimeSlotType = (d: TimeSlot) => {
  return d.type.type;
};
