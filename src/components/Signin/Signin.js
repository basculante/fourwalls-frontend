import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { signIn } from '../../actions/signin';
import { Container, Form, Button, Message } from 'semantic-ui-react';
import './Signin.css';

class Signin extends React.Component {
		renderError () {
			if (this.props.errorMessage) {
				return (
					<Message error content={this.props.errorMessage} />
				);
			}
		}

		renderEmailInput = ({ input, label, meta }) => {
			const className = `field ${meta.error && meta.touched ? 'error' : ''}`
			return (
				<div className={className}>
					<label>{label}</label>
					<Form.Input {...input} autoComplete="off" />
				</div>
			)
		}

		renderPasswordInput = ({ input, label, meta }) => {
			const className = `field ${meta.error && meta.touched ? 'error' : ''}`
			return (
				<div className={className}>
					<label>{label}</label>
					<Form.Input {...input} autoComplete="off" type="password"/>
				</div>
			)
		}

		onSubmit = (formValues) => {
			this.props.signIn(formValues.signinEmail, formValues.signinPassword, this.props.history);
		}

	render () {
		return (
			<div className="signin_page">
			<Container>
				<h1>Sign In</h1>
				<Form onSubmit={this.props.handleSubmit(this.onSubmit)} error inverted>
					<Field name="signinEmail" component={this.renderEmailInput} label="Enter Email" /> 
					<Field name="signinPassword" component={this.renderPasswordInput} label="Enter Password" />  
					<Button>Sign In</Button>
					<Link to='/register'>
						<Button>Register</Button>
					</Link>
				</Form>
				{this.renderError()}
			</Container>
			</div>
		);
	}
};

const validate = (formValues) => {
	const errors = {};

	if (!formValues.signinEmail) {
		errors.signinEmail = 'Please enter a valid email.';
	}

	if (!formValues.signinPassword) {
		errors.signinPassword = 'Password is incorect.';
	}

	return errors;
};

const mapStateToProps = (state) => {
	return {
		errorMessage: state.signIn.error
	}
}

const formWrapped = reduxForm({
	form: 'signinForm',
	touchOnBlur: false,
	validate
})(Signin)

export default connect(mapStateToProps, { signIn })(formWrapped);