import { createSelector } from 'reselect'

export const GetTodos = state => state.todos;

export const getTodoById = createSelector(
	(state, props) => state.todos.find( todo => todo.id === props.id ),
	todo => todo
);