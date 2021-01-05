import React 			      from 'react'
import { Link } 	      from 'react-router-dom'
import PropTypes 	      from 'prop-types'

const TodoListItem = ({ id, name, title, completed, editAction, deleteAction, url, onDelete, onCompleted }) => {

	return(
    <div></div>
		/*
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Checkbox checked={ completed } color="primary" className="d-inline-block" onChange={ (event) => onCompleted(id, event.target.checked) }></Checkbox>
        <Typography className={`d-inline-block ${ classes.title }`} color="textSecondary" gutterBottom>
          { (completed) ? 'Completed' : 'Pending' }
        </Typography>
        <Typography variant="h5" component="h2">
          { title }
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          { name }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
					<LinkUI component={ Link } to={ `${ url }/${ id }/edit` }> Edit </LinkUI>
				</Button>
				<Button size="small" onClick={ () => onDelete(id) }>Delete</Button>
      </CardActions>
    </Card>*/
	)

}

TodoListItem.propTypes = {
	id:							PropTypes.number.isRequired,
	name: 					PropTypes.string.isRequired,
	title: 					PropTypes.string.isRequired,
	completed: 			PropTypes.bool.isRequired,
	editAction: 		PropTypes.string.isRequired,
	deleteAction: 	PropTypes.string.isRequired,
	url: 						PropTypes.string.isRequired,
  onDelete: 			PropTypes.func.isRequired,
  onCompleted:    PropTypes.func.isRequired
}

export default TodoListItem