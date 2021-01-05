import { DELETE_TASK } 		from '../constants'
import { createAction } 	from 'redux-actions'
import { apiDelete } 			from '../../api'
import { TASKS } 					from '../../api/urls'

export const deleteTask = createAction(DELETE_TASK, id => apiDelete(TASKS, id)());