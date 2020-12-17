import { DELETE_TODO } 		from '../constants'
import { createAction } 	from 'redux-actions'
import { apiDelete } 			from '../../api'
import { TODOS } 					from '../../api/urls'

export const deleteTodo = createAction(DELETE_TODO, (id, todo) => apiDelete(TODOS, id)());