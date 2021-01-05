import React, { Component } 	from 'react'
import { connect } 						from 'react-redux'
import { SubmissionError } 		from 'redux-form'
import PropTypes 							from 'prop-types'
import AppFrame 							from '../../components/AppFrame'
import TaskCreate 						from '../../components/TaskCreate'
import TaskTable 							from '../../components/TaskTable'
import TaskDetail 						from '../../components/TaskDetail'
import { fetchTasks } 				from '../../redux/actions/fetchTasks'
import { GetTasks } 					from '../../redux/reducers/selectors/tasks.selector'
import { insertTask } 				from '../../redux/actions/insertTask'

class TaskListContainer extends Component {

	constructor() {

		super();

		this.state = 	{
			showModal: 						false,
			showTaskDetailModal: 	false,
			task: 								{}
		};

	}

	componentDidMount() {

		if(this.props.tasks.length === 0) {

			this.props.fetchTasks();

		}

	}

	handleSubmit = values => {

		let response = {};

		try {

			response = this.props.insertTask(values)

		} catch(error) {

			new SubmissionError(error)

		} finally {

			return response;

		}

	}

	onHandleSuccess = () => {

		this.handleModal()

	}

	handleModal = () => {

		this.setState({ showModal: !this.state.showModal });

	}

	handleTaskDetailModal = (task) => {

		this.setState({ showTaskDetailModal: !this.state.showTaskDetailModal, task })

	}

	renderBody() {

		return (
			<TaskTable
				tasks={ this.props.tasks }
				onCompleted={ this.onHandleCompleted }
				handleTaskDetailModal={ this.handleTaskDetailModal }
			/>
		)

	}

	render() {

		return (
			<div>
				<AppFrame
					header="Tasks"
					handleModal={ this.handleModal }
					body={ this.renderBody() }
				/>
				<TaskCreate
					showModal={ this.state.showModal }
					handleModal={ this.handleModal }
					onSubmit={ this.handleSubmit }
					onSubmitSuccess={ this.onHandleSuccess }
				/>
				<TaskDetail
					showTaskDetailModal={ this.state.showTaskDetailModal }
					handleTaskDetailModal={ this.handleTaskDetailModal }
					task={ this.state.task }
				/>
			</div>
		)

	}

}

TaskListContainer.propTypes = {
	insertTask: 	PropTypes.func.isRequired,
	fetchTasks: 	PropTypes.func.isRequired,
	tasks: 				PropTypes.array.isRequired
}

TaskListContainer.defaultProps = {
	tasks: []
}

const mapStateToProps = state => ({ tasks: GetTasks(state) })

export default connect(mapStateToProps, { insertTask, fetchTasks })(TaskListContainer)