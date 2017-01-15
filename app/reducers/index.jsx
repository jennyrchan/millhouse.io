import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  cart: require('./cart').default,
  product: require('./product').default,
  reviews: require('./reviews').default,
  userSettings: require('./userSettings').default
});

export default rootReducer;
