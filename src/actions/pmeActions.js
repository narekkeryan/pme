import { ENROLL } from './types';

export const enroll = enrolled => ({
  type: ENROLL,
  payload: enrolled
});