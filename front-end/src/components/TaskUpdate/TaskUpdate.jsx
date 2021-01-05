import React, { Component } 	from 'react'
import { reduxForm, Field } 	from 'redux-form'
import PropTypes 							from 'prop-types'
import { Modal } 							from 'react-bootstrap'

const validate = values => {

	const error = {};

	if(!values.title) error.title = 'Required';

	return error;

};

class TaskUpdate extends Component {

	renderField = ({ input, meta, type, label, name }) => {

		let HTMLInput;

		if(type === 'textarea') {

			HTMLInput = 	<textarea className="form-control input" {...input} rows="4" ></textarea>;

		} else {

			HTMLInput = 	<input className="form-control input" {...input} type={ (!type) ? "text" : type }/>

		}

		return (
			<div className="form-group">
				<label className="form-label" htmlFor={ name }>{ label }</label>
				<div className="input-group mt-1 mb-2">
					{ HTMLInput }
						{ meta.touched && meta.error && <span className="form__msg form__msg--error">{ meta.error }</span> }
				</div>
			</div>
		)

	}

	render() {

		const { handleTaskUpdateModal, showTaskUpdateModal, pristine, submitting, task } = this.props;

		return (
			<Modal show={ showTaskUpdateModal } onHide={ handleTaskUpdateModal } centered>
        <Modal.Header className="task_modal__header">
          <Modal.Title className="task_modal__title"> Update Task { task.title } </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
						<Field name="title" component={ this.renderField } type="text" label="Title (Required)" />
						<Field name="description" component={ this.renderField } type="textarea" label="Description" />
						<div className="button__container">
							<div className="button button--cancel" onClick={ handleTaskUpdateModal }> Cancel </div>
							<button className="button button--submit" type="submit" disabled={ pristine || submitting }> Save </button>
						</div>
					</form>
        </Modal.Body>
      </Modal>
		)

	}

}

TaskUpdate.propTypes = {
	showTaskUpdateModal: 		PropTypes.bool.isRequired,
	handleTaskUpdateModal: 	PropTypes.func.isRequired,
	pristine: 							PropTypes.bool.isRequired,
	submitting: 						PropTypes.bool.isRequired,
	task: 									PropTypes.shape({
		id: 					PropTypes.number,
		title: 				PropTypes.string,
		completed: 		PropTypes.bool,
		description: 	PropTypes.string,
		created_at: 	PropTypes.string
	}).isRequired
}

TaskUpdate.defaultProps = {
	task: {
		id: 					0,
		title: 				'',
		description: 	'',
		completed: 		false,
		created_at: 	''
	}
}

export default reduxForm({ form: 'TaskUpdate', validate })(TaskUpdate)