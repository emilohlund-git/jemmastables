import { DateSlot } from "../../generated/graphql";

export const getBackgroundColor = (d: DateSlot) => {
  const colors: string[] = [];
  d.timeslots!.forEach((slot) => {
    colors.push(
      slot?.type.type === 'Självhushållning'
        ? 'bg-blue-200'
        : slot?.type.type === 'Träning'
        ? 'bg-red-200'
        : slot?.type.type === 'Öppen bana'
        ? 'bg-green-200'
        : 'bg-white'
    );
  });
  return colors[0];
};
