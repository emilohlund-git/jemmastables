import { DateSlot } from '../../generated/graphql';

export const getBackgroundColorByDateSlot = (d: DateSlot) => {
  const colors: string[] = [];
  d.timeslots!.forEach((slot) => {
    colors.push(slot?.users ? 'bg-red-200' : 'bg-green-200');
  });
  return colors[0];
};
