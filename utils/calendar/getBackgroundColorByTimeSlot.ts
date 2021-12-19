import { DateSlot, TimeSlot } from '../../generated/graphql';

export const getBackgroundColorByTimeSlot = (d: TimeSlot) => {
  let color: string = '';
  color =
    d?.type.type === 'Självhushållning'
      ? 'bg-blue-200'
      : d?.type.type === 'Träning'
      ? 'bg-red-200'
      : d?.type.type === 'Öppen bana'
      ? 'bg-green-200'
      : 'bg-white';

  return color;
};
