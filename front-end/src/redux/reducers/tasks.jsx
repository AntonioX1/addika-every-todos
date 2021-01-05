import { handleActions } 	from 'redux-actions'
import {
	FETCH_TASKS,
	INSERT_TASK,
	UPDATE_TASK,
	DELETE_TASK,
	PATCH_TASK
} 							from '../constants'

export const tasks = handleActions({
	[FETCH_TASKS]: (state, action) => [...action.payload],
	[INSERT_TASK]: (state, action) => [...state, action.payload],
	[UPDATE_TASK]: (state, action) => state.reduce( (elementA, elementB) => (elementB.id === action.payload.id) ? [...elementA, action.payload] : [...elementA, elementB], []),
	[DELETE_TASK]: (state, action) => state.filter( task => task.id !== action.payload ),
	[PATCH_TASK]:  (state, action) => state.reduce( (elementA, elementB) => (elementB.id === action.payload.id) ? [...elementA, action.payload] : [...elementA, elementB], []),
}, []);