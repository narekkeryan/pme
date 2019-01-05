import { combineReducers } from 'redux';
import pmeReducers from './pmeReducers';

export default combineReducers({
  pme: pmeReducers
});