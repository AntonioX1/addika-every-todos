import { PATCH_TASK } 		from '../constants'
import { createAction } 	from 'redux-actions'
import { apiPatch } 			from '../../api'
import { TASKS } 					from '../../api/urls'

export const patchTask = createAction(PATCH_TASK, (id, task) => apiPatch(TASKS, 'task', id, task)());