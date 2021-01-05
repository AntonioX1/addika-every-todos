import React from 'react'
import PropTypes 				    from 'prop-types'
import { Row, Col }  from 'react-bootstrap'
//import { Link } 				from 'react-router-dom'
import DateContainer        from '../DateContainer'
import TaskButtonCreate     from '../TaskButtonCreate'

const AppHeader = ({ title, handleModal }) => {

	return (
    <div className="header">
      <Row>
        
        <Col sm={ 12 } md={ 8 } lg={ 8 }>
          <h1 className="header__title"> { title } </h1>
        </Col>
        
        <Col sm={ 12 } md={ 4 } lg={ 4 } className="text-right">
          <DateContainer />
          <div className="header__separator"></div>
          <TaskButtonCreate
            handleModal={ handleModal }
          />
        </Col>

      </Row>

    </div>
	)

}

AppHeader.propTypes = {
  handleModal:  PropTypes.func.isRequired,
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