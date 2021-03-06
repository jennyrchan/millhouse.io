import axios from 'axios';
import { browserHistory } from 'react-router';
import { fetchCart } from './cart';
import store from '../store';

/* ------------   ACTION CREATOR     ------------------ */

const AUTHENTICATED = 'AUTHENTICATED'

export const authenticated = user => ({
  type: AUTHENTICATED, user
})
/* ------------       REDUCER     ------------------ */

const reducer = (state = null, action) => {
  switch(action.type) {

  case AUTHENTICATED:
    return action.user
  }
  return state
}

export default reducer

/* ------------       DISPATCHERS     ------------------ */

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/local/login',
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => {
        dispatch(whoami());
        browserHistory.push('/');
      })
      .catch(() => dispatch(whoami()))

export const signup = userData =>
  dispatch =>
    axios.post('/api/users', userData)
      .then(() => {
        dispatch(whoami());
        browserHistory.push('/');
      })
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(user => dispatch(authenticated(user.data)))
      .then(action => {
        if (action.user) {
          dispatch(fetchCart(action.user.id));
        } else {
          dispatch(fetchCart(null));
        }
      })
      .catch(failed => dispatch(authenticated(null)))
