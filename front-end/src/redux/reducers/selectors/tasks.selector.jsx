import { createSelector } from 'reselect'

export const GetTasks = state => state.tasks;

export const getTaskById = createSelector(
	(state, props) => state.tasks.find( task => task.id === props.id ),
	task => task
);