import { applyMiddleware, createStore } from 'redux';
import rootReducer from  './reducers';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

/*
Giving a list of all the middleware we want
Middleware is what happens between two particular checkpoints
In this case, its after the store outputs something new and before the view updates
*/
let middleware = [
  /*
  redux logger is an action tracker
  aka
  tracks when action are fired
  */
  logger,
  /*
  action dispatching library
  allows us to dispatch things both synchronously and asynchronously
  */
  thunkMiddleware
]

export default(initialState) => {
  /*Returning a new instance of store*/
    return createStore(
        /*The inital state for that particular situation*/
      rootReducer,
      /*Take all that middleware then put it in this function and then apply it*/
      applyMiddleware(...middleware)
    );
};
