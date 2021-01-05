import { combineReducers } 				from 'redux'
import { reducer as reduxForm } 	from 'redux-form'
import { tasks } 									from './tasks'

export default combineReducers({
	tasks,
	form: reduxForm
})