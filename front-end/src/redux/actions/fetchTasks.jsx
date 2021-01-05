import { FETCH_TASKS } 		from '../constants'
import { createAction } 	from 'redux-actions'
import { apiGet } 				from '../../api'
import { TASKS } 					from '../../api/urls'

export const fetchTasks = createAction(FETCH_TASKS, apiGet(TASKS, 'tasks'));