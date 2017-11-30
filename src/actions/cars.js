import axios from 'axios';

export const GET_CAR_PENDING = 'GET_CAR_PENDING';
export const GET_CAR_SUCCESS = 'GET_CAR_SUCCESS';
export const ADD_CAR_PENDING = 'ADD_CAR_PENDING';
export const ADD_CAR_SUCCESS = 'ADD_CAR_SUCCESS';
export const REMOVE_CAR_PENDING = 'REMOVE_CAR_PENDING';
export const REMOVE_CAR_SUCCESS = 'REMOVE_CAR_SUCCESS';

/*
A function returning a function
The returning functon contains a dispatch an action
This is getting sent over to the reducer
Returns a method that contains a dispatch method that we need to dispatch:
---type---which is the type of action we want to fire
---payload---which contains the data we want to manipulate
*/

export const getCar = () => {
  return async (dispatch) => {
    dispatch({ type: GET_CAR_PENDING })
    let car = await axios.get('http://localhost:8000/cars')
    dispatch({
      type: GET_CAR_SUCCESS,
      payload: car
    })
  }
}

export const addCar = (newCar) => {
  return async (dispatch) => {
    dispatch({ type: ADD_CAR_PENDING })
    let car = await axios.post('http://localhost:8000/cars', addCar)
    dispatch({
      type: ADD_CAR_SUCCESS,
      payload: car
    })
  }
}

export const removeCar = (id) => {
  return async (dispatch) => {
    dispatch({ type: REMOVE_CAR_PENDING })
    let car = await axios.delete(`http://localhost:8000/cars/${id}`)
    dispatch({
      type: REMOVE_CAR_SUCCESS,
      payload: car
    })
  }
}
