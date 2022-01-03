import { TIMESLOT_TYPE } from '../../config/constants';
import { DateSlot, DateSlotsQuery, TimeSlot } from '../../generated/graphql';

export const containsDateSlotsAndAtleastOneTimeSlot = (
  data: DateSlotsQuery
) => {
  if (data.dateSlots.length === 0) return false;
  return hasTimeSlots(data.dateSlots as [DateSlot]);
};

export const containsDateSlotsAndNoTimeSlots = (data: DateSlotsQuery) => {
  if (data.dateSlots.length === 0) return false;
  return data.dateSlots.find((d) => d.timeslots!.length === 0) ? true : false;
};

export const containsNoDateSlotsAndNoTimeSlots = (data: DateSlotsQuery) => {
  if (!data) return false;
  if (data.dateSlots.length === 0) return true;
};

function containsTrainingTypeTimeSlot(timeslots: [TimeSlot]) {
  return timeslots.find(
    (timeslot) => timeslot!.type.type === TIMESLOT_TYPE.Träning
  )
    ? true
    : false;
}

function hasTimeSlots(dateslots: [DateSlot]) {
  return dateslots.find((d) => d.timeslots!.length > 0) ? true : false;
}
