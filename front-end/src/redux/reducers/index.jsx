import { combineReducers } 				from 'redux'
import { reducer as reduxForm } 	from 'redux-form'
import { todos } 									from './todos'

export default combineReducers({
	todos,
	form: reduxForm
})