import React              from 'react'
import PropTypes 				  from 'prop-types'
import { Row, Col }       from 'react-bootstrap'
import DateContainer      from '../DateContainer'
import PrimaryButton      from '../PrimaryButton'
import { faPlusCircle }   from '@fortawesome/free-solid-svg-icons'

const AppHeader = ({ title, handleTaskCreateModal }) => {

	return (
    <div className="header">
      <Row>
        
        <Col sm={ 12 } md={ 5 } lg={ 6 }>
          <h1 className="header__title"> { title } </h1>
        </Col>
        
        <Col sm={ 12 } md={ 7 } lg={ 6 } className="text-right">
          <DateContainer />
          <div className="header__separator"></div>
          <PrimaryButton
            text="Add Task"
            icon={ faPlusCircle }
            handleAcction={ handleTaskCreateModal }
          />
        </Col>

      </Row>

    </div>
	)

}

AppHeader.propTypes = {
  handleTaskCreateModal:  PropTypes.func.isRequired,
	title:        PropTypes.string.isRequired,
}

export default  AppHeader
/*
<Modal show={show} onHide={handleClose} centered>
  <Modal.Header className="modal__header">
    <Modal.Title> New Task </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <form>

    </form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
    <Button variant="primary" onClick={handleClose}> Save </Button>
  </Modal.Footer>
</Modal>
*/