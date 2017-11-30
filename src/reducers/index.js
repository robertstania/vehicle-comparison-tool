import cars from './cars';
import locations from './locations';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cars,
    locations
});
export default rootReducer;
