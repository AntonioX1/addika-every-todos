import { PATCH_TODO } 		from '../constants'
import { createAction } 	from 'redux-actions'
import { apiPatch } 			from '../../api'
import { TODOS } 					from '../../api/urls'

export const patchTodo = createAction(PATCH_TODO, (id, todo) => apiPatch(TODOS, 'todo', id, todo)());