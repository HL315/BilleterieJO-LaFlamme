import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import userReducer from './reducers/userReducer';
import orderReducer from './reducers/orderReducer';
import ticketReducer from './reducers/ticketReducer';

const rootReducer = combineReducers({
  user: userReducer,
  order: orderReducer,
  ticket: ticketReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
