import { INSERT_TASK } 		from '../constants'
import { createAction } 	from 'redux-actions'
import { apiPost } 				from '../../api'
import { TASKS } 					from '../../api/urls'

export const insertTask = createAction(INSERT_TASK, task => apiPost(TASKS, 'task', task)());