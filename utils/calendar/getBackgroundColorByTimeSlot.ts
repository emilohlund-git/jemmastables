import { DateSlot, TimeSlot } from '../../generated/graphql';

export const getBackgroundColorByTimeSlot = (d: TimeSlot) => {
  let color: string = '';
  color = d?.users ? 'bg-red-200' : 'bg-green-200';
  return color;
};
