import React, { Component } 	from 'react'
import { Route, withRouter } 	from 'react-router-dom'
import PropTypes 							from 'prop-types'
import { connect } 						from 'react-redux'
import AppFrame 							from '../../components/AppFrame'
import TodoEdit 							from '../../components/TodoEdit'
import TodoData 							from '../../components/TodoData'
import { getTodoById } 				from '../../redux/reducers/selectors/todos.selector'
import { fetchTodos } 				from '../../redux/actions/fetchTodos'
import { updateTodo } 				from '../../redux/actions/updateTodo'

class TodoContainer extends Component {

	componentDidMount() {

		if(!this.props.todo) {

			this.props.fetchTodos();

		}

	}

	handleSubmit = (values) => {

		let response = {};

		try {

			const { id } = values;

			response =  this.props.updateTodo(id, values);

		} catch(error) {

			throw Error(error);

		} finally {

			return response;

		}

	}

	handleOnSubmitSuccess = () => {

		this.props.history.goBack();
		
	}

	renderBody() {

		return (
			<Route
				path="/todos/:id/edit"
				children={ ({ match }) => {
			
					if(this.props.todo) {

						const TodoControl = 	(match) ? TodoEdit : TodoData;
						
						return <TodoControl
							id={ this.props.id }
							name={ this.props.todo.name }
							title={ this.props.todo.title }
							completed={ this.props.todo.completed }
							onSubmit={ this.handleSubmit }
							onSubmitSuccess={ this.handleOnSubmitSuccess }
							/>

					}

					return null;
				
					} }
			/>
		)

	}

	render() {

		return (
			<div>
				<AppFrame
					header={ `Addika - Every TODOS` }
					body={ this.renderBody() }
				/>
			</div>
		)

	}

}

TodoContainer.propTypes = {
	id: 					PropTypes.number.isRequired,
	todo: 				PropTypes.object,
	fetchTodos: 	PropTypes.func.isRequired,
	updateTodo: 	PropTypes.func.isRequired
}

TodoContainer.defaultProps = {

}

const mapStateToProps = (state, props) => ({
	todo: getTodoById(state, props)
})

export default withRouter( connect(mapStateToProps, { fetchTodos, updateTodo })(TodoContainer) )