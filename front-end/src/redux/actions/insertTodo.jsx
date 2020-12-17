import { INSERT_TODO } 		from '../constants'
import { createAction } 	from 'redux-actions'
import { apiPost } 				from '../../api'
import { TODOS } 					from '../../api/urls'

export const insertTodo = createAction(INSERT_TODO, todo => apiPost(TODOS, 'todo', todo)());