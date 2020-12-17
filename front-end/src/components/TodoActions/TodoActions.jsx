import React 			from 'react'
import PropTypes 	from 'prop-types'

const TodoActions = ({ children }) => {

	return (
		<div>
			<div className="todo-actions">
				{ children }
			</div>
		</div>
	);

}

TodoActions.propTypes = {
	children: PropTypes.node.isRequired
}

export default TodoActions