/*eslint-disable*/
import axios from 'axios';

export const GET_LOCATION_PENDING = 'GET_LOCATION_PENDING';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const ADD_LOCATION_PENDING = 'ADD_LOCATION_PENDING';
export const ADD_LOCATION_SUCCESS = 'ADD_LOCATION_SUCCESS';
export const EDIT_LOCATION_PENDING = 'EDIT_LOCATION_PENDING';
export const EDIT_LOCATION_SUCCESS = 'EDIT_LOCATION_SUCCESS';
export const REMOVE_LOCATION_PENDING = 'REMOVE_LOCATION_PENDING';
export const REMOVE_LOCATION_SUCCESS = 'REMOVE_LOCATION_SUCCESS';

/*
A function returning a function
The returning functon contains a dispatch an action
This is getting sent over to the reducer
Returns a method that contains a dispatch method that we need to dispatch:
---type---which is the type of action we want to fire
---payload---which contains the data we want to manipulate
*/

export const getLocation = () => {
  return async (dispatch) => {
    dispatch({ type: GET_LOCATION_PENDING })
    let location = await axios.get('http://localhost:8000/locations')
    dispatch({
      type: GET_LOCATION_SUCCESS,
      payload: location
    })
  }
}

export const addLocation = (location) => {
  return async (dispatch) => {
    dispatch({ type: ADD_LOCATION_PENDING })
    let location = await axios.post('http://localhost:8000/locations', location)
    dispatch({
      type: ADD_LOCATION_SUCCESS,
      payload: location
    })
  }
}

// export const removeLocation = (id) => {
//   return async (dispatch) => {
//     dispatch({ type: REMOVE_LOCATION_PENDING })
//     let location = await axios.delete(`http://localhost:8000/locations/${id}`)
//     dispatch({
//       type: REMOVE_LOCATION_SUCCESS,
//       payload: location
//     })
//   }
// }
