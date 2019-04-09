import React from 'react';
import { connect } from 'react-redux';
import { Grid, Table, Container } from 'semantic-ui-react';
import Navigation from '../../../Navigation/Navigation';
import '../../../App.css';

class Wendlers extends React.Component {
	render() {
		const { squat, bench, deadlift, ohp } = this.props

		const squat40 = Math.floor(squat * .4);
		const squat50 = Math.floor(squat * .5);
		const squat60 = Math.floor(squat * .6);
		const squat70 = Math.floor(squat * .7);
		const squat80 = Math.floor(squat * .8); 
		const squat85 = Math.floor(squat * .85);
		const squat90 = Math.floor(squat * .9);
		const squat95 = Math.floor(squat *.95);

		const dead40 = Math.floor(deadlift * .4);
		const dead50 = Math.floor(deadlift * .5);
		const dead60 = Math.floor(deadlift * .6);
		const dead70 = Math.floor(deadlift * .7);
		const dead80 = Math.floor(deadlift * .8);
		const dead85 = Math.floor(deadlift * .85);
		const dead90 = Math.floor(deadlift * .9);
		const dead95 = Math.floor(deadlift * .95);
		
		const bench40 = Math.floor(bench * .4);
		const bench50 = Math.floor(bench * .5);
		const bench60 = Math.floor(bench * .6);
		const bench70 = Math.floor(bench * .7);
		const bench80 = Math.floor(bench * .8);
		const bench85 = Math.floor(bench * .85);
		const bench90 = Math.floor(bench * .9);
		const bench95 = Math.floor(bench * .95);

		const ohp40 = Math.floor(ohp * .4);
		const ohp50 = Math.floor(ohp * .5);
		const ohp60 = Math.floor(ohp * .6);
		const ohp70 = Math.floor(ohp * .7);
		const ohp80 = Math.floor(ohp * .8);
		const ohp85 = Math.floor(ohp * .85);
		const ohp90 = Math.floor(ohp * .9);
		const ohp95 = Math.floor(ohp * .95);

		return (
			<div className="program_page">
				<Navigation />
				<Container>
					<Grid className="program_grid">
						<Grid.Row centered textAlign={'center'}>
							<h1 className="program_title">WENDLER'S 5/3/1</h1>
						</Grid.Row>
						<Grid.Row centered>
							<h4 className="program_subtitle">Reps x Set (lbs)</h4>
						</Grid.Row>
						<Grid.Row>
							<Table unstackable className="program_table">
								<Table.Header>
									<Table.Row>
										<Table.HeaderCell>Overhead Press</Table.HeaderCell>
										<Table.HeaderCell>Deadlift</Table.HeaderCell>
										<Table.HeaderCell>Bench Press</Table.HeaderCell>
										<Table.HeaderCell>Squat</Table.HeaderCell>
									</Table.Row>
								</Table.Header>

								<Table.Body>
									<Table.Row>
										<Table.HeaderCell>Week 1</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>{ohp40} 5x1</p>
											<p>{ohp50} 5x1</p>
											<p>{ohp60} 3x1</p>
											<p>{ohp70} 5x1</p>
											<p>{ohp80} 5x1</p>
											<p>{ohp85} 5+x1</p>
											<p>{ohp50} 10x5</p>
											<p>Hanging Leg Raise: 15x5</p>
										</Table.Cell>
										<Table.Cell>
											<p>{dead40} 5x1</p>
											<p>{dead50} 5x1</p>
											<p>{dead60} 3x1</p>
											<p>{dead70} 5x1</p>
											<p>{dead80} 5x1</p>
											<p>{dead85} 5+x1</p>
											<p>{dead50} 10x5</p>
											<p>Dumbbell Row: 10x5</p>
										</Table.Cell>
										<Table.Cell>
											<p>{bench40} 5x1</p>
											<p>{bench50} 5x1</p>
											<p>{bench60} 3x1</p>
											<p>{bench70} 5x1</p>
											<p>{bench80} 5x1</p>
											<p>{bench85} 5+x1</p>
											<p>{bench50} 10x5</p>
											<p>Chin-ups: 10x5</p>
										</Table.Cell>
										<Table.Cell>
											<p>{squat40} 5x1</p>
											<p>{squat50} 5x1</p>
											<p>{squat60} 3x1</p>
											<p>{squat70} 5x1</p>
											<p>{squat80} 5x1</p>
											<p>{squat85} 5+x1</p>
											<p>{squat50} 10x5</p>
											<p>Leg Curl: 10x5</p>
										</Table.Cell>
									</Table.Row>
										<Table.Row>
										<Table.HeaderCell>Week 2</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>{ohp40} 5x1</p>
											<p>{ohp50} 5x1</p>
											<p>{ohp60} 3x1</p>
											<p>{ohp70} 3x1</p>
											<p>{ohp80} 3x1</p>
											<p>{ohp90} 3+x1</p>
											<p>{ohp50} 10x5</p>
											<p>Hanging Leg Raise: 15x5</p>
										</Table.Cell>
										<Table.Cell>
											<p>{dead40} 5x1</p>
											<p>{dead50} 5x1</p>
											<p>{dead60} 3x1</p>
											<p>{dead70} 3x1</p>
											<p>{dead80} 3x1</p>
											<p>{dead90} 3+x1</p>
											<p>{dead50} 10x5</p>
											<p>Dumbbell Row: 10x5</p>
										</Table.Cell>
										<Table.Cell>
											<p>{bench40} 5x1</p>
											<p>{bench50} 5x1</p>
											<p>{bench60} 3x1</p>
											<p>{bench70} 3x1</p>
											<p>{bench80} 3x1</p>
											<p>{bench90} 3+x1</p>
											<p>{bench50} 10x5</p>
											<p>Chin-ups: 10x5</p>
										</Table.Cell>
										<Table.Cell>
											<p>{squat40} 5x1</p>
											<p>{squat50} 5x1</p>
											<p>{squat60} 3x1</p>
											<p>{squat70} 3x1</p>
											<p>{squat80} 3x1</p>
											<p>{squat90} 3+x1</p>
											<p>{squat50} 10x5</p>
											<p>Leg Curl: 10x5</p>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.HeaderCell>Week 3</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>{ohp40} 5x1</p>
											<p>{ohp50} 5x1</p>
											<p>{ohp60} 3x1</p>
											<p>{ohp80} 5x1</p>
											<p>{ohp85} 3x1</p>
											<p>{ohp95} 1+x1</p>
											<p>{ohp50} 10x5</p>
											<p>Hanging Leg Raise: 15x5</p>
										</Table.Cell>
										<Table.Cell>
											<p>{dead40} 5x1</p>
											<p>{dead50} 5x1</p>
											<p>{dead60} 3x1</p>
											<p>{dead80} 5x1</p>
											<p>{dead85} 3x1</p>
											<p>{dead95} 1+x1</p>
											<p>{dead50} 10x5</p>
											<p>Dumbbell Row: 10x5</p>
										</Table.Cell>
										<Table.Cell>
											<p>{bench40} 5x1</p>
											<p>{bench50} 5x1</p>
											<p>{bench60} 3x1</p>
											<p>{bench80} 5x1</p>
											<p>{bench85} 3x1</p>
											<p>{bench95} 1+x1</p>
											<p>{bench50} 10x5</p>
											<p>Chin-ups: 10x5</p>
										</Table.Cell>
										<Table.Cell>
											<p>{squat40} 5x1</p>
											<p>{squat50} 5x1</p>
											<p>{squat60} 3x1</p>
											<p>{squat80} 5x1</p>
											<p>{squat85} 3x1</p>
											<p>{squat95} 1+x1</p>
											<p>{squat50} 10x5</p>
											<p>Leg Curl: 10x5</p>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.HeaderCell>Week 4</Table.HeaderCell>
									</Table.Row>
									<Table.Row>
										<Table.Cell>
											<p>{ohp40} 5x1</p>
											<p>{ohp50} 5x1</p>
											<p>{ohp60} 5x1</p>
											<p>Hanging Leg Raise: 15x5</p>
										</Table.Cell>
										<Table.Cell>
											<p>{dead40} 5x1</p>
											<p>{dead50} 5x1</p>
											<p>{dead60} 5x1</p>
											<p>Dumbbell Row: 10x5</p>
										</Table.Cell>
										<Table.Cell>
											<p>{bench40} 5x1</p>
											<p>{bench50} 5x1</p>
											<p>{bench60} 5x1</p>
											<p>Chin-ups: 10x5</p>
										</Table.Cell>
										<Table.Cell>
											<p>{squat40} 5x1</p>
											<p>{squat50} 5x1</p>
											<p>{squat60} 5x1</p>
											<p>Leg Curl: 10x5</p>
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

export default connect(mapStateToProps)(Wendlers);