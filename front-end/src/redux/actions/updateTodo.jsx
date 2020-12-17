import { UPDATE_TODO } 		from '../constants'
import { createAction } 	from 'redux-actions'
import { apiPut } 				from '../../api'
import { TODOS } 					from '../../api/urls'

export const updateTodo = createAction(UPDATE_TODO, (id, todo) => apiPut(TODOS, 'todo', id, todo)());