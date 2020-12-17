import React, { Component } from 'react'
import { connect } 					from 'react-redux'
import PropTypes 						from 'prop-types'
import AppFrame 						from '../../components/AppFrame'
import TodoList 						from '../../components/TodoList'
import { fetchTodos } 			from '../../redux/actions/fetchTodos'
import { GetTodos } 				from '../../redux/reducers/selectors/todos.selector'
import { deleteTodo } 			from '../../redux/actions/deleteTodo'
import { patchTodo } 				from '../../redux/actions/patchTodo'

class TodoListContainer extends Component {

	componentDidMount() {

		if(this.props.todos.length === 0) {

			this.props.fetchTodos();

		}

	}

	onHandleDelete = id => {

		let response = false;

		try {

			response = this.props.deleteTodo(id)

		} catch(error) {

			throw Error(error);

		} finally {

			return response

		}

	}

	onHandleCompleted = (id, checked) => {

		let response = {};

		try {

			response = this.props.patchTodo(id, { completed: checked })

		} catch(error) {

			throw Error(error);

		} finally {

			return response

		}

	}

	renderBody() {

		return (
			<div>
				<TodoList todos={ this.props.todos } url="/todos" onDelete={ this.onHandleDelete } onCompleted={ this.onHandleCompleted } />
			</div>
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

TodoListContainer.propTypes = {
	fetchTodos: 	PropTypes.func.isRequired,
	todos: 				PropTypes.array.isRequired,
	deleteTodo: 	PropTypes.func.isRequired,
	patchTodo: 		PropTypes.func.isRequired
}

TodoListContainer.defaultProps = {
	todos: []
}

const mapStateToProps = state => ({ todos: GetTodos(state) })

export default connect(mapStateToProps, { fetchTodos, deleteTodo, patchTodo })(TodoListContainer)