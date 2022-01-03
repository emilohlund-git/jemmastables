import { DateTime } from 'luxon';
import { User } from '../../generated/graphql';
import { actions } from './types';

export const setDate = (payload: DateTime) => {
  return {
    type: actions.setDate,
    payload: payload,
  };
};

export const setType = (payload: string) => {
  return {
    type: actions.setType,
    payload: payload,
  };
};

export const setCategory = (payload: string) => {
  return {
    type: actions.setCategory,
    payload: payload,
  };
};

export const setHorse = (payload: string) => {
  return {
    type: actions.setHorse,
    payload: payload,
  };
};

export const setAdmin = (payload: boolean) => {
  return {
    type: actions.setAdmin,
    payload: payload,
  };
};

export const setUser = (payload: User) => {
  return {
    type: actions.setUser,
    payload: payload,
  };
};

export const setTime = (payload: { from: string; to: string }) => {
  return {
    type: actions.setTime,
    payload: payload,
  };
};

export const setIsOpen = (payload: boolean) => {
  return {
    type: actions.setIsOpen,
    payload: payload,
  };
};

export const setBookingIsOpen = (payload: boolean) => {
  return {
    type: actions.setBookingIsOpen,
    payload: payload,
  };
};

export const setCount = (payload: number) => {
  return {
    type: actions.setCount,
    payload: payload,
  };
};
