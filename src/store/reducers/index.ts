import { combineReducers } from 'redux'
import user from './user'
import { reducer } from './history'

export default combineReducers({
  router: reducer,
  user
})
