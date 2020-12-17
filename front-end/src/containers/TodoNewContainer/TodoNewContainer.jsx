import React, { Component } 	from 'react'
import { connect } 						from 'react-redux'
import { withRouter } 				from 'react-router-dom'
import PropTypes 							from 'prop-types'
import { SubmissionError } 		from 'redux-form'
import AppFrame 							from '../../components/AppFrame'
import TodoEdit 							from '../../components/TodoEdit'
import { insertTodo } 				from '../../redux/actions/insertTodo'

class TodoNewContainer extends Component {

	handleSubmit = values => {

		let response = {};

		try {

			response = this.props.insertTodo(values);

		} catch(error) {

			new SubmissionError(error)

		} finally {

			return response;

		}

	}
	
	onHandleSuccess = () => {

		this.props.history.goBack();

	}

	renderBody() {

		return (
			<TodoEdit
				onSubmit={ this.handleSubmit }
				onSubmitSuccess={ this.onHandleSuccess }
			/>
		)

	}

	render() {

		return (
			<div>
				<AppFrame
					header="Addika - Every TODOS"
					body={ this.renderBody() }
				/>
			</div>
		)

	}

}

TodoNewContainer.propTypes = {
	insertTodo: PropTypes.func.isRequired
}

export default withRouter(connect(null, { insertTodo })(TodoNewContainer))