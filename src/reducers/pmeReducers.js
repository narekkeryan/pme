import { ENROLL, CHANGE_OPTION, CHANGE_A, CHANGE_X } from '../actions/types';

const initialState = {
  enrolled: false,
  degree: 4,
  m: 2,
  h: 1,
  A: [
    [
      ['t^2 + 2*t + 4', '2*t^2 - t + 1'],
      ['4*t^2 - 12', '- 4*t + 4']
    ],
    [
      ['2*t^2 + 4*t', '3*t^2 - 5*t + 2'],
      ['t^2 + 2*t + 4', '4*t^2 - 4*t + 8']
    ],
    [
      ['3*t + 6', '2*t^2 - 1'],
      ['6*t^2 - 2*t - 3', '-t^2 - 5*t + 4']
    ],
    [
      ['-t^2 - 4*t', '5*t^2 + 12'],
      ['3*t^2 - 3*t + 2', '-t^2 + 8']
    ],
    [
      ['3*t^2 - 6', '-4*t^2 - 2*t + 16'],
      ['t^2 - 4', '-2*t^2 + 3*t ']
    ]
  ],
  X: [
    ['2*t^2 - t + 2', 't^2 + 4'],
    ['- 3*t^2 + 2*t - 1', '- 2*t^2 - 4']
  ]
};

const pmeReducers = (state = initialState, action) => {
  switch(action.type) {
    case ENROLL:
      return {
        ...state,
        enrolled: action.payload
      };
    case CHANGE_OPTION:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
    case CHANGE_A:
      return {
        ...state,
        A: action.payload
      };
    case CHANGE_X:
      return {
        ...state,
        X: action.payload
      };
    default:
      return state;
  }
};

export default pmeReducers;