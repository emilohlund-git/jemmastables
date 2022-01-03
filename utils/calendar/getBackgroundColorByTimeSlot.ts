import { TimeSlot } from '../../generated/graphql';
import { colors } from './backgroundColors';

export const getBackgroundColorByTimeSlot = (d: TimeSlot) => {
  const users = d.users!.length;
  const slots = d.slots;

  if (slots != null) {
    if (users > slots) {
      if (slots === 0) return colors.Red;
    }
    if (slots > 0 && users === 0) return colors.Green;
    if (slots > 0) return colors.Yellow;
  }

  if (slots === null) {
    if (users > 0) return colors.Red;
  }

  return colors.Green;
};
