import { ENROLL, CHANGE_OPTION, CHANGE_A, CHANGE_X } from './types';

export const enroll = enrolled => ({
  type: ENROLL,
  payload: enrolled
});

export const changeOption = (key, value) => ({
  type: CHANGE_OPTION,
  payload: { key, value }
});

export const changeA = A => ({
  type: CHANGE_A,
  payload: A
});

export const changeX = X => ({
  type: CHANGE_X,
  payload: X
});