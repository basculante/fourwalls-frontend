import React from 'react';
import { connect } from 'react-redux';
import { Grid, Table, Container } from 'semantic-ui-react';
import Navigation from '../../../Navigation/Navigation';
import '../../../App.css';

class TexasMethod extends React.Component {
	render() {
		const { squat, bench, deadlift, ohp, powerclean, squatIncrement, benchIncrement, deadliftIncrement, ohpIncrement, powercleanIncrement } = this.props

		const squatWeek1A = Math.floor(squat * .85);
		const squatWeek1B = Math.floor((squat * .85) * .85);
		const squatWeek1C = Math.floor(squat);
		const squatWeek2A = Math.floor((squat + squatIncrement) * .85);
		const squatWeek2B = Math.floor(((squat + squatIncrement) * .85) * .85); 
		const squatWeek2C = Math.floor((squat + squatIncrement));
		const squatWeek3A = Math.floor(((squat + squatIncrement * 2) * .85));
		const squatWeek3B = Math.floor(((squat + squatIncrement * 2) * .85) * .85)
		const squatWeek3C = Math.floor((squat + squatIncrement * 2));
		const squatWeek4A = Math.floor(((squat + squatIncrement * 3) * .85));
		const squatWeek4B = Math.floor(((squat + squatIncrement * 3) * .85) * .85)
		const squatWeek4C = Math.floor((squat + squatIncrement * 3));

		const deadWeek1C = Math.floor(deadlift);
		const deadWeek2C = Math.floor((deadlift + deadliftIncrement));
		const deadWeek3C = Math.floor((deadlift + deadliftIncrement * 2));
		const deadWeek4C = Math.floor((deadlift + deadliftIncrement * 3));

		const benchWeek1A = Math.floor(bench * .85);
		const benchWeek1B = Math.floor((bench*.85)*.85);
		const benchWeek1C = Math.floor(bench);
		const benchWeek2A = Math.floor((bench + benchIncrement) * .85);
		const benchWeek2C = Math.floor((bench + benchIncrement));
		const benchWeek3B = Math.floor(((bench + benchIncrement)*.85) * .85);

		const ohpWeek1B = Math.floor((ohp*.85)*.85);
		const ohpWeek2A = Math.floor((ohp + ohpIncrement) * .85);
		const ohpWeek2B = Math.floor(((ohp + ohpIncrement) * .85) * .85); 
		const ohpWeek2C = Math.floor((ohp + ohpIncrement));
		const ohpWeek3A = Math.floor((ohp + ohpIncrement*2)*.85);
		const ohpWeek3C = Math.floor(ohp + ohpIncrement*2);

		const powerWeek1A = Math.floor(powerclean);
		const powerWeek2A = Math.floor(powerclean + powercleanIncrement);
		const powerWeek3A = Math.floor(powerclean + powercleanIncrement*2);
		const powerWeek4A = Math.floor(powerclean + powercleanIncrement*3);

		return (
			<div className="program_page">
				<Navigation />
				<Container>
					<Grid className="program_grid">
						<Grid.Row centered textAlign={'center'}>
							<h1 className="program_title">TEXAS METHOD</h1>
						</Grid.Row>
						<Grid.Row>
							<Table unstackable className="program_table">
								<Table.Header>
									<Table.Row>
										<Table.HeaderCell>Day A</Table.HeaderCell>
										<Table.HeaderCell>Day B</Table.HeaderCell>
										<Table.HeaderCell>Day A</Table.HeaderCell>
									</Table.Row>
								</Table.Header>

								<Table.Body>
									<Table.Row>
										<Table.HeaderCell>Week 1</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>Squat: {squatWeek1A} 5x5</p>
											<p>Bench Press: {benchWeek1A} 5x5</p>
											<p>Power Clean: {powerWeek1A} 3x5</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squatWeek1B} 5x2</p>
											<p>Overhead Press: {ohpWeek1B} 5x2</p>
											<p>GHR/Back Extension: 10-15x3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squatWeek1C} 5x1</p>
											<p>Bench Press: {benchWeek1C} 5x1</p>
											<p>Deadlift: {deadWeek1C} 5x1</p>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.HeaderCell>Week 2</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>Squat: {squatWeek2A} 5x5</p>
											<p>Overhead Press: {ohpWeek2A} 5x5</p>
											<p>Power Clean: {powerWeek2A} 3x5</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squatWeek2B} 5x2</p>
											<p>Bench Press: {benchWeek1B} 5x3</p>
											<p>GHR/Back Extension: 10-15x3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squatWeek2C} 5x1</p>
											<p>Overhead Press: {ohpWeek2C} 5x1</p>
											<p>Deadlift: {deadWeek2C} 5x1</p>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.HeaderCell>Week 3</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>Squat: {squatWeek3A} 5x5</p>
											<p>Bench Press: {benchWeek2A} 5x5</p>
											<p>Power Clean: {powerWeek3A} 3x5</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squatWeek3B} 5x2</p>
											<p>Overhead Press: {ohpWeek2B} 5x2</p>
											<p>GHR/Back Extension: 10-15x3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squatWeek3C} 5x1</p>
											<p>Bench Press: {benchWeek2C} 5x1</p>
											<p>Deadlift: {deadWeek3C} 5x1</p>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.HeaderCell>Week 4</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>Squat: {squatWeek4A} 5x5</p>
											<p>Overhead Press: {ohpWeek3A} 5x5</p>
											<p>Power Clean: {powerWeek4A} 3x5</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squatWeek4B} 5x2</p>
											<p>Bench Press: {benchWeek3B} 5x2</p>
											<p>GHR/Back Extension: 10-15x3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squatWeek4C} 5x1</p>
											<p>Overhead Press: {ohpWeek3C} 5x1</p>
											<p>Deadlift: {deadWeek4C} 5x1</p>
										</Table.Cell>
									</Table.Row>
								</Table.Body>
							</Table>
						</Grid.Row>
					</Grid>
				</Container>
			</div>
		)
	};
};

const mapStateToProps = (state) => {
	return {
		squat: Math.floor(Number(state.maxes.squat) * .90), 
		bench: Math.floor(Number(state.maxes.bench) * .90), 
		deadlift: Math.floor(Number(state.maxes.deadlift) * .90),
		ohp: Math.floor(Number(state.maxes.ohp) * .90),
		powerclean: Math.floor(Number(state.maxes.powerclean) * .90),
		squatIncrement: Number(state.maxes.squatIncrement),
		benchIncrement: Number(state.maxes.benchIncrement),
		deadliftIncrement: Number(state.maxes.deadliftIncrement),
		ohpIncrement: Number(state.maxes.ohpIncrement),
		powercleanIncrement: Number(state.maxes.powercleanIncrement)
	}
}

export default connect(mapStateToProps)(TexasMethod);