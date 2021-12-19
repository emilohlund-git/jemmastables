import { DateSlot } from '../../generated/graphql';

export const hasTimeSlots = (d1: [DateSlot]) => {
  return d1[0]!.timeslots!.every((e, x) => e!.users!);
};
