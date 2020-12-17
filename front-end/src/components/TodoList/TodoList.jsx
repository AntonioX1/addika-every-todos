import React 					from 'react'
import PropTypes 			from 'prop-types'
import TodoListItem 	from '../TodoListItem'
import Container 			from '@material-ui/core/Container';
import Box 						from '@material-ui/core/Box';

const TodoList = ({ todos, url, onDelete, onCompleted }) => {

	return(
		<Container maxWidth="sm">
			<Box my={2}>
				<div>
					<div className="todo-list">
						{
							todos.map( ({ id, name, title, completed }) => 
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
		</Container>
	)

}

TodoList.propTypes = {
	todos: 				PropTypes.array.isRequired,
	url: 					PropTypes.string.isRequired,
	onDelete: 		PropTypes.func.isRequired,
	onCompleted: 	PropTypes.func.isRequired
}

export default TodoList