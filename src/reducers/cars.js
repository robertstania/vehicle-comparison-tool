import {
  GET_CAR_PENDING,
  GET_CAR_SUCCESS,
  ADD_CAR_PENDING,
  ADD_CAR_SUCCESS,
  REMOVE_CAR_PENDING,
  REMOVE_CAR_SUCCESS

} from '../actions/cars'

export default(state = [], action) => {
  switch (action.type) {
    case GET_CAR_PENDING:
      return state;
    case GET_CAR_SUCCESS:
      return [...action.payload.data];
    case ADD_CAR_PENDING:
      return state;
    case ADD_CAR_SUCCESS:
      return [...action.payload.data];
    case REMOVE_CAR_PENDING:
      return state;
    case REMOVE_CAR_SUCCESS:
      return [...action.payload.data]
    default:
      return state;
  }
}
