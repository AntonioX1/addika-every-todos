import React 								from 'react'
import PropTypes 						from 'prop-types'
import moment 							from 	'moment'
import { FontAwesomeIcon } 	from '@fortawesome/react-fontawesome'
import { faCheckCircle as faCheckCircleRegular } 	from '@fortawesome/free-regular-svg-icons'
import { faCheckCircle as faCheckCircleSolid } 		from '@fortawesome/free-solid-svg-icons'
import { excerpt } 					from '../../helpers/excerpt'

const TaskTable = ({ tasks, handleTaskDetailModal }) => {

	return (
		<table className="table task_table">
			<thead>
				<tr>
					<th className="task_table__th"></th>
					<th className="task_table__th task_table__th--title"> Title </th>
					<th className="task_table__th"> Created </th>
					<th className="task_table__th"> Description </th>
				</tr>
			</thead>
			<tbody>
					{
						tasks.map( ({ id, title, description, completed, created_at }) => 
							<tr key={ id } onClick={ () => handleTaskDetailModal({ id, title, description, completed, created_at }) }>
								<td className="text-right task_table__td task_table__td--check">
									<div className="cursor icon__container">
										<FontAwesomeIcon icon={ (completed) ? faCheckCircleSolid : faCheckCircleRegular } className={ `icon icon--secondary ${ (completed) ? 'task_table__icon--completed' : '' }` } />
									</div>
								</td>
								<td className="task_table__td task_table__td--title">{ title }</td>
								<td className="task_table__td task_table__td--created"> { moment(created_at).format('DD/MMM/YYYY') } </td>
								<td className="task_table__td task_table__td--description"> { excerpt(description, 36) } </td>
							</tr>
						)
					}
			</tbody>
		</table>
	);

}

TaskTable.propTypes = {
	tasks: 									PropTypes.array.isRequired,
	handleTaskDetailModal: 	PropTypes.func.isRequired
}

export default TaskTable