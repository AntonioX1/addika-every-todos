import React 								from 'react'
import PropTypes 						from 'prop-types'
import moment 							from 	'moment'
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faCheckCircle }       		from '@fortawesome/free-regular-svg-icons'
import { excerpt } 					from '../../helpers/excerpt'

const TodoList = ({ tasks, url, onDelete, onCompleted }) => {

	console.log(tasks);

	return(
		<div>
			<table className="table table--task">
				<thead>
					<tr>
						<th className="table__th"></th>
						<th className="table__th table__th--title"> Title </th>
						<th className="table__th"> Created </th>
						<th className="table__th"> Description </th>
					</tr>
				</thead>
				<tbody>
						{
							tasks.map( ({ id, title, description, completed, created_at }) => 
								<tr key={ id }>
									<td className="text-right table__td table__td--check">
										<div className="icon__container">
											<FontAwesomeIcon icon={ faCheckCircle } className="icon icon--secondary" />
										</div>
									</td>
									<td className="table__td table__td--title">{ title }</td>
									<td className="table__td table__td--created"> { moment(created_at).format('DD/MMM/YYYY') } </td>
									<td className="table__td table__td--description"> { excerpt(description, 36) } </td>
								</tr>
							)
						}
				</tbody>
			</table>		
		</div>
		/*<Container maxWidth="sm">
			<Box my={2}>
				<div>
					<div className="todo-list">
						{
							tasks.map( ({ id, name, title, completed }) => 
								<TodoListItem
									key={ id }
									id={ id }
									name={ name }
									title={ title }
									completed={ completed }
									editAction="Edit"
									deleteAction="Delete"
									url={ url }
									onDelete={ onDelete }
									onCompleted ={ onCompleted }
								/>
							)
						}
					</div>
				</div>
			</Box>
		</Container>*/
	)

}

TodoList.propTypes = {
	tasks: 				PropTypes.array.isRequired,
	url: 					PropTypes.string.isRequired,
	onDelete: 		PropTypes.func.isRequired,
	onCompleted: 	PropTypes.func.isRequired
}

export default TodoList