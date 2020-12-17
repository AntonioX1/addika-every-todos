import React 			from 'react'
import { Link } 	from 'react-router-dom'
import PropTypes 	from 'prop-types'

const TodoData = ({ name, title, completed }) => {

	return (
		<div>
			<div className="costumer-data">
				<h2> Todos</h2>
				
				<div>
					<strong>Name</strong>
					<i>{ name }</i>
				</div>

				<div>
					<strong>Title</strong>
					<i>{ title }</i>
				</div>

				<div>
					<strong>Completed</strong>
					<i>{ completed }</i>
				</div>

				<Link to="/todos"> Regresar </Link>

			</div>
		</div>
	)

}

TodoData.propTypes = {
	name: 			PropTypes.string.isRequired,
	title: 			PropTypes.string.isRequired,
	completed: 	PropTypes.bool.isRequired
}

export default TodoData