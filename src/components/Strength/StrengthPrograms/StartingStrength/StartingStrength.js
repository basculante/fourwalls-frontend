import React from 'react';
import { connect } from 'react-redux';
import { Grid, Table, Container } from 'semantic-ui-react';
import Navigation from '../../../Navigation/Navigation';
import '../../../App.css';

class StartingStrength extends React.Component {
	render() {
		const { squat, bench, deadlift, ohp, powerclean, squatIncrement, benchIncrement, deadliftIncrement, ohpIncrement, powercleanIncrement } = this.props

		return (
			<div className="program_page">
			<Navigation />
				<Container>
					<Grid className="program_grid">
						<Grid.Row centered textAlign={'center'}>
							<h1 className="program_title">STARTING STRENGTH</h1>
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
										<Table.HeaderCell>Phase 1: Week 1</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>Squat: {squat} 5x3</p>
											<p>Bench Press: {bench} 5x3</p>
											<p>Deadlift: {deadlift} 5x3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squat + squatIncrement} 5x3</p>
											<p>Overhead Press: {ohp + ohpIncrement} 5x3</p>
											<p>Deadlift: {deadlift + deadliftIncrement} 5x3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squat + squatIncrement*2} 5x3</p>
											<p>Bench Press: {bench + benchIncrement} 5x3</p>
											<p>Deadlift: {deadlift + deadliftIncrement*2} 5x3</p>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.HeaderCell>Week 2</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>Squat: {squat + squatIncrement*3} 5x3</p>
											<p>Overhead Press: {ohp + ohpIncrement*2} 5x3</p>
											<p>Deadlift: {deadlift + deadliftIncrement*3} 5x3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squat + squatIncrement*4} 5x3</p>
											<p>Bench Press: {bench + benchIncrement*2} 5x3</p>
											<p>Deadlift: {deadlift + deadliftIncrement*4} 5x3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squat + squatIncrement*5} 5x3</p>
											<p>Overhead Press: {ohp + ohpIncrement*3} 5x3</p>
											<p>Deadlift: {deadlift + deadliftIncrement*5} 5x3</p>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.HeaderCell>Week 3</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>Squat: {squat + squatIncrement*6} 5x3</p>
											<p>Bench Press: {bench + benchIncrement*3} 5x3</p>
											<p>Deadlift: {deadlift + deadliftIncrement*6} 5x3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squat + squatIncrement*7} 5x3</p>
											<p>Overhead Press: {ohp + ohpIncrement*4} 5x3</p>
											<p>Deadlift: {deadlift + deadliftIncrement*7} 5x3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squat + squatIncrement*8} 5x3</p>
											<p>Bench Press: {bench + benchIncrement*4} 5x3</p>
											<p>Deadlift: {deadlift + deadliftIncrement*8} 5x3</p>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
											<Table.HeaderCell>Phase 2: Week 1</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>Squat: {squat + squatIncrement*9} 5x3</p>
											<p>Overhead Press: {ohp + ohpIncrement*5} 5x3</p>
											<p>Deadlift: {deadlift + deadliftIncrement*9} 5x3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squat + squatIncrement*10} 5x3</p>
											<p>Bench Press: {bench + benchIncrement*5} 5x3</p>
											<p>Deadlift: {deadlift + deadliftIncrement*10} 5x3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squat + squatIncrement*11} 5x3</p>
											<p>Overhead Press: {ohp + ohpIncrement*6} 5x3</p>
											<p>Deadlift: {deadlift + deadliftIncrement*11} 5x3</p>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.HeaderCell>Week 2</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>Squat: {squat + squatIncrement*12} 5x3</p>
											<p>Bench Press: {bench + benchIncrement*6} 5x3</p>
											<p>Deadlift: {deadlift + deadliftIncrement*12} 5x3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squat + squatIncrement*13} 5x3</p>
											<p>Overhead Press: {ohp + ohpIncrement*7} 5x3</p>
											<p>Power Clean: {powerclean} 3x5</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squat + squatIncrement*14} 5x3</p>
											<p>Bench Press: {bench + benchIncrement*7} 5x3</p>
											<p>Deadlift: {deadlift + deadliftIncrement*14} 5x3</p>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.HeaderCell>Week 3</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>Squat: {squat + squatIncrement*15} 5x3</p>
											<p>Overhead Press: {ohp + ohpIncrement*8} 5x3</p>
											<p>Power Clean: {powerclean + powercleanIncrement} 3x5</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squat + squatIncrement*16} 5x3</p>
											<p>Bench Press: {bench + benchIncrement*8} 5x3</p>
											<p>Deadlift: {deadlift + deadliftIncrement*15} 5x3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squat + squatIncrement*17} 5x3</p>
											<p>Overhead Press: {ohp + ohpIncrement*9} 5x3</p>
											<p>Power Clean: {powerclean + powercleanIncrement*2} 3x5</p>
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
		squat: Math.floor(Number(state.maxes.squat) * .85), 
		bench: Math.floor(Number(state.maxes.bench) * .85), 
		deadlift: Math.floor(Number(state.maxes.deadlift) * .85),
		ohp: Math.floor(Number(state.maxes.ohp) * .85),
		powerclean: Math.floor(Number(state.maxes.powerclean) * .85),
		squatIncrement: Number(state.maxes.squatIncrement),
		benchIncrement: Number(state.maxes.benchIncrement),
		deadliftIncrement: Number(state.maxes.deadliftIncrement),
		ohpIncrement: Number(state.maxes.ohpIncrement),
		powercleanIncrement: Number(state.maxes.powercleanIncrement)
	}
}

export default connect(mapStateToProps)(StartingStrength);