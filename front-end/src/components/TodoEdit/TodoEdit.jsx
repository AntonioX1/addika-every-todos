import React, { Component } 	from 'react'
import { Link, Prompt } 			from 'react-router-dom'
import { reduxForm, Field } 	from 'redux-form'
import PropTypes 							from 'prop-types'
import { setPropsAsInitial } 	from '../../helpers/setPropsAsInitial'
import Container 							from '@material-ui/core/Container';
import Box 										from '@material-ui/core/Box';
import Card 									from '@material-ui/core/Card';
import CardContent 						from '@material-ui/core/CardContent';
import CardActions 						from '@material-ui/core/CardActions';
import Button 								from '@material-ui/core/Button';
import LinkUI 					from '@material-ui/core/Link';

const validate = values => {

	const error = {};

	if(!values.name) 	error.name = 'El campo nombre es requerido';

	if(!values.title) error.title = 'El campo nombre es requerido';

	return error;

};

class TodoEdit extends Component {

	renderField = ({ input, meta, type, label, name, withFocus }) => {

		return (
			<div className="form-group">
				<label className="form-label" htmlFor={ name }>{ label }</label>
				<div className="input-group mt-1 mb-2">
					<input className="form-control form__input" {...input} type={ (!type) ? "text" : type }/>
						{ meta.touched && meta.error && <span className="form__msg form__msg--error">{ meta.error }</span> }
				</div>
			</div>
		);

	}

	render() {

		const { handleSubmit, submitting, pristine, submitSucceeded } = this.props;

		return (
			<Container maxWidth="sm">
				<Box my={2}>
					<Card variant="outlined">
							
							<form onSubmit={ handleSubmit }>
							
								<CardContent>
								
								<Field name="title" component={ this.renderField } type="text" label="Title" />

								<Field name="name" component={ this.renderField } type="text" label="Name" withFocus/>
				
								<div className="form-group">
									<label className="form-label" htmlFor="completed"> Completed </label>
									<div className="input-group mt-1 mb-2">
										<Field name="completed" component="input" type="checkbox"></Field>
									</div>
								</div>
				
								<Field name="id" component="input" type="hidden" />
				
								<Prompt
									when={ !pristine && !submitSucceeded }
									message="Se detectaron cambios en la informacion, ¿Desea revertirlos?"
								/>
				
								</CardContent>
								<CardActions>
									<Button variant="contained" size="medium" color="primary"  type="submit" disabled={ pristine || submitting }> Save </Button>
									<Button variant="contained" size="medium" disabled={ submitting }>
										<LinkUI to="/todos" component={ Link }> Cancelar </LinkUI>
									</Button>
								</CardActions>
							</form>
					</Card>
				</Box>
				</Container>
		)

	}

}

TodoEdit.propTypes = {
	id: 							PropTypes.number,
	name: 						PropTypes.string,
	title: 						PropTypes.string,
	completed: 				PropTypes.bool,
	handleSubmit: 		PropTypes.func,
	submitting: 			PropTypes.bool,
	pristine: 				PropTypes.bool,
	submitSucceeded: 	PropTypes.bool
}

const TodoEditForm = reduxForm({ form: 'TodoEdit', validate })(TodoEdit)

export default setPropsAsInitial(TodoEditForm)