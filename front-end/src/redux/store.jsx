import { createStore, applyMiddleware } 	from 'redux'
import promiseMiddleware 									from 'redux-promise'
import reducers 													from './reducers'

export const store = createStore(reducers, {}, applyMiddleware(promiseMiddleware))