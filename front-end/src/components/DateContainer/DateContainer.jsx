import React 								from 'react'
import { FontAwesomeIcon } 	from '@fortawesome/react-fontawesome'
import { faCalendarAlt } 		from '@fortawesome/free-regular-svg-icons'

const DateContainer = () => {

	return (
		<div className="date_container">
			<input type="text" placeholder="Created: 12/May/2021" className="form-control date_container__input"/>
			<div className="date_container__helper date_container__helper--right">
				<FontAwesomeIcon icon={ faCalendarAlt } className="date_container__icon"/>
			</div>
		</div>
	)

}

export default DateContainer