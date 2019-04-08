import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { register } from '../../actions/register';
import { Container, Form, Button, Message } from 'semantic-ui-react';
import './Register.css';

class Register extends React.Component {
		renderError ({error, touched}) {
			if (touched && error) {
				return (
					<Message error content={error} />
				);
			}
		}

		renderRegisterError() {
			if (this.props.errorMessage) {
				return (
					<Message error content={this.props.errorMessage} />
				)
			}
		}

		renderEmailInput = ({ input, label, meta }) => {
			const className = `field ${meta.error && meta.touched ? 'error' : ''}`
			return (
				<div className={className}>
					<label>{label}</label>
					<Form.Input {...input} autoComplete="off" />
					{this.renderError(meta)}
				</div>
			)
		}

		renderPasswordInput = ({ input, label, meta }) => {
			const className = `field ${meta.error && meta.touched ? 'error' : ''}`
			return (
				<div className={className}>
					<label>{label}</label>
					<Form.Input {...input} autoComplete="off" type="password"/>
					{this.renderError(meta)}
				</div>
			)
		}

		onSubmit = (formValues) => {
			this.props.register(formValues.registerName, formValues.registerEmail, formValues.registerPassword, this.props.history);
		}

	render () {
		return (
			<div className="register_page">
				<Container>
						<h1>Register</h1>
						<Form onSubmit={this.props.handleSubmit(this.onSubmit)} error inverted>
							<Field name="registerName" component={this.renderEmailInput} label="Enter Name" />
							<Field name="registerEmail" component={this.renderEmailInput} label="Enter Email" /> 
							<Field name="registerPassword" component={this.renderPasswordInput} label="Enter Password" />  
							<Button>Sign In</Button>
						</Form>
						{this.renderRegisterError()}
				</Container>
			</div>
		);
	}
};

const validate = (formValues) => {
	const errors = {};

	if (!formValues.registerName) {
		errors.registerName = 'Please enter your name.';
	}

	if (!formValues.registerEmail) {
		errors.registerEmail = 'Please enter a valid email.';
	}

	if (!formValues.registerPassword) {
		errors.registerPassword = 'Password is incorect.';
	}

	return errors;
};

const mapStateToProps = (state) => {
	return {
		errorMessage: state.signIn.registerError
	}
}

const formWrapped = reduxForm({
	form: 'registerForm',
	touchOnBlur: false,
	validate
})(Register)

export default connect(mapStateToProps, { register })(formWrapped);