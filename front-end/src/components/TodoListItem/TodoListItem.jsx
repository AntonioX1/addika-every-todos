import React 			      from 'react'
import { Link } 	      from 'react-router-dom'
import PropTypes 	      from 'prop-types'
import { makeStyles }   from '@material-ui/core/styles';
import Card             from '@material-ui/core/Card';
import CardActions      from '@material-ui/core/CardActions';
import CardContent      from '@material-ui/core/CardContent';
import Button           from '@material-ui/core/Button';
import Typography       from '@material-ui/core/Typography';
import LinkUI           from '@material-ui/core/Link';
import Checkbox         from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const TodoListItem = ({ id, name, title, completed, editAction, deleteAction, url, onDelete, onCompleted }) => {

	const classes = useStyles();

	return(
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
    </Card>
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