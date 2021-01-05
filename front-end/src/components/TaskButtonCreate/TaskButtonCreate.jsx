import React 								from 'react'
import PropTypes 						from 'prop-types'
import { Button } 					from 'react-bootstrap'
import { FontAwesomeIcon } 	from '@fortawesome/react-fontawesome'
import { faPlusCircle } 		from '@fortawesome/free-solid-svg-icons'

const TaskButtonCreate = ({ handleModal }) => (
	<Button variant="light" className="button" onClick={ handleModal }>
		<div className="icon__container">
			<FontAwesomeIcon icon={ faPlusCircle } className="icon icon--primary" />
		</div>
		<p className="button__title button__title--primary">Add Task</p>
	</Button>
)

TaskButtonCreate.propTypes = {
	handleModal: 	PropTypes.func.isRequired
}

export default TaskButtonCreate;