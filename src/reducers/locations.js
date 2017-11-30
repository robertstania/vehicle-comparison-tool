import {
  GET_LOCATION_PENDING,
  GET_LOCATION_SUCCESS,
  ADD_LOCATION_PENDING,
  ADD_LOCATION_SUCCESS,
  REMOVE_LOCATION_PENDING,
  REMOVE_LOCATION_SUCCESS,

} from '../actions/locations'

export default(state = [], action) => {
  switch (action.type) {
    case GET_LOCATION_PENDING:
      return state;
    case GET_LOCATION_SUCCESS:
      return [...action.payload.data];
    case ADD_LOCATION_PENDING:
      return state;
    case ADD_LOCATION_SUCCESS:
      return [...action.payload.data];
    case REMOVE_LOCATION_PENDING:
      return state;
    case REMOVE_LOCATION_SUCCESS:
      return [...action.payload.data];
    default:
      return state;
  }
}
