import React from 'react';
import { connect } from 'react-redux';
import { Grid, Table, Container } from 'semantic-ui-react';
import Navigation from '../../Navigation/Navigation';
import '../../App.css';

class Phat extends React.Component {
	render() {
		const { squat, squatIncrement } = this.props

		const squatA = Math.floor(squat * .7);
		const squatB = Math.floor ((squatA + squatIncrement));
		const squatBA = Math.floor(squatB * .7);
		const squatC = Math.floor(squatB + squatIncrement);
		const squatCA = Math.floor(squatC * .7);
		const squatD = Math.floor(squatC + squatIncrement);
		const squatDA = Math.floor(squatC * .7);

		return (
			<div className="program_page">
				<Navigation />
				<Container>
					<Grid className="program_grid">
						<Grid.Row centered textAlign={'center'}>
							<h1 className="program_title">P.H.A.T. (POWER HYPERTROPHY ADAPTIVE TRAINING)</h1>
						</Grid.Row>
						<Grid.Row centered className="program_subtitle">
							<h4>Reps x Set (lbs)</h4>
						</Grid.Row>
						<Grid.Row>
							<Table unstackable className="program_table">
								<Table.Header>
									<Table.Row>
										<Table.HeaderCell>Day 1</Table.HeaderCell>
										<Table.HeaderCell>Day 2</Table.HeaderCell>
										<Table.HeaderCell>Day 3</Table.HeaderCell>
										<Table.HeaderCell>Day 4</Table.HeaderCell>
										<Table.HeaderCell>Day 5</Table.HeaderCell>
									</Table.Row>
								</Table.Header>

								<Table.Body>
									<Table.Row>
										<Table.HeaderCell>Week 1</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>Barbell Row: 3-5 x 3</p>
											<p>Weighted Pull Ups: 6-10 x 2</p>
											<p>Rack Chins: 6-10 x 2</p>
											<p>Flat Dumbbell Press: 3-5 x 3</p>
											<p>Weighted Dips: 6-10 x 2</p>
											<p>Seated Dumbbell Shoulder Press: 6-10 x 3</p>
											<p>Barbell Curls: 6-10 x 3</p>
											<p>Skullcrusher: 6-10 x 3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squat} 3-5 x 3</p>
											<p>Hack Squat: 6-10 x 2</p>
											<p>Leg Extension: 6-10 x 2</p>
											<p>Stiff Legged Deadlift: 5-8 x 3</p>
											<p>GHR: 6-10 x 2</p>
											<p>Standing Calf Raise: 6-10 x 3</p>
											<p>Seated Calf Raise: 6-10 x 2</p>
										</Table.Cell>
										<Table.Cell>
											<p>Barbell Row: 3 x 6</p>
											<p>Rack Chins: 8-12 x 3</p>
											<p>Seated Cable Row: 8-12 x 3</p>
											<p>Dumbbell Rows: 12-15 x 2</p>
											<p>Close Grip Pulldown: 15-20 x 2</p>
											<p>Seated Dumbbell Press: 8-12 x 3</p>
											<p>Upright Rows: 12-15 x 2</p>
											<p>Side Lateral Raise: 12-20 x 3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squatA} 3 x 6</p>
											<p>Hack Squat: 8-12 x 3</p>
											<p>Leg Press: 15-20 x 2</p>
											<p>Leg Extension: 15-20 x 3</p>
											<p>Romanian Deadlift: 8-12 x 3</p>
											<p>Lying Leg Curl: 12-15 x 2</p>
											<p>Seated Leg Curl: 15-20 x 2</p>
											<p>Seated Calf Raises: 10-15 x 4</p>
										</Table.Cell>
										<Table.Cell>
											<p>Flat Dumbbell Press: 3 x 6</p>
											<p>Incline Dumbbell Press: 8-12 x 3</p>
											<p>Hammer Strength Chest Press: 12-15 x 3</p>
											<p>Incline Cable Flye: 15 -20 x 2</p>
											<p>Preacher Curl: 8-12 x 3</p>
											<p>Concentration Curl: 12-15 x 2</p>
											<p>Seated Tricep Extension: 8-12 x 3</p>
											<p>Cable Pressdown: 12-15 x 2</p>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.HeaderCell>Week 2</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>Barbell Row: 3-5 x 3</p>
											<p>Weighted Pull Ups: 6-10 x 2</p>
											<p>Rack Chins: 6-10 x 2</p>
											<p>Flat Dumbbell Press: 3-5 x 3</p>
											<p>Weighted Dips: 6-10 x 2</p>
											<p>Seated Dumbbell Shoulder Press: 6-10 x 3</p>
											<p>Barbell Curls: 6-10 x 3</p>
											<p>Skullcrusher: 6-10 x 3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squatB} 3-5 x 3</p>
											<p>Hack Squat: 6-10 x 2</p>
											<p>Leg Extension: 6-10 x 2</p>
											<p>Stiff Legged Deadlift: 5-8 x 3</p>
											<p>GHR: 6-10 x 2</p>
											<p>Standing Calf Raise: 6-10 x 3</p>
											<p>Seated Calf Raise: 6-10 x 2</p>
										</Table.Cell>
										<Table.Cell>
											<p>Barbell Row: 3 x 6</p>
											<p>Rack Chins: 8-12 x 3</p>
											<p>Seated Cable Row: 8-12 x 3</p>
											<p>Dumbbell Rows: 12-15 x 2</p>
											<p>Close Grip Pulldown: 15-20 x 2</p>
											<p>Seated Dumbbell Press: 8-12 x 3</p>
											<p>Upright Rows: 12-15 x 2</p>
											<p>Side Lateral Raise: 12-20 x 3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squatBA} 3 x 6</p>
											<p>Hack Squat: 8-12 x 3</p>
											<p>Leg Press: 15-20 x 2</p>
											<p>Leg Extension: 15-20 x 3</p>
											<p>Romanian Deadlift: 8-12 x 3</p>
											<p>Lying Leg Curl: 12-15 x 2</p>
											<p>Seated Leg Curl: 15-20 x 2</p>
											<p>Seated Calf Raises: 10-15 x 4</p>
										</Table.Cell>
										<Table.Cell>
											<p>Flat Dumbbell Press: 3 x 6</p>
											<p>Incline Dumbbell Press: 8-12 x 3</p>
											<p>Hammer Strength Chest Press: 12-15 x 3</p>
											<p>Incline Cable Flye: 15 -20 x 2</p>
											<p>Preacher Curl: 8-12 x 3</p>
											<p>Concentration Curl: 12-15 x 2</p>
											<p>Seated Tricep Extension: 8-12 x 3</p>
											<p>Cable Pressdown: 12-15 x 2</p>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.HeaderCell>Week 3</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>Barbell Row: 3-5 x 3</p>
											<p>Weighted Pull Ups: 6-10 x 2</p>
											<p>Rack Chins: 6-10 x 2</p>
											<p>Flat Dumbbell Press: 3-5 x 3</p>
											<p>Weighted Dips: 6-10 x 2</p>
											<p>Seated Dumbbell Shoulder Press: 6-10 x 3</p>
											<p>Barbell Curls: 6-10 x 3</p>
											<p>Skullcrusher: 6-10 x 3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squatC} 3-5 x 3</p>
											<p>Hack Squat: 6-10 x 2</p>
											<p>Leg Extension: 6-10 x 2</p>
											<p>Stiff Legged Deadlift: 5-8 x 3</p>
											<p>GHR: 6-10 x 2</p>
											<p>Standing Calf Raise: 6-10 x 3</p>
											<p>Seated Calf Raise: 6-10 x 2</p>
										</Table.Cell>
										<Table.Cell>
											<p>Barbell Row: 3 x 6</p>
											<p>Rack Chins: 8-12 x 3</p>
											<p>Seated Cable Row: 8-12 x 3</p>
											<p>Dumbbell Rows: 12-15 x 2</p>
											<p>Close Grip Pulldown: 15-20 x 2</p>
											<p>Seated Dumbbell Press: 8-12 x 3</p>
											<p>Upright Rows: 12-15 x 2</p>
											<p>Side Lateral Raise: 12-20 x 3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squatCA} 3 x 6</p>
											<p>Hack Squat: 8-12 x 3</p>
											<p>Leg Press: 15-20 x 2</p>
											<p>Leg Extension: 15-20 x 3</p>
											<p>Romanian Deadlift: 8-12 x 3</p>
											<p>Lying Leg Curl: 12-15 x 2</p>
											<p>Seated Leg Curl: 15-20 x 2</p>
											<p>Seated Calf Raises: 10-15 x 4</p>
										</Table.Cell>
										<Table.Cell>
											<p>Flat Dumbbell Press: 3 x 6</p>
											<p>Incline Dumbbell Press: 8-12 x 3</p>
											<p>Hammer Strength Chest Press: 12-15 x 3</p>
											<p>Incline Cable Flye: 15 -20 x 2</p>
											<p>Preacher Curl: 8-12 x 3</p>
											<p>Concentration Curl: 12-15 x 2</p>
											<p>Seated Tricep Extension: 8-12 x 3</p>
											<p>Cable Pressdown: 12-15 x 2</p>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.HeaderCell>Week 4</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>Barbell Row: 3-5 x 3</p>
											<p>Weighted Pull Ups: 6-10 x 2</p>
											<p>Rack Chins: 6-10 x 2</p>
											<p>Flat Dumbbell Press: 3-5 x 3</p>
											<p>Weighted Dips: 6-10 x 2</p>
											<p>Seated Dumbbell Shoulder Press: 6-10 x 3</p>
											<p>Barbell Curls: 6-10 x 3</p>
											<p>Skullcrusher: 6-10 x 3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squatD} 3-5 x 3</p>
											<p>Hack Squat: 6-10 x 2</p>
											<p>Leg Extension: 6-10 x 2</p>
											<p>Stiff Legged Deadlift: 5-8 x 3</p>
											<p>GHR: 6-10 x 2</p>
											<p>Standing Calf Raise: 6-10 x 3</p>
											<p>Seated Calf Raise: 6-10 x 2</p>
										</Table.Cell>
										<Table.Cell>
											<p>Barbell Row: 3 x 6</p>
											<p>Rack Chins: 8-12 x 3</p>
											<p>Seated Cable Row: 8-12 x 3</p>
											<p>Dumbbell Rows: 12-15 x 2</p>
											<p>Close Grip Pulldown: 15-20 x 2</p>
											<p>Seated Dumbbell Press: 8-12 x 3</p>
											<p>Upright Rows: 12-15 x 2</p>
											<p>Side Lateral Raise: 12-20 x 3</p>
										</Table.Cell>
										<Table.Cell>
											<p>Squat: {squatDA} 3 x 6</p>
											<p>Hack Squat: 8-12 x 3</p>
											<p>Leg Press: 15-20 x 2</p>
											<p>Leg Extension: 15-20 x 3</p>
											<p>Romanian Deadlift: 8-12 x 3</p>
											<p>Lying Leg Curl: 12-15 x 2</p>
											<p>Seated Leg Curl: 15-20 x 2</p>
											<p>Seated Calf Raises: 10-15 x 4</p>
										</Table.Cell>
										<Table.Cell>
											<p>Flat Dumbbell Press: 3 x 6</p>
											<p>Incline Dumbbell Press: 8-12 x 3</p>
											<p>Hammer Strength Chest Press: 12-15 x 3</p>
											<p>Incline Cable Flye: 15 -20 x 2</p>
											<p>Preacher Curl: 8-12 x 3</p>
											<p>Concentration Curl: 12-15 x 2</p>
											<p>Seated Tricep Extension: 8-12 x 3</p>
											<p>Cable Pressdown: 12-15 x 2</p>
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

export default connect(mapStateToProps)(Phat);