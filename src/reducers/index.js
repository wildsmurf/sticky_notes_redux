import { combineReducers } from 'redux';
import stickys from './stickys';
import nextId from './nextId';
import filter from './filter';
import notes from './notes';

const rootReducer = combineReducers({
  stickys,
  nextId,
  filter,
  notes,
});

export default rootReducer;
