import { createHashHistory } from 'history'
import produce from 'immer'
import { LOCATION_CHANGE } from 'connected-react-router'
import { ActionParam } from '@/types/Redux'

let history = createHashHistory()
export default history

// import { push } from 'connected-react-router';
// Provides push, go, goBack, replace, block, goForward methods
// push("/home") || push({pathname:"/home",search:"name=1",hash:"1"})
// history can be divided into two parts, switch and modify
// switch history status: back, forward, go correspond to the browser's back, jump, and forward.
// history.go(2);//forward twice

// push saves the state of the page in the state object.
// When the page comes back, the state object can be obtained through event.state.

//查看connected-react-router 的connectRouter 方法，使immer与history 结合使用
export interface HistoryState {
  location: any
  action: any
}

const injectQuery = location => {
  if (location && location.query) {
    // Don't inject query if it already exists in history
    return location
  }

  const searchQuery = location && location.search

  if (typeof searchQuery !== 'string' || searchQuery.length === 0) {
    return {
      ...location,
      query: {}
    }
  }

  // Ignore the `?` part of the search string e.g. ?username=codejockie
  const search = searchQuery.substring(1)
  // Split the query string on `&` e.g. ?username=codejockie&name=Kennedy
  const queries = search.split('&')
  // Contruct query
  const query = queries.reduce((acc, currentQuery) => {
    // Split on `=`, to get key and value
    const [queryKey, queryValue] = currentQuery.split('=')
    return {
      ...acc,
      [queryKey]: queryValue
    }
  }, {})

  return {
    ...location,
    query
  }
}

const initHistoryState: HistoryState = {
  location: injectQuery(history.location),
  action: history.action
}

/* eslint-disable no-param-reassign  */
export const reducer = produce(
  (draft: HistoryState, actionParam: ActionParam) => {
    if (actionParam.type === LOCATION_CHANGE) {
      const { location, action } = actionParam.payload
      draft.action = action
      draft.location = injectQuery(location)
      return draft
    }
    return draft
  },
  initHistoryState
)
