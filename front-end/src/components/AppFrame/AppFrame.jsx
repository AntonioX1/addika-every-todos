import React 			from 'react'
import PropTypes 	from 'prop-types'
import AppHeader 	from '../AppHeader'

const AppFrame = ({ header, body, handleModal }) => {

	return (
		<div className="task__container">
			<h1 className="task__title"> My Tasks </h1>
			<div className="app-frame">
				<AppHeader
					handleModal={ handleModal }
					title={ header }
				/>
				<div>{ body }</div>
			</div>
		</div>
	)

}

AppFrame.propTypes = {
	header: 			PropTypes.string.isRequired,
	body:					PropTypes.element.isRequired,
	handleModal: 	PropTypes.func.isRequired
}

export default AppFrame