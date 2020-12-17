import { FETCH_TODOS } 		from '../constants'
import { createAction } 	from 'redux-actions'
import { apiGet } 				from '../../api'
import { TODOS } 					from '../../api/urls'

export const fetchTodos = createAction(FETCH_TODOS, apiGet(TODOS, 'todos'));