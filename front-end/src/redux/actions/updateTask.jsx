import { UPDATE_TASK } 		from '../constants'
import { createAction } 	from 'redux-actions'
import { apiPut } 				from '../../api'
import { TASKS } 					from '../../api/urls'

export const updateTask = createAction(UPDATE_TASK, (id, task) => apiPut(TASKS, 'task', id, task)());