import React, { Component } 	from 'react'
import { connect } 						from 'react-redux'
import PropTypes 							from 'prop-types'
import moment 								from 'moment'
import { Modal, Form } 				from 'react-bootstrap'
import { faPencilAlt} 				from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } 				from '@fortawesome/free-regular-svg-icons'
import SecondaryButton 				from '../SecondaryButton'
import { patchTask } 					from '../../redux/actions/patchTask'
import { deleteTask } 				from '../../redux/actions/deleteTask'

class TaskDetail extends Component {

	onHandleCompleted = (id, checked) => {

		let response = {};

		try {

			response = this.props.patchTask(id, { completed: (checked === 'true') ? true : false })

		} catch(error) {

			throw Error(error);

		} finally {

			return response

		}

	}

	onHandleDelete = id => {

		let response = false;

		try {

			response = this.props.deleteTask(id)

			this.props.handleTaskDetailModal()

		} catch(error) {

			throw Error(error);

		} finally {

			return response

		}

	}

	render() {

		const { showTaskDetailModal, handleTaskDetailModal, task } = 	this.props

		const attributes = {}
		
		if(task.completed) attributes['selected'] = 'selected'

		return (
	
			<Modal dialogClassName="task_modal__dialog task_modal__dialog--detail" contentClassName="task_modal__content task_modal__content--detail" show={ showTaskDetailModal } onHide={ handleTaskDetailModal }>
				<Modal.Header className="task_modal__header task_modal__header--detail" closeButton>
					<Modal.Title className="task_modal__title task_modal__title--detail"> { task.title } </Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="task__form_group">
							<Form.Control as="select" custom onChange={ (event) => this.onHandleCompleted(task.id, event.target.options[event.target.selectedIndex].value) }>
								<option value="false" { ...attributes }> Status: Pending </option>
								<option value="true" { ...attributes }> Status: Completed </option>
							</Form.Control>
						</Form.Group>
						<Form.Group className="task__form_group">
							<strong>Created</strong>
							<p> { moment(task.created_at).format('DD/MMM/YYYY') } </p>
						</Form.Group>
						<Form.Group className="task__form_group">
							<strong>Description</strong>
							<p> { task.description } </p>
						</Form.Group>
						<Form.Group className="task__form_group">
							<p> Updated Today, 02:35 pm, <br /> by Peter Smith </p>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer className="task_modal__footer task_modal__footer--detail">
					<div className="text-left button__container">
						<SecondaryButton text="Edit" icon={ faPencilAlt } />
						<SecondaryButton text="Delete" icon={ faTrashAlt } handleAcction={ () => this.onHandleDelete(task.id) } />
					</div>
				</Modal.Footer>
			</Modal>
		)

	}

}

TaskDetail.propTypes = {
	showTaskDetailModal: 		PropTypes.bool.isRequired,
	handleTaskDetailModal: 	PropTypes.func.isRequired,
	patchTask: 							PropTypes.func.isRequired,
	deleteTask: 						PropTypes.func.isRequired,
	task: 									PropTypes.shape({
		id: 					PropTypes.number,
		title: 				PropTypes.string,
		description: 	PropTypes.string,
		created_at: 	PropTypes.string
	}).isRequired
}

TaskDetail.defaultProps = {
	task: {
		id: 					0,
		title: 				'',
		description: 	'',
		created_at: 	''
	}
}

// export default connect(mapStateToProps, { insertTask, fetchTasks, deleteTask, patchTask })(TaskListContainer)
export default connect(null, { patchTask, deleteTask })(TaskDetail)