import React 						from 'react'
import PropTypes 				from 'prop-types'
import { Link } 				from 'react-router-dom'
import { makeStyles } 	from '@material-ui/core/styles';
import AppBar 					from '@material-ui/core/AppBar';
import Toolbar 					from '@material-ui/core/Toolbar';
import Typography 			from '@material-ui/core/Typography';
import IconButton 			from '@material-ui/core/IconButton';
import MenuIcon 				from '@material-ui/icons/Menu';
import Button 					from '@material-ui/core/Button';
import LinkUI 					from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const AppHeader = ({ title }) => {

	const classes = useStyles();

	return (
		<div className={ classes.root }>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            { title }
          </Typography>
					<Button>
						<LinkUI className="text-white" color="textPrimary" component={ Link } to="/todos/new"> New Todo </LinkUI>
					</Button>
        </Toolbar>
      </AppBar>
    </div>
	)

}

AppHeader.propTypes = {

	title: PropTypes.string.isRequired,

}

export default  AppHeader