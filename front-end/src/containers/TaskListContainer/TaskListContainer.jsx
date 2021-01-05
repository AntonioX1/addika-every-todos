import React, { Component } 	from 'react'
import { connect } 						from 'react-redux'
import { SubmissionError } 		from 'redux-form'
import PropTypes 							from 'prop-types'
import AppFrame 							from '../../components/AppFrame'
import TaskCreate 						from '../../components/TaskCreate'
import TaskUpdate 						from '../../components/TaskUpdate'
import TaskTable 							from '../../components/TaskTable'
import TaskDetail 						from '../../components/TaskDetail'
import { fetchTasks } 				from '../../redux/actions/fetchTasks'
import { GetTasks } 					from '../../redux/reducers/selectors/tasks.selector'
import { insertTask } 				from '../../redux/actions/insertTask'
import { updateTask } 				from '../../redux/actions/updateTask'

class TaskListContainer extends Component {

	constructor() {

		super();

		this.state = 	{
			showTaskCreateModal: 	false,
			showTaskUpdateModal: 	false,
			showTaskDetailModal: 	false,
			task: 								{}
		};

	}

	componentDidMount() {

		if(this.props.tasks.length === 0) {

			this.props.fetchTasks();

		}

	}

	handleTaskCreateModal = () => {

		this.setState({ showTaskCreateModal: !this.state.showTaskCreateModal })

	}

	handleTaskDetailModal = (task) => {

		this.setState({ showTaskDetailModal: !this.state.showTaskDetailModal, task })

	}

	handleTaskUpdateModal = () => {

		this.setState({ showTaskUpdateModal: !this.state.showTaskUpdateModal, showTaskDetailModal: false})

	}

	handleTaskCreate = values => {

		let response = {};

		try {

			response = this.props.insertTask(values)

		} catch(error) {

			new SubmissionError(error)

		} finally {

			return response;

		}

	}

	handleTaskCreateSuccess = () => {

		this.handleTaskCreateModal()

	}

	handleTaskUpdate = (values) => {

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

	handleTaskUpdateSuccess = () => {

		this.setState({ showTaskUpdateModal: !this.state.showTaskUpdateModal })
		
	}

	renderBody() {

		return (
			<TaskTable
				tasks={ this.props.tasks }
				handleTaskDetailModal={ this.handleTaskDetailModal }
			/>
		)

	}

	render() {

		return (
			<div>
				<AppFrame
					header="Tasks"
					handleTaskCreateModal={ this.handleTaskCreateModal }
					body={ this.renderBody() }
				/>
				<TaskCreate
					showTaskCreateModal={ this.state.showTaskCreateModal }
					handleTaskCreateModal={ this.handleTaskCreateModal }
					onSubmit={ this.handleTaskCreate }
					onSubmitSuccess={ this.handleTaskCreateSuccess }
				/>
				<TaskUpdate
					showTaskUpdateModal={ this.state.showTaskUpdateModal }
					handleTaskUpdateModal={ this.handleTaskUpdateModal }
					{ ...this.state.task }
					onSubmit={ this.handleTaskUpdate }
					onSubmitSuccess={ this.handleTaskUpdateSuccess }
				/>
				<TaskDetail
					showTaskDetailModal={ this.state.showTaskDetailModal }
					handleTaskDetailModal={ this.handleTaskDetailModal }
					handleTaskUpdateModal={ this.handleTaskUpdateModal }
					task={ this.state.task }
				/>
			</div>
		)

	}

}

TaskListContainer.propTypes = {
	insertTask: 	PropTypes.func.isRequired,
	updateTask: 	PropTypes.func.isRequired,
	fetchTasks: 	PropTypes.func.isRequired,
	tasks: 				PropTypes.array.isRequired
}

TaskListContainer.defaultProps = {
	tasks: []
}

const mapStateToProps = state => ({ tasks: GetTasks(state) })

export default connect(mapStateToProps, { insertTask, updateTask, fetchTasks })(TaskListContainer)