import { handleActions } 	from 'redux-actions'
import {
	FETCH_TODOS,
	INSERT_TODO,
	UPDATE_TODO,
	DELETE_TODO,
	PATCH_TODO
} 							from '../constants'

export const todos = handleActions({
	[FETCH_TODOS]: (state, action) => [...action.payload],
	[INSERT_TODO]: (state, action) => [...state, action.payload],
	[UPDATE_TODO]: (state, action) => state.reduce( (elementA, elementB) => (elementB.id === action.payload.id) ? [...elementA, action.payload] : [...elementA, elementB], []),
	[DELETE_TODO]: (state, action) => state.filter( todo => todo.id !== action.payload ),
	[PATCH_TODO]:  (state, action) => state.reduce( (elementA, elementB) => (elementB.id === action.payload.id) ? [...elementA, action.payload] : [...elementA, elementB], []),
}, []);