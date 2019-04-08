import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Grid, Segment, Container, Form, Button, Message } from 'semantic-ui-react';
import { authenticatedSubmitMaxes, unauthenticatedSubmitMaxes } from '../../actions/maxes';
import Navigation from '../Navigation/Navigation';
import './Maxes.css';

class Maxes extends React.Component {
		renderError ({error, touched}) {
			if (touched && error) {
				return (
					<Message error content={error} />
				);
			}
		}

		renderInput = ({ input, label, meta }) => {
			const className = `field ${meta.error && meta.touched ? 'error' : ''}`
				return (
					<div className={className}>
						<label>{label}</label>
						<Form.Input {...input} autoComplete="off" />
						{this.renderError(meta)}
					</div>
				)
		}

		renderRadioSquat = ({ input, label, meta }) => {
			const className = `field ${meta.error ? 'error' : ''}`
			return (
				<div className={className}>
				<Grid>
					<Grid.Row centered>
						<Grid.Column textAlign={'center'}>
							<Form.Input
							{...input} 
							label="2.5"
							name="incrementSquat"
							value="2.5"
							type="radio"
							className='radio'
						/>
						</Grid.Column>
						<Grid.Column textAlign={'center'}>
							<Form.Input 
							{...input} 
							label="5"
							name="incrementSquat"
							value="5"
							type="radio"
						/>
						</Grid.Column>
						<Grid.Column textAlign={'center'}>
							<Form.Input
							{...input}  
							label="10"
							name="incrementSquat"
							value="10"
							type="radio"
						/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				</div>
			)
		}

		renderRadioBench = ({ input, label, meta }) => {
			const className = `field ${meta.error ? 'error' : ''}`
			return (
				<div className={className}>
				<Grid>
					<Grid.Row centered>
						<Grid.Column textAlign={'center'}>
							<Form.Input
							{...input}  
							label="2.5"
							name="incrementBench"
							value="2.5"
							type="radio"
						/>
						</Grid.Column>
						<Grid.Column textAlign={'center'}>
							<Form.Input
							{...input}  
							label="5"
							name="incrementBench"
							value="5"
							type="radio"
						/>
						</Grid.Column>
						<Grid.Column textAlign={'center'}>
							<Form.Input
							{...input}  
							label="10"
							name="incrementBench"
							value="10"
							type="radio"
						/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				</div>
			)
		}

		renderRadioDeadlift = ({ input, label, meta }) => {
			const className = `field ${meta.error ? 'error' : ''}`
			return (
				<div className={className}>
				<Grid>
					<Grid.Row centered>
						<Grid.Column textAlign={'center'}>
							<Form.Input
							{...input}  
							label="2.5"
							name="incrementDeadlift"
							value="2.5"
							type="radio"
						/>
						</Grid.Column>
						<Grid.Column textAlign={'center'}>
							<Form.Input
							{...input}  
							label="5"
							name="incrementDeadlift"
							value="5"
							type="radio"
						/>
						</Grid.Column>
						<Grid.Column textAlign={'center'}>
							<Form.Input
							{...input}  
							label="10"
							name="incrementDeadlift"
							value="10"
							type="radio"
						/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				</div>
			)
		}

		renderRadioOhp = ({ input, label, meta }) => {
			const className = `field ${meta.error ? 'error' : ''}`
			return (
				<div className={className}>
				<Grid>
					<Grid.Row centered>
						<Grid.Column textAlign={'center'}>
							<Form.Input
							{...input}  
							label="2.5"
							name="incrementOhp"
							value="2.5"
							type="radio"
						/>
						</Grid.Column>
						<Grid.Column textAlign={'center'}>
							<Form.Input
							{...input}  
							label="5"
							name="incrementOhp"
							value="5"
							type="radio"
						/>
						</Grid.Column>
						<Grid.Column textAlign={'center'}>
							<Form.Input
							{...input}  
							label="10"
							name="incrementOhp"
							value="10"
							type="radio"
						/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				</div>
			)
		}

		renderRadioPowerclean = ({ input, label, meta }) => {
			const className = `field ${meta.error ? 'error' : ''}`
			return (
				<div className={className}>
				<Grid>
					<Grid.Row centered>
						<Grid.Column textAlign={'center'}>
							<Form.Input
							{...input}  
							label="2.5"
							name="incrementPowerclean"
							value="2.5"
							type="radio"
						/>
						</Grid.Column>
						<Grid.Column textAlign={'center'}>
							<Form.Input
							{...input}  
							label="5"
							name="incrementPowerclean"
							value="5"
							type="radio"
						/>
						</Grid.Column>
						<Grid.Column textAlign={'center'}>
							<Form.Input
							{...input}  
							label="10"
							name="incrementPowerclean"
							value="10"
							type="radio"
						/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				</div>
			)
		}

		renderRadioError = ({ input, label, meta}) => {
			return(
				<div>
					{this.renderError(meta)}
				</div>
			)
		}

		renderMaxError = ({ input, label, meta}) => {
			return(
				<div>
					{this.renderError(meta)}
				</div>
			)
		}


		onSubmitAuthenticated = (formValues) => {
			const { squat, bench, deadlift, ohp, powerclean, squatIncrement, benchIncrement, deadliftIncrement, ohpIncrement, powercleanIncrement } = formValues
			this.props.authenticatedSubmitMaxes(this.props.userId, squat, bench, deadlift, ohp, powerclean, squatIncrement, benchIncrement, deadliftIncrement, ohpIncrement, powercleanIncrement, this.props.goal, this.props.history);
			console.log(squatIncrement)		
		}

		onSubmitUnauthenticated = (formValues) => {
			const { squat, bench, deadlift, ohp, powerclean, squatIncrement, benchIncrement, deadliftIncrement, ohpIncrement, powercleanIncrement } = formValues
			this.props.unauthenticatedSubmitMaxes(squat, bench, deadlift, ohp, powerclean, squatIncrement, benchIncrement, deadliftIncrement, ohpIncrement, powercleanIncrement, this.props.goal, this.props.history);
		}

	render () {
		if (this.props.authenticated === true) {
			return (
				<div className="maxes_form">
				<Navigation />
				<Container>
						<Form onSubmit={this.props.handleSubmit(this.onSubmitAuthenticated)} error inverted>
							<Grid columns={2} className="maxes_grid">
								<Grid.Row>
									<Grid.Column textAlign={'center'}>
										<h2>1 Rep Max</h2>
									</Grid.Column>
									<Grid.Column textAlign={'center'}>
										<h2> Weight Increment</h2>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row verticalAlign={'middle'}>
									<Grid.Column>
										<Field name="squat" component={this.renderInput} label="Squat" /> 
									</Grid.Column>
									<Grid.Column>
										<Field name="squatIncrement" component={this.renderRadioSquat} /> 
									</Grid.Column>
								</Grid.Row>
								<Grid.Row verticalAlign={'middle'}>
									<Grid.Column>
										<Field name="bench" component={this.renderInput} label="Bench" /> 
									</Grid.Column>
									<Grid.Column>
										<Field name="benchIncrement" component={this.renderRadioBench} /> 
									</Grid.Column>
								</Grid.Row>
								<Grid.Row verticalAlign={'middle'}>
									<Grid.Column>
										<Field name="deadlift" component={this.renderInput} label="Deadlift" /> 
									</Grid.Column>
									<Grid.Column>
										<Field name="deadliftIncrement" component={this.renderRadioDeadlift} /> 
									</Grid.Column>	
								</Grid.Row>
								<Grid.Row verticalAlign={'middle'}>
									<Grid.Column>
										<Field name="ohp" component={this.renderInput} label="OHP" /> 
									</Grid.Column>
									<Grid.Column>
										<Field name="ohpIncrement" component={this.renderRadioOhp} /> 
									</Grid.Column>				
								</Grid.Row>
									<Grid.Row verticalAlign={'middle'}>
									<Grid.Column>
										<Field name="powerclean" component={this.renderInput} label="Power Clean" /> 
									</Grid.Column>
									<Grid.Column>
										<Field name="powercleanIncrement" component={this.renderRadioPowerclean} /> 
									</Grid.Column>			
								</Grid.Row>
								<Grid.Row verticalAlign={'middle'}>
									<Grid.Column>
										<Field name="maxError" component={this.renderMaxError} /> 
									</Grid.Column>
									<Grid.Column>
										<Field name="radioError" component={this.renderRadioError} /> 
									</Grid.Column>			
							</Grid.Row>
								<Grid.Row>
									<Grid.Column>
										<Button>Submit</Button>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Form>
				</Container>
			</div>
			);
		} else {
			return (
					<div className="maxes_form">
					<Navigation />
					<Container>
							<Form onSubmit={this.props.handleSubmit(this.onSubmitUnauthenticated)} error inverted>
								<Grid columns={2} className="maxes_grid">
									<Grid.Row >
										<Grid.Column textAlign={'center'}>
											<h2>1 Rep Max</h2>
										</Grid.Column>
										<Grid.Column textAlign={'center'}>
											<h2> Weight Increment</h2>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row verticalAlign={'middle'}>
										<Grid.Column>
											<Field name="squat" component={this.renderInput} label="Squat" /> 
										</Grid.Column>
										<Grid.Column>
											<Field name="squatIncrement" component={this.renderRadioSquat} /> 
										</Grid.Column>
									</Grid.Row>
									<Grid.Row verticalAlign={'middle'}>
										<Grid.Column>
											<Field name="bench" component={this.renderInput} label="Bench" /> 
										</Grid.Column>
										<Grid.Column>
											<Field name="benchIncrement" component={this.renderRadioBench} /> 
										</Grid.Column>
									</Grid.Row>
									<Grid.Row verticalAlign={'middle'}>
										<Grid.Column>
											<Field name="deadlift" component={this.renderInput} label="Deadlift" /> 
										</Grid.Column>
										<Grid.Column>
											<Field name="deadliftIncrement" component={this.renderRadioDeadlift} /> 
										</Grid.Column>	
									</Grid.Row>
									<Grid.Row verticalAlign={'middle'}>
										<Grid.Column>
											<Field name="ohp" component={this.renderInput} label="OHP" /> 
										</Grid.Column>
										<Grid.Column>
											<Field name="ohpIncrement" component={this.renderRadioOhp} /> 
										</Grid.Column>				
									</Grid.Row>
										<Grid.Row verticalAlign={'middle'}>
										<Grid.Column>
											<Field name="powerclean" component={this.renderInput} label="Power Clean" /> 
										</Grid.Column>
										<Grid.Column>
											<Field name="powercleanIncrement" component={this.renderRadioPowerclean} /> 
										</Grid.Column>			
									</Grid.Row>
									<Grid.Row verticalAlign={'middle'}>
										<Grid.Column>
											<Field name="maxError" component={this.renderMaxError} /> 
										</Grid.Column>
										<Grid.Column>
											<Field name="radioError" component={this.renderRadioError} /> 
										</Grid.Column>			
									</Grid.Row>
									<Grid.Row>
										<Grid.Column>
											<Button>Submit</Button>
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Form>
						</Container>
					</div>
			);
		}
	}
};


const validate = (formValues) => {
	const errors = {};
	const {squat, bench, deadlift, ohp, powerclean, squatIncrement, benchIncrement, deadliftIncrement, ohpIncrement, powercleanIncrement} = formValues

	if (!squat || !bench || !deadlift || !ohp || !powerclean) {
			errors.maxError = 'Please enter all maxes.';
		}

		if (!squatIncrement || !benchIncrement || !deadliftIncrement || !ohpIncrement || !powercleanIncrement) {
		errors.radioError = 'Please select all increments.';
		}

	return errors;
};

const mapStateToProps = (state, props) => {
	return {
		authenticated: state.signIn.authenticated,
		goal: state.goals.goal,
		userId: state.signIn.userId,
		squatIncrement: state.signIn.squatIncrement,
		benchIncrement: state.signIn.benchIncrement,
		deadliftIncrement: state.signIn.deadliftIncrement,
		ohpIncrement: state.signIn.ohpIncrement,
		powercleanIncrement: state.signIn.powercleanIncrement,
		initialValues: {
			squat: state.signIn.squat,
			bench: state.signIn.bench,
			deadlift: state.signIn.deadlift,
			ohp: state.signIn.ohp,
			powerclean: state.signIn.powerclean,
		}
	}
}

const formWrapped = reduxForm({
	form: 'maxForm',
	touchOnBlur: false,
	validate
})(Maxes)

export default connect(mapStateToProps, { authenticatedSubmitMaxes, unauthenticatedSubmitMaxes })(formWrapped);