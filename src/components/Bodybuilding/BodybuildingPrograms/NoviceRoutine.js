import React from 'react';
import { connect } from 'react-redux';
import { Grid, Table, Container } from 'semantic-ui-react';
import Navigation from '../../Navigation/Navigation';
import '../../App.css';

class NoviceRoutine extends React.Component {
	render() {
		const { squat, bench, deadlift, ohp, squatIncrement, benchIncrement, deadliftIncrement, ohpIncrement } = this.props

		return (
			<div className="program_page">
				<Navigation />
				<Container>
					<Grid>
						<Grid.Row centered textAlign={'center'}>
							<h1 className="program_title">NOVICE ROUTINE</h1>
						</Grid.Row>
						<Grid.Row>
							<Table unstackable className="program_table">
								<Table.Header>
									<Table.Row>
										<Table.HeaderCell>Day 1</Table.HeaderCell>
										<Table.HeaderCell>Day 2</Table.HeaderCell>
										<Table.HeaderCell>Day 3</Table.HeaderCell>
										<Table.HeaderCell>Day 4</Table.HeaderCell>
									</Table.Row>
								</Table.Header>

								<Table.Body>
									<Table.Row>
										<Table.HeaderCell>Week 1</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>Squat Variant: {squat} 5x3</p>
											<p>Deadlift Variant: {deadlift} 5x3</p>
											<p>Single Leg Variant: 8x3</p>
											<p>Standing Calf Raises: 8x4</p>
										</Table.Cell>
										<Table.Cell>
											<p>Horizontal Push: {bench} 5x3</p>
											<p>Horizontal Pull: 5x3</p>
											<p>Vertical Push: {ohp} 8x2</p>
											<p>Vertical Pull: 8x2</p>
											<p>Flys: 15x2</p>
										</Table.Cell>
										<Table.Cell>
											<p>Hip Hinge Variant: 8x3</p>
											<p>Leg Press Variant: 8x3</p>
											<p>Leg Extension: 12x3</p>
											<p>Leg Curl: 12x3</p>
											<p>Seated Calf Raise: 15x4</p>
										</Table.Cell>
										<Table.Cell>
											<p>Horizontal Push: {Math.floor(bench * .8)} 10x3</p>
											<p>Horizontal Pull: 10x3</p>
											<p>Incline Push: 12x2</p>
											<p>Vertical Pull: 12x2</p>
											<p>Triceps Isolation: 12x2</p>
											<p>Biceps Isolation: 12x2</p>
										</Table.Cell>
									</Table.Row>
										<Table.Row>
										<Table.HeaderCell>Week 2</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>Squat Variant: {squat + squatIncrement} 5x3</p>
											<p>Deadlift Variant: {deadlift + deadliftIncrement} 5x3</p>
											<p>Single Leg Variant: 8x3</p>
											<p>Standing Calf Raises: 8x4</p>
										</Table.Cell>
										<Table.Cell>
											<p>Horizontal Push: {bench + benchIncrement} 5x3</p>
											<p>Horizontal Pull: 5x3</p>
											<p>Vertical Push: {ohp + ohpIncrement} 8x2</p>
											<p>Vertical Pull: 8x2</p>
											<p>Flys: 15x2</p>
										</Table.Cell>
										<Table.Cell>
											<p>Hip Hinge Variant: 8x3</p>
											<p>Leg Press Variant: 8x3</p>
											<p>Leg Extension: 12x3</p>
											<p>Leg Curl: 12x3</p>
											<p>Seated Calf Raise: 15x4</p>
										</Table.Cell>
										<Table.Cell>
											<p>Horizontal Push: {Math.floor((bench + benchIncrement) * .8)} 10x3</p>
											<p>Horizontal Pull: 10x3</p>
											<p>Incline Push: 12x2</p>
											<p>Vertical Pull: 12x2</p>
											<p>Triceps Isolation: 12x2</p>
											<p>Biceps Isolation: 12x2</p>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.HeaderCell>Week 3</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>Squat Variant: {squat + squatIncrement * 2} 5x3</p>
											<p>Deadlift Variant: {deadlift + deadliftIncrement * 2} 5x3</p>
											<p>Single Leg Variant: 8x3</p>
											<p>Standing Calf Raises: 8x4</p>
										</Table.Cell>
										<Table.Cell>
											<p>Horizontal Push: {bench + benchIncrement * 2} 5x3</p>
											<p>Horizontal Pull: 5x3</p>
											<p>Vertical Push: {ohp + ohpIncrement * 2} 8x2</p>
											<p>Vertical Pull: 8x2</p>
											<p>Flys: 15x2</p>
										</Table.Cell>
										<Table.Cell>
											<p>Hip Hinge Variant: 8x3</p>
											<p>Leg Press Variant: 8x3</p>
											<p>Leg Extension: 12x3</p>
											<p>Leg Curl: 12x3</p>
											<p>Seated Calf Raise: 15x4</p>
										</Table.Cell>
										<Table.Cell>
											<p>Horizontal Push: {Math.floor((bench + benchIncrement * 2) * .8)} 10x3</p>
											<p>Horizontal Pull: 10x3</p>
											<p>Incline Push: 12x2</p>
											<p>Vertical Pull: 12x2</p>
											<p>Triceps Isolation: 12x2</p>
											<p>Biceps Isolation: 12x2</p>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.HeaderCell>Week 4</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
											<Table.Cell>
											<p>Squat Variant: {squat + squatIncrement * 3} 5x3</p>
											<p>Deadlift Variant: {deadlift + deadliftIncrement * 3} 5x3</p>
											<p>Single Leg Variant: 8x3</p>
											<p>Standing Calf Raises: 8x4</p>
										</Table.Cell>
										<Table.Cell>
											<p>Horizontal Push: {bench + benchIncrement * 3} 5x3</p>
											<p>Horizontal Pull: 5x3</p>
											<p>Vertical Push: {ohp + ohpIncrement * 3} 8x2</p>
											<p>Vertical Pull: 8x2</p>
											<p>Flys: 15x2</p>
										</Table.Cell>
										<Table.Cell>
											<p>Hip Hinge Variant: 8x3</p>
											<p>Leg Press Variant: 8x3</p>
											<p>Leg Extension: 12x3</p>
											<p>Leg Curl: 12x3</p>
											<p>Seated Calf Raise: 15x4</p>
										</Table.Cell>
										<Table.Cell>
											<p>Horizontal Push: {Math.floor((bench + benchIncrement * 3) * .8)} 10x3</p>
											<p>Horizontal Pull: 10x3</p>
											<p>Incline Push: 12x2</p>
											<p>Vertical Pull: 12x2</p>
											<p>Triceps Isolation: 12x2</p>
											<p>Biceps Isolation: 12x2</p>
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

export default connect(mapStateToProps)(NoviceRoutine);