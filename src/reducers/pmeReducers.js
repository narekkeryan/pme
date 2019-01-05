import { ENROLL } from '../actions/types';

const initialState = {
  enrolled: false
};

const pmeReducers = (state = initialState, action) => {
  switch(action.type) {
    case ENROLL:
      return {
        ...state,
        enrolled: action.payload
      };
    default:
      return state;
  }
};

export default pmeReducers;