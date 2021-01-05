import React 								from 'react'
import PropTypes 						from 'prop-types'
import { FontAwesomeIcon } 	from '@fortawesome/react-fontawesome'

const PrimaryButton = ({ text, icon, handleAcction }) => (
	<div className="button button--primary" onClick={ handleAcction }>
		<FontAwesomeIcon
			icon={ icon }
			className="button__icon button__icon--primary"
		/>
		{ text }
	</div>
)

PrimaryButton.propTypes = {
	text: 	PropTypes.string.isRequired,
	icon: 	PropTypes.any.isRequired
}

export default PrimaryButton;