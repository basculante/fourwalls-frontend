import React from 'react';
import { connect } from 'react-redux';
import { Grid, Table, Container } from 'semantic-ui-react';
import Navigation from '../../Navigation/Navigation';
import '../../App.css';

class Phul extends React.Component {
	render() {
		const { squat, bench, deadlift, ohp, squatIncrement, benchIncrement, deadliftIncrement, ohpIncrement } = this.props

		return (
			<div className="program_page">
			<Navigation />
				<Container>
					<Grid className="program_grid">
						<Grid.Row centered textAlign={'center'}>
							<h1 className="program_title">P.H.U.L. (POWER HYPERTROPHY UPPER LOWER)</h1>
						</Grid.Row>
						<Grid.Row centered>
							<h4 className="program_subtitle">Reps x Set (lbs)</h4>
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
											<p>Barbell Bench Press: {bench} 3-5 x 3-4</p>
											<p>Incilne Dumbbell Bench Press: 6-10 x 3-4</p>
											<p>Bent Over Row: 3-5 x 3-4</p>
											<p>Lat Pull Down: 6-10 x 3-4</p>
											<p>Overhead Press: {ohp} 5-8 x 2-3</p>
											<p>Barbell Curl: 6-10 x 2-3</p>
											<p>Skullcrusher: 6-10 x 2-3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squat} 3-5 x 3-4</p>
											<p>Deadlift: {deadlift} 3-5 x 3-4</p>
											<p>Leg Press: 10-15 x 3-5</p>
											<p>Leg Curl: 10-15 x 3-5</p>
											<p>Calf Exercise: 6-10 x 4</p>
										</Table.Cell>
										<Table.Cell>
											<p>Incline Barbell Bench Press: 8-12 x 3-4</p>
											<p>Flat Bench Dumbbell Flye: 8-12 x 3-4</p>
											<p>Seated Cable Row: 8-12 x 3-4</p>
											<p>One Arm Dumbbell Row: 3-4 x 8-12</p>
											<p>Dumbell Lateral Raise: 8-12 x 3-4</p>
											<p>Seated Incline Dumbbell Curl: 8-12 x 3-4</p>
											<p>Cable Tricep Extension: 8-12 x 3-4 </p>
										</Table.Cell>
										<Table.Cell>
											<p>Front Squat: 8-12 x 3-4</p>
											<p>Barbell Lunge: 8-12 x 3-4</p>
											<p>Leg Extension: 10-15 x 3-4</p>
											<p>Leg Curl: 10-15 x 3-4</p>
											<p>Seated Calf Raise: 8-12 x 3-4</p>
											<p>Calf Press: 8-12 x 3-4</p>
										</Table.Cell>
									</Table.Row>
										<Table.Row>
										<Table.HeaderCell>Week 2</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>Barbell Bench Press: {bench + benchIncrement} 3-5 x 3-4</p>
											<p>Incilne Dumbbell Bench Press: 6-10 x 3-4</p>
											<p>Bent Over Row: 3-5 x 3-4</p>
											<p>Lat Pull Down: 6-10 x 3-4</p>
											<p>Overhead Press: {ohp + ohpIncrement} 5-8 x 2-3</p>
											<p>Barbell Curl: 6-10 x 2-3</p>
											<p>Skullcrusher: 6-10 x 2-3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squat + squatIncrement} 3-5 x 3-4</p>
											<p>Deadlift: {deadlift + deadliftIncrement} 3-5 x 3-4</p>
											<p>Leg Press: 10-15 x 3-5</p>
											<p>Leg Curl: 10-15 x 3-5</p>
											<p>Calf Exercise: 6-10 x 4</p>
										</Table.Cell>
										<Table.Cell>
											<p>Incline Barbell Bench Press: 8-12 x 3-4</p>
											<p>Flat Bench Dumbbell Flye: 8-12 x 3-4</p>
											<p>Seated Cable Row: 8-12 x 3-4</p>
											<p>One Arm Dumbbell Row: 3-4 x 8-12</p>
											<p>Dumbell Lateral Raise: 8-12 x 3-4</p>
											<p>Seated Incline Dumbbell Curl: 8-12 x 3-4</p>
											<p>Cable Tricep Extension: 8-12 x 3-4 </p>
										</Table.Cell>
										<Table.Cell>
											<p>Front Squat: 8-12 x 3-4</p>
											<p>Barbell Lunge: 8-12 x 3-4</p>
											<p>Leg Extension: 10-15 x 3-4</p>
											<p>Leg Curl: 10-15 x 3-4</p>
											<p>Seated Calf Raise: 8-12 x 3-4</p>
											<p>Calf Press: 8-12 x 3-4</p>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.HeaderCell>Week 3</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>Barbell Bench Press: {bench + benchIncrement * 2} 3-5 x 3-4</p>
											<p>Incilne Dumbbell Bench Press: 6-10 x 3-4</p>
											<p>Bent Over Row: 3-5 x 3-4</p>
											<p>Lat Pull Down: 6-10 x 3-4</p>
											<p>Overhead Press: {ohp + ohpIncrement * 2} 5-8 x 2-3</p>
											<p>Barbell Curl: 6-10 x 2-3</p>
											<p>Skullcrusher: 6-10 x 2-3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squat + squatIncrement * 2} 3-5 x 3-4</p>
											<p>Deadlift: {deadlift + deadliftIncrement * 2} 3-5 x 3-4</p>
											<p>Leg Press: 10-15 x 3-5</p>
											<p>Leg Curl: 10-15 x 3-5</p>
											<p>Calf Exercise: 6-10 x 4</p>
										</Table.Cell>
										<Table.Cell>
											<p>Incline Barbell Bench Press: 8-12 x 3-4</p>
											<p>Flat Bench Dumbbell Flye: 8-12 x 3-4</p>
											<p>Seated Cable Row: 8-12 x 3-4</p>
											<p>One Arm Dumbbell Row: 3-4 x 8-12</p>
											<p>Dumbell Lateral Raise: 8-12 x 3-4</p>
											<p>Seated Incline Dumbbell Curl: 8-12 x 3-4</p>
											<p>Cable Tricep Extension: 8-12 x 3-4 </p>
										</Table.Cell>
										<Table.Cell>
											<p>Front Squat: 8-12 x 3-4</p>
											<p>Barbell Lunge: 8-12 x 3-4</p>
											<p>Leg Extension: 10-15 x 3-4</p>
											<p>Leg Curl: 10-15 x 3-4</p>
											<p>Seated Calf Raise: 8-12 x 3-4</p>
											<p>Calf Press: 8-12 x 3-4</p>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.HeaderCell>Week 4</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
												<Table.Cell>
											<p>Barbell Bench Press: {bench + benchIncrement * 3} 3-5 x 3-4</p>
											<p>Incilne Dumbbell Bench Press: 6-10 x 3-4</p>
											<p>Bent Over Row: 3-5 x 3-4</p>
											<p>Lat Pull Down: 6-10 x 3-4</p>
											<p>Overhead Press: {ohp + ohpIncrement * 3} 5-8 x 2-3</p>
											<p>Barbell Curl: 6-10 x 2-3</p>
											<p>Skullcrusher: 6-10 x 2-3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squat + squatIncrement * 3} 3-5 x 3-4</p>
											<p>Deadlift: {deadlift + deadliftIncrement * 3} 3-5 x 3-4</p>
											<p>Leg Press: 10-15 x 3-5</p>
											<p>Leg Curl: 10-15 x 3-5</p>
											<p>Calf Exercise: 6-10 x 4</p>
										</Table.Cell>
										<Table.Cell>
											<p>Incline Barbell Bench Press: 8-12 x 3-4</p>
											<p>Flat Bench Dumbbell Flye: 8-12 x 3-4</p>
											<p>Seated Cable Row: 8-12 x 3-4</p>
											<p>One Arm Dumbbell Row: 3-4 x 8-12</p>
											<p>Dumbell Lateral Raise: 8-12 x 3-4</p>
											<p>Seated Incline Dumbbell Curl: 8-12 x 3-4</p>
											<p>Cable Tricep Extension: 8-12 x 3-4 </p>
										</Table.Cell>
										<Table.Cell>
											<p>Front Squat: 8-12 x 3-4</p>
											<p>Barbell Lunge: 8-12 x 3-4</p>
											<p>Leg Extension: 10-15 x 3-4</p>
											<p>Leg Curl: 10-15 x 3-4</p>
											<p>Seated Calf Raise: 8-12 x 3-4</p>
											<p>Calf Press: 8-12 x 3-4</p>
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
		squat: Math.floor(Number(state.maxes.squat) * .80), 
		bench: Math.floor(Number(state.maxes.bench) * .80), 
		deadlift: Math.floor(Number(state.maxes.deadlift) * .80),
		ohp: Math.floor(Number(state.maxes.ohp) * .80),
		powerclean: Math.floor(Number(state.maxes.powerclean) * .70),
		squatIncrement: Number(state.maxes.squatIncrement),
		benchIncrement: Number(state.maxes.benchIncrement),
		deadliftIncrement: Number(state.maxes.deadliftIncrement),
		ohpIncrement: Number(state.maxes.ohpIncrement),
		powercleanIncrement: Number(state.maxes.powercleanIncrement)
	}
}

export default connect(mapStateToProps)(Phul);